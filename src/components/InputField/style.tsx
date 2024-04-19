import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  margin-bottom: 0.4rem;
`;

export const Legend = styled.legend`
  margin-bottom: 0.8rem;
  ${(props) => props.theme.typography.label};
  color: ${(props) => props.theme.color.black};
`;

export const Inputs = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const ErrorCaption = styled.span`
  ${(props) => props.theme.typography.caption};
  color: ${(props) => props.theme.color.red};
`;
