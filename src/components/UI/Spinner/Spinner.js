import React from "react";

import styles from './Spinner.module.scss';

const spinner = () => {
  return (
    <div className={styles["lds-hourglass"]}>Loading...</div>
  );
};

export default spinner;