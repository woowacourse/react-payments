import styled, { keyframes } from 'styled-components';

export function Loading() {
  return (
    <_Wrapper>
      <_Background>
        <_Masker></_Masker>
      </_Background>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  padding: 10px;
  background-color: #fff;
  width: 20rem;
`;

const _Animation = keyframes`
0% {
    background-position: -800px 0
  }
  100% {
    background-position: 800px 0
  }
}
`;

const _Background = styled.div`
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${_Animation};
  animation-timing-function: linear;
  background-color: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 11rem;
  position: relative;
`;

const _Masker = styled.div`
  background-color: #fff;
  position: absolute;
`;
