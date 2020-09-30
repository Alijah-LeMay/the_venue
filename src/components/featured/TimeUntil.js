import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import classes from './featured.module.css';

export class TimeUntil extends Component {
  state = {
    deadline: 'Nov, 05, 2020',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className={classes.countdown_wrapper}>
          <div className={classes.countdown_top}>Event starts in</div>
          <div className={classes.countdown_bottom}>
            <div className={classes.countdown_item}>
              <div className={classes.countdown_time}>{this.state.days}</div>
              <div className={classes.countdown_tag}>Days</div>
            </div>
            <div className={classes.countdown_item}>
              <div className={classes.countdown_time}>{this.state.hours}</div>
              <div className={classes.countdown_tag}>Hrs</div>
            </div>
            {/* /SEPERATE SLOTS FOR MEDIA QUERY */}
            <div className={classes.countdown_item}>
              <div className={classes.countdown_time}>{this.state.minutes}</div>
              <div className={classes.countdown_tag}>Min</div>
            </div>
            <div className={classes.countdown_item}>
              <div className={classes.countdown_time}>{this.state.seconds}</div>
              <div className={classes.countdown_tag}>Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TimeUntil;
