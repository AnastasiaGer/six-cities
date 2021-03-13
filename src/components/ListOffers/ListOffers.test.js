/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import ListOffers from './ListOffers.jsx';

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

it(`check render ListOffers`, () => {
  const tree = renderer.create(
      <ListOffers
        offers={offers}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
