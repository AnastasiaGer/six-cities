import React from 'react';
import CustomsReviewType from '../../CustomsOfferType/CustomsReviewType.js';
import PropTypes from 'prop-types';
import ReviewsItem from '../ReviewsItem/ReviewsItem.jsx';

const ReviewsList = ({reviews}) => {

  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewsItem
          key={review.id}
          review={review}
        />)
      }
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(CustomsReviewType).isRequired
  )
};

export default ReviewsList;
