import type { Meta } from "@storybook/react";

import CompanyContainer from "../components/CardRegistrationPage/FormContents/CompanyContainer";
import CardItemProvider from "../components/provider/CardItemProvider";
import ModalProvider, { useModalAction } from "../components/provider/ModalProvider";
import CompanyModal from "../components/CardRegistrationPage/Modal/CompanyModal";
import styled from "styled-components";

const meta = {
  title: "Payment/FormContents",
  component: CompanyContainer,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CompanyContainer>;

export default meta;

export const CompanyWithModal = () => {
  return (
    <CardItemProvider>
      <ModalProvider>
        <CompanyContainerWithModal />
      </ModalProvider>
    </CardItemProvider>
  );
};

const CompanyContainerWithModal = () => {
  const { isOpenModal } = useModalAction();

  return (
    <Container>
      <CompanyContainer />
      {isOpenModal && <CompanyModal />}
    </Container>
  );
};

const Container = styled.div`
  width: 438px;
  height: 100%;
`;
