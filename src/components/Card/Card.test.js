import React from "react";
import renderer from "react-test-renderer";
import Card from './Card.jsx';
import {titleCard} from '../../mock/hotels.js';

it(`check render Card`, () => {
  const tree = renderer.create(
      <Card
        nameCard={titleCard}
        onTitleCardClick={jest.fn()}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
