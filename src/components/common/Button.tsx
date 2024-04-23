import ButtonStyle from '../style/Button.style';

const Button = ({ ...props }: ButtonProps) => {
  const { text, onClick, floating, width } = props;

  return (
    <ButtonStyle
      type="button"
      onClick={onClick}
      floating={floating}
      width={width}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
