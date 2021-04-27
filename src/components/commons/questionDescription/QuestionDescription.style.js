import styled from 'styled-components';

const Styled = {
  QuestionDescription: styled.div`
    position: relative;
  `,
  Container: styled.div`
    display: inline-block;
    border-radius: 50%;
    &:hover {
      & + .message-container {
        display: block;
      }
    }
  `,
  QuestionMark: styled.div`
    color: #969696;
    font-size: 20px;
  `,
  MessageContainer: styled.div`
    position: absolute;
    display: none;
  `,
  Message: styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -175px;
    left: -18px;
    width: 200px;
    height: 120px;
    padding: 0px;
    background: #ffffff;
    border-radius: 4px;
    border: #04c09e solid 2px;

    &:after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 15px 14px 0;
      border-color: #ffffff transparent;
      display: block;
      width: 0;
      z-index: 1;
      bottom: -15px;
      left: 16px;
    }

    &:before {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 16px 15px 0;
      border-color: #04c09e transparent;
      display: block;
      width: 0;
      z-index: 0;
      bottom: -18px;
      left: 15px;
    }

    & > .image {
      width: 150px;
    }
  `,
};

export default Styled;
