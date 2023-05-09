import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ModalDispatchContext,
  ModalStateContext,
} from "../provider/context/modal";
import { ROUTER_PATH } from "../provider/router/path";
import { getLocalStorage, setLocalStorage } from "../utils";
import { Page, Header, Card, CardInputForm, CardCompany } from "../components";
import { useCard } from "../hooks";
import Modal from "woowa-light-modal";

const AddCard = () => {
  const navigate = useNavigate();
  const [card, isValidCard, setNewCard] = useCard();
  const { isModalOpen } = useContext(ModalStateContext);
  const { toggleModal } = useContext(ModalDispatchContext);

  useEffect(() => {
    toggleModal();
  }, []);

  const handleFormSubmited = () => {
    const cards = getLocalStorage("card");
    setLocalStorage("card", [...cards, card]);
    navigate(ROUTER_PATH.NameCard);
  };

  const handleCardCompanyChanged = (newCardCompany: string) => {
    setNewCard("cardCompany", newCardCompany);
  };

  return (
    <Page>
      <Header title="카드 추가" isBack path={ROUTER_PATH.MyCard} />
      <Card {...card} />
      <CardInputForm
        card={card}
        isValidCard={isValidCard}
        setNewCard={setNewCard}
        onSubmit={handleFormSubmited}
      />
      <Modal isOpen={isModalOpen} onClose={toggleModal} height={"227px"}>
        <CardCompany onChange={handleCardCompanyChanged} />
      </Modal>
    </Page>
  );
};

export default AddCard;
