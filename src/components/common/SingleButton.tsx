import styled from '@emotion/styled';

interface SingleButtonProps {
  type?: 'submit' | 'reset' | 'button';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
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
