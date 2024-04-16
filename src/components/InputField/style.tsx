import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const Label = styled.label`
  ${(props) => props.theme.typography.label};
  color: ${(props) => props.theme.color.black};
`;

export const Inputs = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const Error = styled.span`
  ${(props) => props.theme.typography.caption};
  color: ${(props) => props.theme.color.red};
`;
