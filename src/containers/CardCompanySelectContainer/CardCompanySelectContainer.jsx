import classNames from "classnames/bind";
import styles from "./CardCompanySelectContainer.module.scss";

import useCardCompany from "../../hooks/cardCompanyHook";

import { getAllCardCompanies, getCardColor } from "../../utils/cardCompany";
import BackDrop from "../../components/BackDrop/BackDrop";
import BottomSlider from "../../components/BottomSlider/BottomSlider";
import CircleButton from "../../components/CircleButton/CircleButton";

const cx = classNames.bind(styles);

const CardCompanySelectContainer = ({ hideCardCompanySelectContainer, backDropAnimation, bottomSliderAnimation }) => {
  const cardCompanyHook = useCardCompany();

  const onCardCompanySelect = (cardCompany) => {
    cardCompanyHook.setCardCompanyState(cardCompany);
    hideCardCompanySelectContainer();
  };

  const cardCompanyList = getAllCardCompanies();
  const cardCompanyItems = cardCompanyList.map((cardCompany) => (
    <CircleButton
      key={cardCompany}
      className={cx("card-company-select-container__card-company")}
      buttonText={cardCompany}
      circleColor={getCardColor(cardCompany)}
      onClick={() => onCardCompanySelect(cardCompany)}
    />
  ));

  return (
    <div className={cx("card-company-select-container")}>
      <BackDrop className={backDropAnimation} backDropClick={hideCardCompanySelectContainer} />
      <BottomSlider className={`${cx("card-company-select-container__bottom-slider")} ${bottomSliderAnimation}`}>
        {cardCompanyItems}
      </BottomSlider>
    </div>
  );
};

export default CardCompanySelectContainer;
