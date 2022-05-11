import styled from '@emotion/styled';

const FlipableCardWrapper = styled.div`
  perspective: 1000px;
  width: 208px;
  height: 130px;
  margin-bottom: 20px;
  & > .front,
  & > .back {
    width: 208px;
    height: 130px;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 5px;
  }
`;

export default FlipableCardWrapper;
