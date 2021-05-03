import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.color || 'grey'};
    animation: 0.8s ease spinner;
    animation-iteration-count: infinite;

    @keyframes spinner {
      0% {
        transform: translate(-100%, 100%);
      }
      25% {
        transform: translate(-100%, -100%);
      }
      50% {
        transform: translate(100%, -100%);
      }
      75% {
        transform: translate(100%, 100%);
      }
      100% {
        transform: translate(-100%, 100%);
      }
    }
  `,
};

export default Styled;
