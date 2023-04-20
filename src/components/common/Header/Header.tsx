type Props = {
  text: string;
  onClickBackButton?: () => void;
};

function Header({ text, onClickBackButton }: Props) {
  return (
    <div>
      {onClickBackButton && <button onClick={onClickBackButton}>{'<'}</button>}
      <span>{text}</span>
    </div>
  );
}

export default Header;
