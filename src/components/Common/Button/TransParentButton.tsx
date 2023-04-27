import styled from 'styled-components';

interface TransParentButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function TransParentButton({ type = 'button', children, onClick, ...props }: TransParentButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

export default TransParentButton;
