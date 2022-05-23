import React, { MutableRefObject } from "react";
import styled from "styled-components";
import Text from "styles/text";
import { RowFlexWrapper } from "styles/wrapper";

const SliderContainer = styled.div`
  width: 240px;
  height: 160px;
  background-color: #f6f6f6;
  overflow: hidden;
  padding: 10px;
`;

const SlideContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
  gap: 100px;
  margin-left: 15px;
  align-items: center;
`;

function Slider({
  children,
  slideRef,
  prevSlide,
  nextSlide,
}: {
  children: React.ReactNode;
  slideRef: MutableRefObject<null | HTMLDivElement>;
  prevSlide: () => void;
  nextSlide: () => void;
}) {
  return (
    <RowFlexWrapper gap="35">
      <Text fontSize="30px" fontWeight="600" color="#575757" pointer={true}>
        {"<"}
      </Text>
      <SliderContainer>
        <SlideContainer ref={slideRef}>{children}</SlideContainer>
      </SliderContainer>
      <Text fontSize="30px" fontWeight="600" color="#575757" pointer={true}>
        {">"}
      </Text>
    </RowFlexWrapper>
  );
}

export default Slider;
