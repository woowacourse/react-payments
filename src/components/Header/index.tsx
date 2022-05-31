type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return <header>{children}</header>;
}

export default Header;
