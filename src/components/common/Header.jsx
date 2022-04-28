const Header = ({ title, children }) => {
  return (
    <div className="header-wrapper">
      {children}
      <h2 className="page-title">{title}</h2>
    </div>
  );
};

export default Header;
