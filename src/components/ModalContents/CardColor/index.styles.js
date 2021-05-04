import styled from 'styled-components';

const CardColorWrapper = styled.div`
  display: grid;
  width: 90%;
  height: 95%;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  cursor: pointer;
`;

export default CardColorWrapper;
