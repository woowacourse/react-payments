import "./index.scss";

import Card from "../../common/Card";
import CardNumberInput from "../CardNumberInput";
import CardPasswordInput from "../CardPasswordInput";
import ExpiredDateInput from "../ExpiredDateInput";
import OwnerNameInput from "../OwnerNameInput";
import SecureCodeInput from "../SecureCodeInput";
import NextButton from "../../common/NextButton";
import CardColorPicker from "../CardColorPicker";
import useModal from "../../../hooks/useModal";
import ConfirmAdd from "../ConfirmAdd";
import { useContext } from "react";
import { CardContext } from "../../../context/CardProvider";
import { Link } from "react-router-dom";

const CardAdd = ({ setDone }) => {
  const { cardInfo, validateCardInfo } = useContext(CardContext);
  const [closeModal, ModalElement, setElement] = useModal();

  const openColorPickerModal = () => {
    setElement(<CardColorPicker closeModal={closeModal} />);
  };

  const openConfirmModal = () => {
    setElement(
      <ConfirmAdd
        closeModal={closeModal}
        submit={() => {
          setDone(true);
          closeModal();
        }}
      />
    );
  };

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
          <Link to={"/"}>
            <button>{"<"}</button>
          </Link>
          <p>카드 추가</p>
        </header>
        <div className="card-add__container">
          <div className="card-add__container-card">
            <Card cardInfo={cardInfo} onClick={openColorPickerModal} />
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
            <NextButton testId={"submit-card"}>다음</NextButton>
          </form>
        </div>
      </div>
      <ModalElement />
    </>
  );
};
export default CardAdd;
