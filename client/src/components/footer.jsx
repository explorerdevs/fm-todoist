import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container attribution">
        Challenge by&nbsp;
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/JoleneKearse">Jolene Kearse</a>,{" "}
        <br />
        <a href="https://www.ashmoreno.dev" target="_blank">
          Ash Moreno
        </a>
        ,&nbsp;
        <a href="https://wfeliciano20.github.io/Portfolio/" target="_blank">
          William Rios
        </a>
        , and{" "}
        <a href="https://github.com/princemuel" target="_blank">
          Samuel Chukwuzube
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
