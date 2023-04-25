export type HeaderProps = {
  title: string;
  hasBackButton?: boolean;
};

function Header({ title, hasBackButton }: HeaderProps) {
  return <div>{title}</div>;
}
export default Header;
