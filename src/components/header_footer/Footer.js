import React from 'react';
import classes from './header.module.css';

import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className={classes.bck_red}>
      <Fade delay={500}>
        <div className={classes.footer_logo_venue}>My Upcoming Birthday</div>
        <div className={classes.footer_copyright}>
          &copy;{' '}
          <a className={classes.link} href='//thewebdev.net' target='_blank'>
            LemaTech
          </a>{' '}
          2020.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
