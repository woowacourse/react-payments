import { useEffect } from "react";
import CardAddForm from "../components/CardAddForm/CardAddForm";
import CardItem from "../components/CardItem/CardItem";
import Header from "../components/common/Header/Header";
import { useModalContext } from "../contexts/ModalContext";
import { useCardAddForm } from "../hooks/cards/useCardAddForm";

const CardAddPage = () => {
  const { resetModal } = useModalContext();
  const {
    cardInformation,
    inputError,
    updateInputValue,
    updateInputError,
    handleSubmit,
  } = useCardAddForm();

  useEffect(() => {
    return () => resetModal();
  }, [resetModal]);

  return (
    <>
      <Header content="카드 추가" isOverlayPage />
      <main>
        <CardItem
          className="mg-b-24 center-hoz-item"
          issuer={cardInformation.issuer}
          cardNumber={cardInformation.cardNumber}
          expirationDate={cardInformation.expirationDate}
          ownerName={cardInformation.ownerName}
        />
        <CardAddForm
          cardInputError={inputError}
          updateInputValue={updateInputValue}
          updateInputError={updateInputError}
          handleSubmit={handleSubmit}
        />
      </main>
    </>
  );
};

export default CardAddPage;
