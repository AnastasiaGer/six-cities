import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {offers} from './mock/hotels.js';
import {reviews} from './mock//reviews';

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);

// npm run test.jest -- -u
