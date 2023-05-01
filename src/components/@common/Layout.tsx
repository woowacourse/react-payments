import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { PATHS } from "src/utils/constant";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const location = useLocation();
  const [headProps, setHeadProps] = useState({
    text: "보유카드",
    backButton: false,
  });

  useEffect(() => {
    const currentPath = location.pathname;
    switch (currentPath) {
      case PATHS.cardList:
        setHeadProps({ text: "보유카드", backButton: false });
        break;
      case PATHS.cardRegister:
        setHeadProps({ text: "카드 추가", backButton: true });
        break;
      default:
        setHeadProps({ text: "보유카드", backButton: false });
        break;
    }
  }, [location]);

  return (
    <LayoutContainer>
      <Header headingText={headProps.text} backButton={headProps.backButton} />
      {props.children}
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
  width: 375px;

  margin: 22px auto;
  padding: 0 24px;
`;
