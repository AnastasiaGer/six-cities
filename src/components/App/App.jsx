import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main/Main.jsx';
import CustomsOfferType from '../../CustomsOfferType/CustomsOfferType.js';


const App = (props) => {
  const {housingCount, offers} = props;

  return (
    <Main
      housingCount={housingCount}
      offers={offers}
    />
  );
};

App.propTypes = {
  housingCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(CustomsOfferType).isRequired
  ),
};

export default App;
