import React from 'react';

import styles from './Route1.module.scss';
import { Button } from "react-bootstrap";

const route1 = () => {
  return (
    <div className={styles.Route1}>
      <div className={styles.FunTest1}>Fun Test 1</div>
      <h1>Test 1 component</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="warning">Warning</Button>
    </div>
  );
};

export default route1;