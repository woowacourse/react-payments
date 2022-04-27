const Layout = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="root">
        <div className="app">{children}</div>
      </div>
    </>
  );
};

export default Layout;
