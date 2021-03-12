import React from 'react';
import Main from '../Main/Main.jsx';

const App = (props) => {
  const {housingCount} = props;

  return (
    <Main
      housingCount={housingCount}
    />
  );
};

export default App;