import React from 'react';
import classes from './location.module.css';
const index = () => {
  return (
    <div className={classes.location_wrapper}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412508.1859038511!2d-115.45517433985229!3d36.12467379358188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1598058112314!5m2!1sen!2sus'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen
        // aria-hidden='false'
        // tabindex='0'
      ></iframe>
      <div className={classes.location_tag}>
        <div>Location</div>
      </div>
    </div>
  );
};

export default index;
