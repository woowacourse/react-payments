import styled from '@emotion/styled';

interface SingleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SingleButton = ({
  type = 'button',
  children,
  onClick,
  disabled,
  className,
}: SingleButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </Button>
  );
};

export default SingleButton;

const Button = styled.button`
  border: 0;
  background-color: transparent;
`;
