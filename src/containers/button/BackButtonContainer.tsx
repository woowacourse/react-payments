import React from 'react';

import Button from 'components/button/Button';

function BackButtonContainer() {
  const handleBackButtonClick = () => {
    window.location.pathname = '/card';
  };

  return <Button onClick={handleBackButtonClick} buttonType="back" />;
}

export default BackButtonContainer;
