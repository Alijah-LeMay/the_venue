import React, { Component } from 'react';
import MyButton from '../UI/MyButton';
import Zoom from 'react-reveal/Zoom';

import classes from './pricing.module.css';
import MyColors from '../../constants/MyColors';

export class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    ],
    linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
    delay: [500, 0, 500],
    //switch delay to something more suitable for mobile upon some window check?
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className={classes.pricing_item}>
          <div className={classes.pricing_inner_wrapper}>
            <div className={classes.pricing_title}>
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]} </span>
            </div>
            <div className={classes.pricing_description}>
              {this.state.desc[i]}
            </div>
            <div className={classes.pricing_buttons}>
              <MyButton
                text='Purchase'
                bck={MyColors.main_color}
                color='#fff'
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className={classes.bck_black}>
        <div className={classes.center_wrapper_pricing_section}>
          <h2>Pricing</h2>

          <div className={classes.pricing_wrapper}>{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
