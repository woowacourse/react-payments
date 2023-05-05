import styled from "styled-components";
import { glareX, glareY } from "../keyframes/glare";
import { swayX, swayY } from "../keyframes/sway";
import { PropsWithChildren } from "react";

const SwayWithGlareAnimation = ({ children }: PropsWithChildren) => {
  return (
    <AnimationFrame>
      <SwayY>
        <SwayX>{children}</SwayX>
      </SwayY>
      <GlareY>
        <GlareX />
      </GlareY>
    </AnimationFrame>
  );
};

export default SwayWithGlareAnimation;

const AnimationFrame = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1;
  grid-template-rows: 1;

  & > * {
    grid-area: 1 / 1 / 1 / 1;
  }
`;

const SwayX = styled.div`
  animation-name: ${swayX};
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`;

const SwayY = styled.div`
  animation-name: ${swayY};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`;

const GlareX = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #faf7ed;
  filter: blur(70px);

  animation-name: ${glareX};
  animation-duration: 1s;
  animation-delay: -1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`;

const GlareY = styled.div`
  animation-name: ${glareY};
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`;
