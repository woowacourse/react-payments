import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "src/components/Header";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const [headProps, setHeadProps] = useState({
    text: "보유카드",
    backButton: false,
  });

  useEffect(() => {
    const currentPath = location.pathname;
    switch (currentPath) {
      case "/card-list":
        setHeadProps({ text: "보유카드", backButton: false });
        break;
      case "/card-register":
        setHeadProps({ text: "카드 추가", backButton: true });
        break;
    }
  }, [location]);

  return (
    <LayoutContainer>
      <Header headingText={headProps.text} backButton={headProps.backButton} />
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
  margin: 22px 24px;
`;
