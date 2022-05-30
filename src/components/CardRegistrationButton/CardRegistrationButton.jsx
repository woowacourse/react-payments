import React from 'react';
import styled from 'styled-components';
import ICONS from '../../constants/icons';

const CardRegistration = () => (
  <StyledCardPreview className="card-box">
    <div className="empty-card">
      <div className="card-middle">{ICONS.PLUS}</div>
    </div>
  </StyledCardPreview>
);

const StyledCardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  color: #575757;

  .empty-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;

    width: 198px;
    height: 130px;

    background: #e5e5e5;
    border-radius: 5px;
  }

  .card-middle {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default CardRegistration;
