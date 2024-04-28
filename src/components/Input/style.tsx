import styled from 'styled-components';

export const Input = styled.input<{ $invalid?: boolean }>`
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem;

  border: 0.1rem solid
    ${(props) => (props.$invalid ? props.theme.color.red : props.theme.color.lightGray)};
  border-radius: 0.2rem;
  ${(props) => props.theme.typography.input};

  &:focus {
    border-color: ${(props) => (props.$invalid ? props.theme.color.red : props.theme.color.black)};
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.color.lightGray};
  }
`;
