import ModalButton from "./ModalButton";
import styled from "styled-components";

import { useContext } from "react";
import { createPortal } from "react-dom";
import { NewCardContext } from "../../contexts/NewCardContext";

import { BRANDS } from "../../constants";

interface BrandSelectModalProps {
  closeModal: () => void;
}

const BrandSelectModal = ({ closeModal }: BrandSelectModalProps) => {
  const { newCard } = useContext(NewCardContext);

  return createPortal(
    <div>
      <Backdrop onClick={newCard.brand ? closeModal : undefined}></Backdrop>
      <Container>
        {BRANDS.map((brand) => (
          <ModalButton key={brand} brand={brand} closeModal={closeModal} />
        ))}
      </Container>
    </div>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  height: 227px;
  padding: 34px 30px;

  border-radius: 8px 8px 0px 0px;
  background: white;
`;

export default BrandSelectModal;
