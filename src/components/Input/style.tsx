import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem;

  border: 0.1rem solid ${(props) => props.theme.color.lightGray};
  border-radius: 0.2rem;
  ${(props) => props.theme.typography.input};

  ${(props) =>
    props['aria-invalid'] &&
    css`
      border-color: ${props.theme.color.red};
    `}

  &:focus {
    border-color: ${(props) => props.theme.color.black};
    outline: none;

    ${(props) =>
      props['aria-invalid'] &&
      css`
        border-color: ${props.theme.color.red};
      `}
  }

  &::placeholder {
    color: ${(props) => props.theme.color.lightGray};
  }
`;
