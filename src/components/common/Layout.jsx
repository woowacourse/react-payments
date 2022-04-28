const Layout = ({ children }) => {
  return (
    <div className="root">
      <div className="app">{children}</div>
    </div>
  );
};

export default Layout;
