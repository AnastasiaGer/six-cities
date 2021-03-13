import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {Ads, offers} from './mock/hotels.js';

ReactDOM.render(
    <App
      housingCount={Ads.HOUSING_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);

// npm run test.jest -- -u
