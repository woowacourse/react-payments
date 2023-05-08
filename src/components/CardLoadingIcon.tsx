import styled, { Keyframes, keyframes } from "styled-components";

const CardLoadingIcon = () => {
  return (
    <>
      <Container>
        <Card $appear={$cardAppear} $shake={$shake} $rotate={$rotate}>
          <MagneticTape $move={moveICChip} />
          <Text1 $appear={$textAppear} $disappear={$textDisppear} />
          <Text2 $appear={$textAppear} $disappear={$textDisppear} />
          <Text3 $appear={$textAppear} $disappear={$textDisppear} />
          <Light $shining={$shining} />
          <Light2 $shining={$shining} />
          <LoadingBarCenter $appear={$loadingBarAppear} />
        </Card>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  top: 100px;

  width: 200px;
  height: 120px;

  margin-top: 100px;
`;

const Light = styled.div<{ $shining: Keyframes }>`
  position: absolute;
  left: 18%;

  height: 100%;
  width: 20%;

  background-color: rgba(255, 255, 255, 0.15);
  transform: skew(25deg);

  animation: ${(props) => props.$shining} 1.4s ease-in;
  animation-fill-mode: both;
`;

const Light2 = styled.div<{ $shining: Keyframes }>`
  position: absolute;
  left: 45%;

  height: 100%;
  width: 10%;

  background-color: rgba(255, 255, 255, 0.15);
  transform: skew(25deg);

  animation: ${(props) => props.$shining} 1.4s ease-in;
  animation-fill-mode: both;
`;

const Card = styled.div<{ $appear: Keyframes; $shake: Keyframes; $rotate: Keyframes }>`
  position: relative;
  left: 0%;

  width: 200px;
  height: 120px;

  overflow: hidden;
  background-color: #4a7cff;
  border-radius: 5%;

  animation: ${(props) => props.$appear} 1.2s ease-in-out, ${(props) => props.$shake} 1.4s ease-in-out,
    ${(props) => props.$rotate} 1.2s ease-in-out infinite;
  animation-fill-mode: both, forwards, forwards;
  animation-delay: 0.2s, 1.7s, 3s;
`;

const Text1 = styled.div<{ $appear: Keyframes; $disappear: Keyframes }>`
  position: absolute;
  left: 8%;
  top: 68%;

  width: 83%;
  height: 7%;
  border-radius: 10px;

  background-color: rgb(36 92 238);

  animation: ${(props) => props.$appear} 0.7s ease-in, ${(props) => props.$disappear} 0.5s ease-in;
  animation-fill-mode: both, forwards;
  animation-delay: 0.5s, 1.7s;
`;

const Text2 = styled.div<{ $appear: Keyframes; $disappear: Keyframes }>`
  position: absolute;
  left: 8%;
  top: 80%;

  width: 30%;
  height: 7%;
  border-radius: 10px;

  background-color: rgb(36 92 238);

  animation: ${(props) => props.$appear} 0.7s ease-in, ${(props) => props.$disappear} 0.5s ease-in;
  animation-fill-mode: both, forwards;
  animation-delay: 0.5s, 1.7s;
`;

const Text3 = styled.div<{ $appear: Keyframes; $disappear: Keyframes }>`
  position: absolute;
  left: 71%;
  top: 80%;

  width: 20%;
  height: 7%;
  border-radius: 10px;

  background-color: rgb(36 92 238);

  animation: ${(props) => props.$appear} 0.7s ease-in, ${(props) => props.$disappear} 0.5s ease-in;
  animation-fill-mode: both, forwards;
  animation-delay: 0.5s, 1.7s;
`;

const MagneticTape = styled.div<{ $move: Keyframes }>`
  position: absolute;
  top: 30%;
  left: 10%;

  width: 20%;
  height: 28%;
  border-radius: 10px;

  background-color: white;

  animation: ${(props) => props.$move} 0.5s ease-in;
  animation-fill-mode: both;
  animation-delay: 2s;
`;

const LoadingBarCenter = styled.div<{ $appear: Keyframes }>`
  position: absolute;
  top: 10%;
  left: 10%;

  width: 80%;
  height: 80%;
  border-radius: 50%;

  background-color: white;

  animation: ${(props) => props.$appear} 0.5s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 2s;
`;

const $cardAppear = keyframes`
0%{
  transform: rotate(-50deg);
  width: 0px;
  transform-origin: right bottom;
  box-shadow: 7px 0 rgba(36 92 238, 0);
}
100%{
  transform: rotate(0);
  width: 200px;
  box-shadow: 7px 0 rgb(36 92 238);
}
`;

const $shining = keyframes`
0%{
  transform: translate(-300px, 0) skew(25deg);
}
100%{
  transform: translate(300px, 0) skew(25deg);
}
`;

const $textAppear = keyframes`
0%{
  transform: scale(0, 1);
}
100%{
  transform: scale(1, 1);}
`;

const $textDisppear = keyframes`
0%{
  transform: scale(1, 1);
}
100%{
  transform: scale(0, 1);}
`;

const $loadingBarAppear = keyframes`
0%{
  transform: scale(0);
}
1%{
  transform: scale(0.03, 0.5);
}
100%{
  transform: scale(1);
}
`;

const moveICChip = keyframes`
0%{
  top: 30%;
  left: 10%;
}
100%{
  top: 30%;
  left: -7%;

  width: 30%;
  height: 40%;

  background-color: #d7edff;
  clip-path: polygon(0 0, 0 100%, 100% 80%, 100% 20%);
}
  
`;
const $rotate = keyframes`
0%{
  transform: rotate(90deg) scale(0.24, 0.4);
}
100%{
  transform: rotate(450deg) scale(0.24, 0.4);
}
`;

const $shake = keyframes` 
0%{
}
50%{
  transform-origin: center;
  transform: rotate(90deg) scale(0.24, 0.4);

  border-radius: 50%;
  overflow: hidden;
  box-shadow: none;
}
100%{
  transform-origin: center;
  transform: rotate(90deg) scale(0.24, 0.4);
  
  border-radius: 50%;
  overflow: hidden;
  box-shadow: none;

}
`;

export default CardLoadingIcon;
