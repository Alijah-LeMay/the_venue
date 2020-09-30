import React, { Component } from 'react';
import classes from './highlights.module.css';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../UI/MyButton';
import MyColors from '../../constants/MyColors';

export class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };
  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }
  render() {
    return (
      <div className={classes.center_wrapper}>
        <div className={classes.discount_wrapper}>
          <Fade onReveal={() => this.porcentage()}>
            <div className={classes.discount_porcentage}>
              <span>{this.state.discountStart}%</span>
              <span> OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className={classes.discount_description}>
              <h3>Purchase Tickets before June 20th</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={classes.discount_button}>
                <MyButton
                  text='Purchase tickets'
                  bck={MyColors.main_color}
                  color='#fff'
                  link='https://google.com'
                ></MyButton>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
