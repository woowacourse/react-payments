import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  width: 100%;
  height: 100%;
  margin-top: 40%;
  padding: 0 2rem;
`;

export const FailureIcon = styled.img`
  width: 20rem;
  height: 20rem;
`;

export const ErrorMessage = styled.h1`
  ${(props) => props.theme.typography.heading};
  color: ${(props) => props.theme.color.black};
  white-space: pre-line;
  text-align: center;
`;

export const BackButton = styled.div`
  width: 100%;
  height: 4.4rem;
`;
