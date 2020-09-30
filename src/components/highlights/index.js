import React from 'react';
import Description from './Description';
import classes from './highlights.module.css';

import Discount from './Discount';

const index = () => {
  return (
    <div className={classes.highlight_wrapper}>
      <Description />
      <Discount />
    </div>
  );
};

export default index;
