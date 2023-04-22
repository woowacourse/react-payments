import styled from "styled-components";

type AppBarProps = {
  title: string;
  leftChild?: JSX.Element;
};

const AppBar = ({ title, leftChild }: AppBarProps) => {
  return (
    <Div>
      {leftChild && leftChild}
      <p>{title}</p>
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
  font-weight: 700;

  a {
    text-decoration: none;
  }

  p {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
  }
`;

export default AppBar;
