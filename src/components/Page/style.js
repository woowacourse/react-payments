import styled from 'styled-components';

// width: 23.4rem;
const Container = styled.div`
  position: relative;
  width: 25.9rem;
  height: 46rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
`;

const Header = styled.div`
  width: 96%;
  height: 8%;
  margin: 2% 2% 6% 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export { Container, Header, Body };
