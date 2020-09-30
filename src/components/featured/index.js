import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil.js';
import classes from './featured.module.css';

const Featured = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carrousel />
      <div className={classes.artist_name}>
        <div className={classes.wrapper}>Alijah LeMay</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
