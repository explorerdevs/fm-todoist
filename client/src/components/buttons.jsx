import React from "react";
import styles from "../styles/buttons.module.css";

const GradientBtn = ({ type, srtext }) => {
  return (
    <button type={type} className={`btn ${styles["btn-checkbox"]}`}>
      <span className="sr-only">{srtext}</span>
    </button>
  );
};

export { GradientBtn };
