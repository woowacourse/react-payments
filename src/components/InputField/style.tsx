import styled from 'styled-components';

export const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
`;

export const StyledLabel = styled.label`
  ${(props) => props.theme.typography.label};
  color: ${(props) => props.theme.color.black};
`;

export const StyledInputs = styled.div`
  display: flex;
  gap: 1rem;

  width: 100%;
`;

export const StyledError = styled.span`
  ${(props) => props.theme.typography.caption};
  color: ${(props) => props.theme.color.red};
`;
