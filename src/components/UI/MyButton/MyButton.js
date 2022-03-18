import React from "react";
import cn from "classnames";
import styles from "./MyButton.module.css";
const MyButton = ({ className, children }) => {
  return <button className={cn(styles.btn, className)}>{children}</button>;
};

export default MyButton;
