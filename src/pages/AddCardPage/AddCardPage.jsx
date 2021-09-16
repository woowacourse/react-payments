import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AddCardPage.module.scss";
import { getCardColor } from '../../utils/cardCompany';
import useToggle from '../../hooks/toggleHook';
import { isAllCardInputCorrect } from "../../utils/cardInputValidation";

import { PAGE_PATH, HEADER_TEXT, BUTTON_TEXT, STATE_KEY } from "../../utils/constants";

import CardInputContainer from "../../containers/CardInputContainer/CardInputContainer";
import CardCompanySelectContainer from "../../containers/CardCompanySelectContainer/CardCompanySelectContainer";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

const AddCardPage = ({
  cardInputState,
  setCardInputState,
  setCardListState
}) => {
  const toggle = useToggle();
  const onAddCardButtonClick = () => {
    setCardListState(state => [...state, {...cardInputState}])
  }

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
          cardOwner={cardInputState[STATE_KEY.CARD_OWNER]}
          cardNumber={cardInputState[STATE_KEY.CARD_NUMBER]} 
          cardCompany={cardInputState[STATE_KEY.CARD_COMPANY]} 
          cardExpiration={cardInputState[STATE_KEY.CARD_EXPIRATION]} 
          backgroundColor={getCardColor(cardInputState[STATE_KEY.CARD_COMPANY])} 
        />
        <CardInputContainer
          cardInputState={cardInputState}
          setCardInputState={setCardInputState}
          showCardCompanySelectContainer={toggle.setToggled}
        />
      </main>
      {toggle.state.isToggled && (
        <CardCompanySelectContainer
          cardInputState={cardInputState}
          setCardInputState={setCardInputState}
          hideCardCompanySelectContainer={toggle.setUntoggled}
          backDropAnimationClass={toggle.state.fadeAnimation}
          bottomSliderAnimationClass={toggle.state.moveAnimation}
        />
      )}
      <div className={cx("add-card-page__bottom")}>
        {isAllCardInputCorrect(cardInputState) && <Link to={PAGE_PATH.COMPLETE}><Button onClick={onAddCardButtonClick}>{BUTTON_TEXT.NEXT}</Button></Link>}  
      </div>
    </div>
  );
};

export default AddCardPage;
