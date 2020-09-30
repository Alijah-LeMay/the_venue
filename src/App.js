import React from 'react';
import { Element } from 'react-scroll';

import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div
      className='App'
      style={{ height: '1500px', background: 'cornflowerblue' }}
    >
      <Header />
      <Element name='events'>
        <Featured />
      </Element>
      <Element name='venue'>
        <VenueInfo />
      </Element>
      <Element name='highlight'>
        <Highlight />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>

      <Element name='location'>
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
