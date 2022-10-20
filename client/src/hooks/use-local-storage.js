/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";

/** @typedef {(object: T | undefined) => string} Serializer */
/** @typedef {(value: string) => T | undefined} Parser */
/** @typedef {React.Dispatch<React.SetStateAction<T | undefined>>} Setter */

/**
 * @typedef {Partial<{
 *   serializer: Serializer<T>;
 *   parser: Parser<T>;
 *   logger: (error: Error) => void;
 *   syncData: boolean;
 * }>} Options
 */

/** @param {string} key
 * @param {T} defaultValue
 * @param {Options<T> | undefined} options
 * @returns {any[]}
 */
function useLocalStorage(key, defaultValue, options = {}) {
  const opts = useMemo(() => {
    return {
      serializer: JSON.stringify,
      parser: JSON.parse,
      logger: console.log,
      syncData: true,
      ...options,
    };
  }, [options]);
  const { serializer, parser, logger, syncData } = opts;
  const [storedValue, setValue] = useState(() => {
    if (typeof window === "undefined") return defaultValue;
    if (defaultValue instanceof Function) return defaultValue();
    try {
      const item = window.localStorage.getItem(key);
      const result = item ? parser(item) : defaultValue;
      return result;
    } catch (e) {
      logger(e);
      return defaultValue;
    }
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateLocalStorage = () => {
      if (storedValue !== undefined) {
        window.localStorage.setItem(key, serializer(storedValue));
      } else {
        window.localStorage.removeItem(key);
      }
    };
    try {
      updateLocalStorage();
    } catch (error) {
      logger(error);
    }
  }, [storedValue]);
  useEffect(() => {
    if (!syncData) return;
    const handleStorageChange = (e) => {
      if (e.key !== key || e.storageArea !== window.localStorage) return;
      try {
        setValue(e.newValue ? parser(e.newValue) : undefined);
      } catch (e) {
        logger(e);
      }
    };
    if (typeof window === "undefined") return;
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, syncData]);
  return [storedValue, setValue];
}
export { useLocalStorage };
