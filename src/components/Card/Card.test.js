/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import Card from './Card.jsx';

export const offer = {
  id: 2,
  photo: `./img/apartment-02.jpg`,
  premium: true,
  price: 250,
  title: `Wood and stone place`,
  type: `room`,
  rating: 5
};

it(`check render Card`, () => {
  const tree = renderer.create(
      <Card
        offer={offer}
        onHover={jest.fn()}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
