const Header = ({ title, left, right }) => {
  return (
    <div className="header-container">
      {left}
      <h2 className="page-title">{title}</h2>
      {right}
    </div>
  );
};

export default Header;
