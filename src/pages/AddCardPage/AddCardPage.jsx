import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AddCardPage.module.scss";
import { getCardColor } from "../../utils/cardCompany";
import { isAllCardInputCorrect } from "../../utils/cardInputValidation";
import { PAGE_PATH, HEADER_TEXT, BUTTON_TEXT, STATE_KEY } from "../../constants";

import useToggle from "../../hooks/toggleHook";
import useCardList from "../../hooks/cardListHook";

import CardInputContainer from "../../containers/CardInputContainer/CardInputContainer";
import CardCompanySelectContainer from "../../containers/CardCompanySelectContainer/CardCompanySelectContainer";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

const AddCardPage = ({ cardState, setCardStateByKey, cardListState, setCardListState }) => {
  const toggle = useToggle();
  const cardListHook = useCardList(cardListState, setCardListState);

  const onAddCardButtonClick = () => {
    cardListHook.addCardItem({ ...cardState });
  };

  return (
    <div className={cx("add-card-page")}>
      <header className={cx("add-card-page__header")}>
        <Link to={PAGE_PATH.ROOT}>
          <NavigationButton buttonText={HEADER_TEXT.ADD_CARD} />
        </Link>
      </header>
      <main className={cx("add-card-page__main")}>
        <Card
          className={cx("add-card-page__card")}
          cardOwner={cardState[STATE_KEY.CARD_OWNER]}
          cardNumber={cardState[STATE_KEY.CARD_NUMBER]}
          cardCompany={cardState[STATE_KEY.CARD_COMPANY]}
          cardExpiration={cardState[STATE_KEY.CARD_EXPIRATION]}
          backgroundColor={getCardColor(cardState[STATE_KEY.CARD_COMPANY])}
        />
        <CardInputContainer
          cardState={cardState}
          setCardStateByKey={setCardStateByKey}
          showCardCompanySelectContainer={toggle.setToggled}
        />
      </main>
      {toggle.state.isToggled && (
        <CardCompanySelectContainer
          cardState={cardState}
          setCardStateByKey={setCardStateByKey}
          hideCardCompanySelectContainer={toggle.setUntoggled}
          backDropAnimation={toggle.state.fadeAnimation}
          bottomSliderAnimation={toggle.state.moveAnimation}
        />
      )}
      <div className={cx("add-card-page__bottom")}>
        {isAllCardInputCorrect(cardState) && (
          <Link to={PAGE_PATH.COMPLETE}>
            <Button onClick={onAddCardButtonClick}>{BUTTON_TEXT.NEXT}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AddCardPage;
