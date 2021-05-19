import classNames from "classnames/bind";
import styles from "./CardCompanySelectSection.module.scss";

import { getAllCardCompanies } from "../../utils/cardCompany";
import BackDrop from "../../components/BackDrop/BackDrop";
import BottomSlider from "../../components/BottomSlider/BottomSlider";
import CardCompanyButton from "../../containers/CardCompanyButton/CardCompanyButton";

const cx = classNames.bind(styles);

const CardCompanySelectSection = ({ hideCardCompanySelectSection, backDropAnimation, bottomSliderAnimation }) => {
  const cardCompanyList = getAllCardCompanies();
  const cardCompanyItems = cardCompanyList.map((cardCompany) => (
    <CardCompanyButton
      key={cardCompany}
      className={cx("card-company-select-container__card-company")}
      onCardCompanySelect={hideCardCompanySelectSection}
      cardCompany={cardCompany}
    />
  ));

  return (
    <div className={cx("card-company-select-container")}>
      <BackDrop className={backDropAnimation} backDropClick={hideCardCompanySelectSection} />
      <BottomSlider className={`${cx("card-company-select-container__bottom-slider")} ${bottomSliderAnimation}`}>
        {cardCompanyItems}
      </BottomSlider>
    </div>
  );
};

export default CardCompanySelectSection;
