export type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return <div>{title}</div>;
}
export default Header;
