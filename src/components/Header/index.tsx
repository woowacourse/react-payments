import { HeaderWrapper } from "./style";

interface HeaderProps {
  headText: string;
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
}

function Header({ headText, leftChild, rightChild }: HeaderProps) {
  return (
    <HeaderWrapper>
      <div>{leftChild}</div>
      <h1>{headText}</h1>
      <div>{rightChild}</div>
    </HeaderWrapper>
  );
}

export default Header;
