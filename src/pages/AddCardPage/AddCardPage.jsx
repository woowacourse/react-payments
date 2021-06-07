import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AddCardPage.module.scss";
import { getCardColor } from "../../utils/cardCompany";
import { isAllCardInputCorrect } from "../../utils/cardInputValidation";
import { PAGE_PATH, HEADER_TEXT, BUTTON_TEXT, STATE_KEY, ANIMATION } from "../../constants";

import useToggle from "../../hooks/useToggle";
import useCardList from "../../hooks/useCardList";
import useCardInputValidation from "../../hooks/useCardInputValidation";

import CardInputSection from "../../sections/CardInputSection/CardInputSection";
import CardCompanySelectSection from "../../sections/CardCompanySelectSection/CardCompanySelectSection";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import ErrorText from "../../components/ErrorText/ErrorText";

const cx = classNames.bind(styles);

const AddCardPage = () => {
  const { cardState, setCardStateEmpty } = useContext(AppContext);
  const { validationMessage, setCardInputValidationMessage } = useCardInputValidation();
  const toggle = useToggle();
  const { addCardItem } = useCardList();
  const history = useHistory();

  const onMoveToCardListPage = () => {
    setCardStateEmpty();
    history.push(PAGE_PATH.ROOT);
  };

  const onCardAdd = () => {
    if (!isAllCardInputCorrect(cardState)) {
      setCardInputValidationMessage(cardState);
      return;
    }
    addCardItem({ ...cardState });
    setCardStateEmpty();
    history.push(PAGE_PATH.COMPLETE);
  };

  return (
    <div className={cx("add-card-page")}>
      <header className={cx("add-card-page__header")}>
        <NavigationButton buttonText={HEADER_TEXT.ADD_CARD} onClick={onMoveToCardListPage} />
      </header>
      <main className={`${cx("add-card-page__main")} ${ANIMATION.FADE_IN}`}>
        <Card
          className={cx("add-card-page__card")}
          cardOwner={cardState[STATE_KEY.CARD_OWNER]}
          cardNumber={cardState[STATE_KEY.CARD_NUMBER]}
          cardCompany={cardState[STATE_KEY.CARD_COMPANY]}
          cardExpiration={cardState[STATE_KEY.CARD_EXPIRATION]}
          backgroundColor={getCardColor(cardState[STATE_KEY.CARD_COMPANY])}
          onClick={toggle.setToggled}
        />
        {validationMessage[STATE_KEY.CARD_COMPANY] !== "" && (
          <ErrorText>{validationMessage[STATE_KEY.CARD_COMPANY]}</ErrorText>
        )}
        <CardInputSection showCardCompanySelectSection={toggle.setToggled} />
      </main>
      {toggle.state.isToggled && (
        <CardCompanySelectSection
          hideCardCompanySelectSection={toggle.setUntoggled}
          backDropAnimation={toggle.state.fadeAnimation}
          bottomSliderAnimation={toggle.state.moveAnimation}
        />
      )}
      <div className={cx("add-card-page__bottom")}>
        <Button onClick={onCardAdd}>{BUTTON_TEXT.NEXT}</Button>
      </div>
    </div>
  );
};

export default AddCardPage;
