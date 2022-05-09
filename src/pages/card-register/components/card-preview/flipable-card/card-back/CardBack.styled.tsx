import styled from '@emotion/styled';

const CardBack = styled.div`
  background-color: #9e9e9e;
  transform: rotateY(180deg);
  padding-top: 15px;
  .strip {
    width: 100%;
    height: 26px;
    background-color: black;
    margin-bottom: 5px;
  }
  .cvc {
    width: 88%;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: right;
    label: {
      display: block;
      font-size: 8px;
      text-transform: uppercase;
      color: #fff;
      margin-bottom: 4px;
    }
    .content {
      padding: 4px;
      height: 18px;
      border-radius: 5px;
      text-align: right;
      background-color: white;
      color: black;
      font-size: 10px;
    }
  }
  .info {
    display: flex;
    position: absolute;
    bottom: 8px;
    left: 10px;
    font-size: 8px;
    .tel {
      padding-right: 8px;
    }
  }
`;

export default CardBack;
