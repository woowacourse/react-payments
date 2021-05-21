import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const CardNickName = styled.span`
  width: 100%;
  display: flex;
  margin: 0.6rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #575757;
  justify-content: center;
  align-items: center;
`;

export { Container, CardNickName };
