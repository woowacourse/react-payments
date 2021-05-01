import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from "./AddCardCompletePage.module.scss";

import { LABEL_TEXT, STATE_KEY, PAGE_PATH } from "../../constants";

import Label from "../../components/Label/Label";
import Card from "../../components/Card/Card";
import BorderInput from "../../components/BorderInput/BorderInput";
import Button from "../../components/Button/Button";
import { getCardColor } from "../../utils/cardCompany";
import { isSameCardNumber } from "../../utils/cardInputValidation"


const cx = classNames.bind(styles);
// TODO : 카드 크기 조절하기
const AddCardCompletePage = ({ cardInputState, setCardInputState, cardListState, setCardListState }) => {
  const onCardNicknameChange = (event) => {
    const { value } = event.target;
    
    setCardInputState(state => ({
      ...state,
      [STATE_KEY.CARD_NICK_NAME]: value
    }))
  }

  useEffect(() => {
    const newCardList = [
      ...cardListState
    ];
    const targetCardIndex = newCardList.findIndex(card => isSameCardNumber(card, cardInputState[STATE_KEY.CARD_NUMBER]));
    const newCard = {...cardInputState};
    newCardList.splice(targetCardIndex, 1, newCard);
    setCardListState(newCardList);
  }, [cardInputState[STATE_KEY.CARD_NICK_NAME]])

  return (
    <div className={cx("add-card-complete-page")}>
      <main className={cx("add-card-complete-page__main")}>
        <Label size="large" className={cx("add-card-complete-page__label")} labelText={LABEL_TEXT.CARD_ADD_COMPLETE} />
        <Card 
          className={cx("add-card-complete-page__card")}
          cardOwner={cardInputState[STATE_KEY.CARD_OWNER]}
          cardNumber={cardInputState[STATE_KEY.CARD_NUMBER]} 
          cardCompany={cardInputState[STATE_KEY.CARD_COMPANY]} 
          cardExpiration={cardInputState[STATE_KEY.CARD_EXPIRATION]} 
          backgroundColor={getCardColor(cardInputState[STATE_KEY.CARD_COMPANY])} 
        />
        <BorderInput onChange={onCardNicknameChange} className={cx("add-card-complete-page__input")} />
      </main>
      <div className={cx("add-card-complete-page__bottom")}>
        {cardInputState[STATE_KEY.CARD_NICK_NAME] !== "" && <Link to={PAGE_PATH.ROOT}><Button>확인</Button></Link>}
      </div>
    </div>
  );
};

export default AddCardCompletePage;
