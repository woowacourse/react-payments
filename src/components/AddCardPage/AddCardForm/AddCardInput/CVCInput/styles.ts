import styled from 'styled-components';

export const QuestionMarkContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  margin: auto 0 auto 1rem;
  cursor: pointer;

  &:hover::after {
    content: '';
    position: absolute;
    display: block;
    width: 10rem;
    height: 10rem;
    left: 2.5rem;
    top: -2.5rem;
    background: url(${process.env.PUBLIC_URL + '/images/example.png'}) no-repeat;
  }
`;
