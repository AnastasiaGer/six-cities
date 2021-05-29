
import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../Main/Main.jsx';
import Property from '../Property/Property.jsx';
import CustomsOfferType from '../../CustomsOfferType/CustomsOfferType.js';
import CustomsReviewType from '../../CustomsOfferType/CustomsReviewType.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offer: null,
    };

    // this.handlerCardMouseOver = this.handlerCardMouseOver.bind(this);
    this.handlerTitleClick = this.handlerTitleClick.bind(this);
  }

  handlerTitleClick(offerCard) {
    this.setState({
      offer: offerCard,
    });
  }

  // handlerCardMouseOver() {}


  _renderApp() {
    const {offers, reviews} = this.props;
    const {offer} = this.state;

    if (this.state.offer) {
      return (
        <Property
          offer={offer}
          reviews={reviews}
          onTitleCardClick={this.handlerTitleClick}
        />
      );
    }

    return (
      <Main
        onTitleCardClick={this.handlerTitleClick}
        offers={offers}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-property">
            <Property
              offer={this.props.offers[0]}
              reviews={this.props.reviews}
              onTitleCardClick={this.handlerTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>

    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(CustomsOfferType).isRequired
  ),
  reviews: PropTypes.arrayOf(
      PropTypes.shape(CustomsReviewType).isRequired
  )
};


export default App;
