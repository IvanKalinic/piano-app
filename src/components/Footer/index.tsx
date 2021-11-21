import React, { FunctionComponent } from "react";
import "./index.scss";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <a href="https://fullstack.io">Fullstack.io</a>
      <br />
      {currentYear}
    </footer>
  );
};
