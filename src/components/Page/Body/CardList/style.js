import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 32.5rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 2rem 0;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`;

const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

const CardAddButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export { Container, CardListContainer, CardAddButtonContainer };
