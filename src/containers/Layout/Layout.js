import React from "react";

import Navigation from '../../components/Navigations/Navigations';

import styles from "./Layout.scss";

const layout = (props) => {
  return (
    <div className={styles.Layout}>
      <Navigation />
      <main className={styles.Content}>
        {props.children}
      </main>
    </div>
  )
};

export default layout;