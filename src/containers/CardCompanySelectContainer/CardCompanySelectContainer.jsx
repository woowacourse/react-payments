import classNames from "classnames/bind";
import styles from "./CardCompanySelectContainer.module.scss";

import { getAllCardCompanies, getCardColor } from '../../utils/cardCompany';
import { STATE_KEY } from '../../utils/constants';
import BackDrop from "../../components/BackDrop/BackDrop";
import BottomSlider from "../../components/BottomSlider/BottomSlider";
import CircleButton from "../../components/CircleButton/CircleButton";

const cx = classNames.bind(styles);

const CardCompanySelectContainer = ({
  hideCardCompanySelectContainer,
  backDropAnimationClass,
  bottomSliderAnimationClass,
  setCardInputState,
}) => {
  const onCircleButtonClick = (cardCompany) => {
    setCardInputState(state => ({
      ...state,
      [STATE_KEY.CARD_COMPANY]: cardCompany
    }));
    hideCardCompanySelectContainer();
  }

  const cardCompanyList = getAllCardCompanies();
  const cardCompanyItems = cardCompanyList.map((cardCompany) => (
    <CircleButton
      key={cardCompany}
      className={cx("card-company-select-container__card-company")}
      buttonText={cardCompany}
      circleColor={getCardColor(cardCompany)}
      onClick={() => onCircleButtonClick(cardCompany)}
    />
  ));

  return (
    <div className={cx("card-company-select-container")}>
      <BackDrop className={backDropAnimationClass} backDropClick={hideCardCompanySelectContainer} />
      <BottomSlider className={`${cx("card-company-select-container__bottom-slider")} ${bottomSliderAnimationClass}`}>
        {cardCompanyItems}
      </BottomSlider>
    </div>
  );
};

export default CardCompanySelectContainer;
