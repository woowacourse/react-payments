import styled from 'styled-components';

export const Button = ({ children, onClick, disabled }) => {
  return (
    <Style.Button onClick={onClick} type="button" disabled={disabled}>
      {children}
    </Style.Button>
  );
};

const Style = {
  Button: styled.button`
    color: ${(props) => (props.disabled ? '#ECEBF1' : '#04c09e')};
    background-color: transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      cursor: unset;
    }
  `,
};
