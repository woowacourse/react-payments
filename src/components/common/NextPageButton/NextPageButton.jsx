import React from 'react';
import PropTypes from 'prop-types';

function NextPageButton({ text }) {
  return (
    <div className="button-box">
      <button type="submit" className="button-text next-page-button">
        {text}
      </button>
    </div>
  );
}

export default NextPageButton;

NextPageButton.propTypes = {
  text: PropTypes.string.isRequired,
};
