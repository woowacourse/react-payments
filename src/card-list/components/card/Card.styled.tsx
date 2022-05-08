import styled from '@emotion/styled';

const Card = styled.div`
  width: 208px;
  height: 130px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  // type
  & .type {
    font-size: 10px;
    margin-bottom: 14px;
  }

  // chip
  & .chip {
    width: 40px;
    height: 26px;
    margin-bottom: 16px;

    background: #cbba64;
    border-radius: 4px;
  }

  // number
  & .number {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    min-height: 16px;
  }

  // info
  & .info {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    align-items: center;
    .expired-period {
      letter-spacing: -1px;
    }
  }
`;

export default Card;
