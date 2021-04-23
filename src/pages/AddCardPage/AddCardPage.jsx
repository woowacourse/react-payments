import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AddCardPage.module.scss";

import { PAGE_PATH, HEADER_TEXT, BUTTON_TEXT } from "../../constants";

import CardInputContainer from "../../containers/CardInputContainer/CardInputContainer";
import CardTypeContainer from "../../containers/CardTypeContainer/CardTypeContainer";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

const cardMockUp = {
  cardName: "",
  backgroundColor: "#D2D2D2",
  cardNumberList: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  cardOwner: "NAME",
  cardExpiration: "MM/YY",
};

const cardTypeMockUps = [
  {
    color: "#E24141",
    name: "포코카드",
  },
  {
    color: "#04C09E",
    name: "로이드 카드",
  },
  {
    color: "#E24141",
    name: "포코카드",
  },
  {
    color: "#E24141",
    name: "포코카드",
  },
  {
    color: "#E24141",
    name: "포코카드",
  },
  {
    color: "#E24141",
    name: "포코카드",
  },
  {
    color: "#E24141",
    name: "포코카드",
  },
  {
    color: "#E24141",
    name: "포코카드",
  },
];

const AddCardPage = ({}) => {
  // slider test
  const [pageState, setPageState] = useState({
    isBottomSliderToggled: false,
    backDropAnimation: "fade-out",
    sliderAnimation: "move-down",
  });

  const toggleCardTypeContainer = ({ isBottomSliderToggled, backDropAnimation, sliderAnimation }) => {
    setPageState((state) => ({
      ...state,
      isBottomSliderToggled,
      backDropAnimation,
      sliderAnimation,
    }));
  };

  const showCardTypeContainer = () => {
    toggleCardTypeContainer({
      isBottomSliderToggled: true,
      backDropAnimation: "fade-in",
      sliderAnimation: "move-up",
    });
  };

  const hideCardTypeContainer = () => {
    toggleCardTypeContainer({
      isBottomSliderToggled: true,
      backDropAnimation: "fade-out",
      sliderAnimation: "move-down",
    });
    setTimeout(() => {
      toggleCardTypeContainer({
        isBottomSliderToggled: false,
        backDropAnimation: "fade-out",
        sliderAnimation: "move-down",
      });
    }, 350);
  };

  return (
    <div className={cx("add-card-page")}>
      <header className={cx("add-card-page__header")}>
        <Link to={PAGE_PATH.ROOT}>
          <NavigationButton buttonText={HEADER_TEXT.ADD_CARD} />
        </Link>
      </header>
      {/* onClick for slider test */}
      <main className={cx("add-card-page__main")} onClick={showCardTypeContainer}>
        <Card className={cx("add-card-page__card")} {...cardMockUp} />
        <CardInputContainer />
      </main>
      {pageState.isBottomSliderToggled && (
        <CardTypeContainer
          cardTypes={cardTypeMockUps}
          hideCardTypeContainer={hideCardTypeContainer}
          backDropAnimationClass={pageState.backDropAnimation}
          bottomSliderAnimationClass={pageState.sliderAnimation}
        />
      )}
      <div className={cx("add-card-page__bottom")}>
        <Link to={PAGE_PATH.COMPLETE}>
          <Button>{BUTTON_TEXT.NEXT}</Button>
        </Link>
      </div>
    </div>
  );
};

export default AddCardPage;
