import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/button/Button';

const Wrapper = styled.div(() => ({
  width: '208px',
  height: '122px',
  backgroundColor: '#E5E5E5',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function AddCardContainer() {
  const handleAddCradButtonClick = () => {
    window.location.pathname = '/card/add';
  };

  return (
    <Wrapper>
      <Button onClick={handleAddCradButtonClick} buttonType="plus" />
    </Wrapper>
  );
}

export default AddCardContainer;
