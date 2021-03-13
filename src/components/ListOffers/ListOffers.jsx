import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';
import CustomsOfferType from '../../CustomsOfferType/CustomsOfferType.js';

export default class ListOffers extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      offer: {}
    };
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <Card
            key={offer.id}
            offer={offer}
            onHover={() => {
              this.setState({offer});
            }}
          />
        )}
      </div>
    );
  }
}

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(CustomsOfferType).isRequired
  ),
  // titleCardHandler: PropTypes.func.isRequired
};
