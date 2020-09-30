import classes from './venueInfo.module.css';
import React from 'react';

import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
const VenueInfo = () => {
  return (
    <div className={classes.bck_black}>
      <div className={classes.center_wrapper}>
        <div className={classes.vn_wrapper}>
          <Zoom duration={500}>
            <div className={classes.vn_item}>
              <div className={classes.vn_outer}>
                <div className={classes.vn_inner}>
                  <div className={classes.vn_icon_square_bck_red}></div>
                  <div
                    className={classes.vn_icon}
                    style={{ background: `url(${icon_calendar})` }}
                  ></div>
                  <div className={classes.vn_title}>Event Date & Time</div>
                  <div className={classes.vn_desc}>5 November 2020</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className={classes.vn_item}>
              <div className={classes.vn_outer}>
                <div className={classes.vn_inner}>
                  <div className={classes.vn_icon_square_bck_yellow}></div>
                  <div
                    className={classes.vn_icon}
                    style={{ background: `url(${icon_location})` }}
                  ></div>
                  <div className={classes.vn_title}>Event Location</div>
                  <div className={classes.vn_desc}>The Moon</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
