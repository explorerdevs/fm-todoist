import { useLocalStorage } from "./use-local-storage";

/** @typedef {[boolean, (value?: boolean) => void]} HookReturnType */

const useToggle = (key, initialValue) => {
  const [state, setState] = useLocalStorage(key, initialValue);

  const toggle = (value) => {
    setState((prev) => {
      return typeof value === "boolean" ? value : !prev;
    });
  };
  return [state, toggle];
};
export { useToggle };
