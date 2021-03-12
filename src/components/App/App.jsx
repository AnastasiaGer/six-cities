import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main/Main.jsx';

const App = (props) => {
  const {housingCount, namesCards} = props;

  return (
    <Main
      housingCount={housingCount}
      namesCards={namesCards}
    />
  );
};

App.propTypes ={
  housingCount:PropTypes.number.isRequired,
  namesCards: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default App;