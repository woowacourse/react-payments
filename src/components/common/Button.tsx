import ButtonStyle from '../style/Button.style';

const Button = ({ ...props }: ButtonProps) => {
  const { type, text, onClick, $floating, width } = props;

  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      $floating={$floating}
      width={width}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
