import styled from "styled-components";

type AppBarProps = {
  title: string;
  children?: JSX.Element;
};

const AppBar = ({ title, children }: AppBarProps) => {
  return (
    <Div>
      {children && children}
      <h1>{title}</h1>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 40px;

  gap: 10px;

  font-size: 16px;

  a {
    text-decoration: none;
  }

  h1 {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
  }
`;

export default AppBar;
