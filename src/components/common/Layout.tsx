interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="root">
      <div className="app">{children}</div>
    </div>
  );
};

export default Layout;
