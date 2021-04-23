import classNames from "classnames/bind";
import styles from "./CardTypeContainer.module.scss";

import BackDrop from "../../components/BackDrop/BackDrop";
import BottomSlider from "../../components/BottomSlider/BottomSlider";
import CircleButton from "../../components/CircleButton/CircleButton";

const cx = classNames.bind(styles);

const CardTypeContainer = ({
  cardTypes,
  hideCardTypeContainer,
  backDropAnimationClass,
  bottomSliderAnimationClass,
}) => {
  const cardTypeItems = cardTypes.map((cardType) => (
    <CircleButton
      className={cx("card-type-container__card-type")}
      buttonText={cardType.name}
      circleColor={cardType.color}
    />
  ));

  return (
    <div className={cx("card-type-container")}>
      <BackDrop className={backDropAnimationClass} backDropClick={hideCardTypeContainer} />
      <BottomSlider className={`${cx("card-type-container__bottom-slider")} ${bottomSliderAnimationClass}`}>
        {cardTypeItems}
      </BottomSlider>
    </div>
  );
};

export default CardTypeContainer;
