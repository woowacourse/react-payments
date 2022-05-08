import React from 'react';
import styled from 'styled-components';

const CardRegistration = () => (
  <StyledCardPreview className="card-box">
    <div className="small-card">
      <div className="card-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: '20px', width: '20px' }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </StyledCardPreview>
);

const StyledCardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  color: #575757;

  .small-card {
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
