import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';
import CustomsOfferType from '../../CustomsOfferType/CustomsOfferType.js';

const ListOffers = (props) => {

  const {offers, onTitleCardClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <Card
          key={offer.id}
          offer={offer}
          onTitleCardClick={onTitleCardClick}
        />
      )}
    </div>
  );
};

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(CustomsOfferType).isRequired
  ),
  onTitleCardClick: PropTypes.func.isRequired,
};

export default ListOffers;
