import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModalDispatchContext, ModalStateContext } from "../context";
import { ROUTER_PATH } from "../router/path";
import { getLocalStorage, setLocalStorage } from "../utils";
import { Page, Header, Card, CardInputForm, CardCompany } from "../components";
import { useCard } from "../hooks";
import BottomSheet from "woowa-light-modal";

const AddCard = () => {
  const navigate = useNavigate();
  const [card, setNewCard] = useCard();
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
      <Header title="카드 추가" path={ROUTER_PATH.MyCard} />
      <Card {...card} />
      <CardInputForm
        card={card}
        setNewCard={setNewCard}
        onSubmit={handleFormSubmited}
      />
      <BottomSheet isOpen={isModalOpen} onClose={toggleModal}>
        <CardCompany onChange={handleCardCompanyChanged} />
      </BottomSheet>
    </Page>
  );
};

export default AddCard;
