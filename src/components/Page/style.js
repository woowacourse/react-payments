import styled from 'styled-components';

// width: 23.4rem;
const Container = styled.div`
  width: 100%;
  height: 43.8rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 8%;
  margin: 2% 0 4% 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  height: 95%;
`;

export { Container, Header, Body };
