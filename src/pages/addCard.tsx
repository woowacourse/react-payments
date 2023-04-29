import styled from "styled-components";
import { BackButton } from "../components/common/backButton";
import { Header } from "../components/common/Header";
import { AddCardSection } from "../components/addCardSection";
import { CardInfoProvider } from "../contexts/cardInfo";
import { ReactComponent as BackButtonIc } from "../assets/backButtonIc.svg";
import { PAGE_HEADER } from "../constants";
import { ModalBox } from "../components/common/modal/modalBox";
import { ModalTrigger } from "../components/common/modal/modalTrigger";
import { ModalBackDrop } from "../components/common/modal/modalBackDrop";
import { useState } from "react";
import { ModalContent } from "../components/common/modal/modalContent";
import { BankMenu } from "../components/bankMenu";

export function AddCard() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Wrapper>
      <Header>
        <BackButtonIc />
        {PAGE_HEADER.ADD_CARD}
      </Header>
      <CardInfoProvider>
        <AddCardSection />
      </CardInfoProvider>
      <ModalBox modalState={{ modalOpen, openModal, closeModal }}>
        <ModalBackDrop />
        <ModalTrigger />
        <ModalContent asChild>
          <BankMenu />
        </ModalContent>
      </ModalBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
