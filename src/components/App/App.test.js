/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.jsx';
import {Ads} from '../../mock/hotels.js';

export const offers = [
  {
    id: 1,
    photo: `./img/apartment-01.jpg`,
    premium: true,
    price: 130,
    title: `Nice, cozy, warm big bed apartment`,
    type: `apartment`,
    rating: 3
  }, {
    id: 2,
    photo: `./img/apartment-02.jpg`,
    premium: true,
    price: 250,
    title: `Wood and stone place`,
    type: `room`,
    rating: 5
  }
];

it(`check render App`, () => {
  const tree = renderer
  .create(
      <App
        housingCount={Ads.HOUSING_COUNT}
        offers={offers}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
