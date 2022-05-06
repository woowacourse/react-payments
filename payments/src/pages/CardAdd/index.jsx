import "./index.scss";

import Card from "../../components/common/Card";
import CardNumberInput from "../../components/organisms/CardNumberInput";
import CardPasswordInput from "../../components/organisms/CardPasswordInput";
import ExpiredDateInput from "../../components/organisms/ExpiredDateInput";
import OwnerNameInput from "../../components/organisms/OwnerNameInput";
import SecureCodeInput from "../../components/organisms/SecureCodeInput";
import NextButton from "../../components/common/NextButton";
import CardColorPicker from "../../components/organisms/CardColorPicker";
import useModal from "../../hooks/useModal";
import ConfirmAdd from "../../components/organisms/ConfirmAdd";
import { useContext } from "react";
import { CardContext } from "../../context/CardProvider";

const CardAdd = () => {
  const { cardInfo, validateCardInfo } = useContext(CardContext);

  const [openConfirmModal, closeConfirmModal, ConfirmModal] = useModal(
    <ConfirmAdd
      closeModal={() => {
        closeConfirmModal();
      }}
      submit={() => {
        closeConfirmModal();
      }}
    />
  );
  const [openColorPickerVisible, closeColorPickerVisible, ColorPickerModal] =
    useModal(
      <CardColorPicker
        closeModal={() => {
          closeColorPickerVisible();
        }}
      />
    );

  const { cardName } = cardInfo;

  const submitCard = (e) => {
    e.preventDefault();
    try {
      validateCardInfo();
      openConfirmModal();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <div className="card-add">
        <header>
          <button>{"<"}</button>
          <p>카드 추가</p>
        </header>
        <div className="card-add__container">
          <div className="card-add__container-card">
            <Card cardInfo={cardInfo} onClick={openColorPickerVisible} />
          </div>
          {Boolean(cardName) || (
            <span className="select-card-message">
              카드를 눌러 카드를 선택해주세요
            </span>
          )}
          <form onSubmit={submitCard}>
            <CardNumberInput />
            <ExpiredDateInput />
            <OwnerNameInput />
            <SecureCodeInput />
            <CardPasswordInput />
            <NextButton>다음</NextButton>
          </form>
        </div>
      </div>
      <ColorPickerModal />
      <ConfirmModal />
    </>
  );
};
export default CardAdd;
