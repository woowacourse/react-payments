import React from 'react';
import styled from '@emotion/styled';

import Button from 'components/button/Button';

const Wrapper = styled.div(() => ({
  width: '208px',
  height: '130px',
  backgroundColor: '#E5E5E5',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function AddCardContainer() {
  const handleAddCardButtonClick = () => {
    window.location.pathname = '/card/add';
  };

  return (
    <div>
      <Wrapper>
        <Button onClick={handleAddCardButtonClick} buttonType="plus" />
      </Wrapper>
    </div>
  );
}

export default AddCardContainer;
