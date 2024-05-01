import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  width: 100%;
  height: 100%;
  margin-top: 50%;
  padding: 0 2rem;
`;

export const SuccessIcon = styled.img`
  width: 7.6rem;
  height: 7.6rem;
`;

export const CardInfo = styled.h1`
  ${(props) => props.theme.typography.heading};
  color: ${(props) => props.theme.color.black};
  white-space: pre-line;
  text-align: center;
`;

export const BackButton = styled.div`
  width: 100%;
  height: 4.4rem;
`;
