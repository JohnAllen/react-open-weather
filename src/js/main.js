import React from 'react';
import { render } from 'react-dom';
import ReactWeather from './ReactWeather';


render(
  <ReactWeather
    apikey="7ad07aac9b0943040a4abdd2c23dfc4e"
    type="city"
    city="Munich"
  />,
  document.getElementById('root'));