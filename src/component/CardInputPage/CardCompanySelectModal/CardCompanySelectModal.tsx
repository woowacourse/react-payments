import BottomModal, { BottomModalProps } from "../../common/Modal/BottomModal";
import { CARD_COMPANIES_ENGLISH, CardCompany } from "../../../type/CardCompany";
import CardCompanyButton from "../CardCompany/CardCompanyButton";
import styles from "./CardCompanySelectModal.module.css";

interface Props extends BottomModalProps {
  companyClickHandler: (value: CardCompany) => void;
}

const CardCompanySelectModal = (props: Props) => {
  const { isOpen, setIsOpen, companyClickHandler } = props;

  return (
    <BottomModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={styles.contents}>
        {CARD_COMPANIES_ENGLISH.map((company) => (
          <CardCompanyButton
            key={company}
            companyName={company}
            clickHandler={companyClickHandler}
          />
        ))}
      </div>
    </BottomModal>
  )
};

export default CardCompanySelectModal;
