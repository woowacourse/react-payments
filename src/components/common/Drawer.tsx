import styled from "styled-components";
import useDrawer from "../../hooks/useDrawer";

interface DrawerProps {
  isOpenDrawer: boolean;
}

const Wrapper = styled.div<DrawerProps>`
  display: ${(props) => (props.isOpenDrawer ? "block" : "none")};
  overflow: ${(props) => (props.isOpenDrawer ? "hidden" : "auto")};
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 998;
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  border-radius: 5% 5% 0px 0px;
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Drawer = ({ children }: React.PropsWithChildren) => {
  const { isDrawerOpen, closeDrawer } = useDrawer();

  return (
    <Wrapper isOpenDrawer={isDrawerOpen}>
      <BackDrop onClick={closeDrawer}></BackDrop>
      <ModalContainer>{children}</ModalContainer>
    </Wrapper>
  );
};

export default Drawer;
