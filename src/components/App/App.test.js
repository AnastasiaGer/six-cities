import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.jsx';
import {Ads, namesCards} from '../../mock/hotels.js';

it(`check render App`, () => {
  const tree = renderer
  .create(
      <App
        housingCount={Ads.HOUSING_COUNT}
        namesCards={namesCards}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
