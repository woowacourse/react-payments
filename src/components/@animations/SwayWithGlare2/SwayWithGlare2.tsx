import { PropsWithChildren } from "react";
import styled from "styled-components";
import { glare, sway } from "../../../styles/keyframes/swayWIthGlare2";

const SwayWithGlare2 = ({ children }: PropsWithChildren) => {
  return (
    <AnimationFrame>
      <Sway>{children}</Sway>
      <Glare>
        <GlareStuff />
      </Glare>
    </AnimationFrame>
  );
};

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

const Sway = styled.div`
  animation-name: ${sway};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const Glare = styled.div`
  animation-name: ${glare};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const GlareStuff = styled.div`
  width: 50px;
  height: 150px;
  background-color: #ffffff;
  filter: blur(80px);
`;

export default SwayWithGlare2;
