import styled from 'styled-components';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  content: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
}

const Button = ({
  content,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} {...props}>
      {content}
    </button>
  );
};

const BasicButton = styled(Button)`
  font-size: 16px;
  font-weight: 700;
  line-height: 12px;

  background-color: #333333;
  color: #f3f3f3;

  cursor: pointer;
`;

export default BasicButton;
