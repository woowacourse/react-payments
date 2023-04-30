import styled from "styled-components";
import { BackButton } from "../components/common/button/backButton";
import { Header } from "../components/common/Header";
import { AddCardSection } from "../components/addCardSection";
import { CardInfoProvider } from "../contexts/cardInfo";
import { ReactComponent as BackButtonIc } from "../assets/backButtonIc.svg";
import { PAGE_HEADER } from "../constants";
import { ModalBox } from "../components/common/modal/modalBox";
import { ModalTrigger } from "../components/common/modal/modalTrigger";
import { ModalBackDrop } from "../components/common/modal/modalBackDrop";
import { useEffect, useRef, useState } from "react";
import { ModalContent } from "../components/common/modal/modalContent";
import { BankMenu } from "../components/bankMenu";
import { useSelect } from "../hooks/useSelect";

export function AddCardPage() {
  return (
    <Wrapper>
      <Header>
        <BackButtonIc />
        {PAGE_HEADER.ADD_CARD}
      </Header>
      <CardInfoProvider>
        <AddCardSection />
      </CardInfoProvider>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Test = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: black;
`;
