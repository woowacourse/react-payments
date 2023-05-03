import styled from "styled-components";
import Header from "./Header";
import useHeaderState from "src/hooks/useHeaderState";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { headProps } = useHeaderState();

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
