import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main.jsx';
import {Ads, namesCards} from '../../mock/hotels.js';

it(`check render Main`, () => {
  const tree = renderer.create(
      <Main
        housingCount={Ads.HOUSING_COUNT}
        namesCards={namesCards}
        onTitleCardClick={jest.fn()}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
