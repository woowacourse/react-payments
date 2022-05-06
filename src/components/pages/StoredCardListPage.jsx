import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackwardButton from '../common/BackwardButton';
import Button from '../common/Button';

const StyledStoredCardList = styled.div`
  margin: 65px 59px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 508px;

  overflow-y: scroll;

  /* hide scrollbar */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .button {
    width: 208px;
    min-height: 123px;
    border-radius: 5px;

    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color: '#575757';
  }
`;

const StoredCardListPage = () => {
  return (
    <>
      <BackwardButton>보유카드</BackwardButton>
      <StyledStoredCardList>
        <Link to="/add-card">
          <Button color="#575757" backgroundColor="#E5E5E5">
            +
          </Button>
        </Link>
      </StyledStoredCardList>
    </>
  );
};

export default StoredCardListPage;
