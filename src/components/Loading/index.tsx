import styled from 'styled-components';
import { WalkingDog } from './WalkingDog';

export function Loading() {
  return (
    <Style.Container>
      <WalkingDog />
      <Style.Caption>
        <span className='animation'>L</span>
        <span className='animation'>o</span>
        <span className='animation'>a</span>
        <span className='animation'>d</span>
        <span className='animation'>i</span>
        <span className='animation'>n</span>
        <span className='animation'>g</span>
      </Style.Caption>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  Caption: styled.h2`
    width: 100%;
    margin-top: 20px;

    font-family: monospace;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    color: var(--grey-700);

    .animation {
      opacity: 0;
      animation: loading-text 3s infinite ease-in-out;
      display: inline-block;

      &:nth-child(1) {
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        animation-delay: 0.3s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-delay: 0.5s;
      }
      &:nth-child(5) {
        animation-delay: 0.6s;
      }
      &:nth-child(6) {
        animation-delay: 0.7s;
      }
      &:nth-child(7) {
        animation-delay: 0.8s;
      }

      @keyframes loading-text {
        0% {
          transform: translateY(0%);
          opacity: 1;
        }
        20% {
          transform: translateY(-60%);
          opacity: 1;
        }
        40% {
          transform: translateY(-100%);
          opacity: 0;
        }
        60% {
          opacity: 0;
        }
        80% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  `,
};
