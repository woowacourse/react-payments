import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

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
    color: ${COLOR.GRAY_200};
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
    top: -155px;
    left: -18px;
    width: 180px;
    height: 100px;
    padding: 0px;
    background-color: ${COLOR.WHITE};
    border-radius: 10px;
    border: ${COLOR.GRAY_100} solid 2px;

    &:after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 15px 14px 0;
      border-color: ${COLOR.WHITE} transparent;
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
      border-color: ${COLOR.GRAY_100} transparent;
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
