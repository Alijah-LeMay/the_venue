import React from 'react';
import Slider from 'react-slick';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
import classes from './featured.module.css';
const Carrousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  return (
    <div
      className={classes.carrousel_wrapper}
      style={{ height: `${window.innerHeight}px`, overflow: 'hidden' }}
    >
      <Slider {...settings}>
        <div>
          <div
            className={classes.carrousel_image}
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight > 20 ? window.innerHeight : 100}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className={classes.carrousel_image}
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight > 20 ? window.innerHeight : 100}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className={classes.carrousel_image}
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight > 20 ? window.innerHeight : 100}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
