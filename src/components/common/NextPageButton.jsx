import React from 'react';

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
