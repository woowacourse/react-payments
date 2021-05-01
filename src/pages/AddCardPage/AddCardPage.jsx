import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AddCardPage.module.scss";
import { getCardColor } from '../../utils/cardCompany';
import useToggle from '../../hooks/toggleHook';

import { PAGE_PATH, HEADER_TEXT, BUTTON_TEXT, STATE_KEY } from "../../constants";

import CardInputContainer from "../../containers/CardInputContainer/CardInputContainer";
import CardCompanySelectContainer from "../../containers/CardCompanySelectContainer/CardCompanySelectContainer";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

// TODO: 카드 호버 애니메이션 껐다 킬수 있게 만들기

const AddCardPage = ({
  appState,
  setAppState,
}) => {
  const toggle = useToggle();

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
          cardOwner={appState[STATE_KEY.CARD_OWNER]}
          cardNumber={appState[STATE_KEY.CARD_NUMBER]} 
          cardCompany={appState[STATE_KEY.CARD_COMPANY]} 
          cardExpiration={appState[STATE_KEY.CARD_EXPIRATION]} 
          backgroundColor={getCardColor(appState[STATE_KEY.CARD_COMPANY])} 
        />
        <CardInputContainer
          appState={appState}
          setAppState={setAppState}
          showCardCompanySelectContainer={toggle.setToggled}
        />
      </main>
      {toggle.state.isToggled && (
        <CardCompanySelectContainer
          appState={appState}
          setAppState={setAppState}
          hideCardCompanySelectContainer={toggle.setUntoggled}
          backDropAnimationClass={toggle.state.fadeAnimation}
          bottomSliderAnimationClass={toggle.state.moveAnimation}
        />
      )}
      <div className={cx("add-card-page__bottom")}>
          <Button>{BUTTON_TEXT.NEXT}</Button>
      </div>
    </div>
  );
};

export default AddCardPage;
