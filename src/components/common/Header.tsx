interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <div className="header-container">
      {children}
      <h2 className="page-title">{title}</h2>
    </div>
  );
};

export default Header;
