import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AddCardPage.module.scss";
import { getCardColor } from '../../utils/cardCompany';

import { PAGE_PATH, HEADER_TEXT, BUTTON_TEXT } from "../../constants";

import CardInputContainer from "../../containers/CardInputContainer/CardInputContainer";
import CardCompanySelectContainer from "../../containers/CardCompanySelectContainer/CardCompanySelectContainer";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

// TODO: 카드 호버 애니메이션 껐다 킬수 있게 만들기
// TODO: UX 적으로 카드 정보 입력 페이지에서 카드 클릭시 카드사 입력 토글이 켜지도록 할지 결정하기

const AddCardPage = ({
  cardCompany,
  cardNumber,
  cardOwner,
  cardExpiration,
  cardCVC,
  cardPassword,
  setCardState,
}) => {
  const [toggleState, setToggleState] = useState({
    isBottomSliderToggled: false,
    backDropAnimation: "fade-out",
    sliderAnimation: "move-down",
  });

  const toggleCardCompanyContainer = ({ isBottomSliderToggled, backDropAnimation, sliderAnimation }) => {
    setToggleState((state) => ({
      ...state,
      isBottomSliderToggled,
      backDropAnimation,
      sliderAnimation,
    }));
  };

  const showCardCompanySelectContainer = () => {
    toggleCardCompanyContainer({
      isBottomSliderToggled: true,
      backDropAnimation: "fade-in",
      sliderAnimation: "move-up",
    });
  };

  const hideCardCompanySelectContainer = () => {
    toggleCardCompanyContainer({
      isBottomSliderToggled: true,
      backDropAnimation: "fade-out",
      sliderAnimation: "move-down",
    });
    setTimeout(() => {
      toggleCardCompanyContainer({
        isBottomSliderToggled: false,
        backDropAnimation: "fade-out",
        sliderAnimation: "move-down",
      });
    }, 350);
  };

  // TODO: 카드 번호 Input 이 숫자만 받을 수 있도록 수정하기 

  return (
    <div className={cx("add-card-page")}>
      <header className={cx("add-card-page__header")}>
        <Link to={PAGE_PATH.ROOT}>
          <NavigationButton buttonText={HEADER_TEXT.ADD_CARD} />
        </Link>
      </header>
      <main className={cx("add-card-page__main")}>
        <Card cardNumber={cardNumber} cardCompany={cardCompany} backgroundColor={getCardColor(cardCompany)} className={cx("add-card-page__card")} />
        <CardInputContainer
          cardCompany={cardCompany}
          cardOwner={cardOwner}
          cardExpiration={cardExpiration}
          cardCVC={cardCVC}
          cardPassword={cardPassword}
          setCardState={setCardState}
          showCardCompanySelectContainer={showCardCompanySelectContainer}
        />
      </main>
      {toggleState.isBottomSliderToggled && (
        <CardCompanySelectContainer
          hideCardCompanySelectContainer={hideCardCompanySelectContainer}
          backDropAnimationClass={toggleState.backDropAnimation}
          bottomSliderAnimationClass={toggleState.sliderAnimation}
          setCardState={setCardState}
        />
      )}
      <div className={cx("add-card-page__bottom")}>
          <Button>{BUTTON_TEXT.NEXT}</Button>
      </div>
    </div>
  );
};

export default AddCardPage;
