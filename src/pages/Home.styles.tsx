import styled, { keyframes } from 'styled-components';
import { AnimatedCardProps } from './Home';

const fadeIn = keyframes`
  from{
    opacity:0;
    transform: translateX(-30%) perspective(1000px) rotateY(-50deg);
  }
  to {
    opacity:1;
  }
`;

const testFold = keyframes`
from  { 
    margin-top: 16px;
    margin-bottom: 32px;
  }
  50% {
    margin-top: 24px;
    margin-bottom: 48px;
  }
  to {
    margin: 0px; 
  }
`;

const bounce = keyframes`
  from  { margin: 0px; }
  50% {
    margin-top: 24px;
    margin-bottom: 48px;
  }
  to {
    margin-top: 16px;
    margin-bottom: 32px;
  }
`;

export const Styled = {
  AddMsgSpan: styled.span`
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
  `,

  RegisterButton: styled.button`
    width: 208px;
    height: 123px;
    border: none;
    font-size: 30px;
    color: #575757;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  `,

  CardContainer: styled.div<AnimatedCardProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 22px;
    .fold {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 300px;
      height: ${(props) => 200 + props.index * 10}px;
    }
  `,

  AnimatedCardWrapper: styled.div<AnimatedCardProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    z-index: ${(props) => 1000 - props.index};
    animation: ${fadeIn} 0.5s ease-in-out ${(props) => props.index * 0.1}s forwards;
    .fold-card {
      position: absolute;
      transition: all 0.5s ease-in-out;
      animation: ${testFold} 0.5s ease ${(props) => props.index * 0.05}s forwards;
    }
    .unfold-card {
      animation: ${bounce} 0.5s ease ${(props) => props.index * 0.05}s forwards;
    }
    .fold-name {
      display: none;
    }
  `,

  AnimatedCardContainer: styled.div``,

  CardNameSpan: styled.span`
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 26px;
  `,

  ToggleCardListButton: styled.button`
    width: 140px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
  `,
};
