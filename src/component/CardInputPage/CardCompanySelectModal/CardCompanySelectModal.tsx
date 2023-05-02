import BottomSheet, { BottomSheetProps } from "../../common/Modal/BottomSheet";
import { CARD_COMPANIES_ENGLISH, CardCompany } from "../../../type/CardCompany";
import CardCompanyButton from "../CardCompany/CardCompanyButton";
import styles from "./CardCompanySelectModal.module.css";

interface Props extends BottomSheetProps {
  companyClickHandler: (value: CardCompany) => void;
}

const CardCompanySelectModal = (props: Props) => {
  const { open, setOpen, companyClickHandler } = props;

  return (
    <BottomSheet open={open} setOpen={setOpen}>
      <div className={styles.contents}>
        {CARD_COMPANIES_ENGLISH.map((company) => (
          <CardCompanyButton
            key={company}
            companyName={company}
            clickHandler={companyClickHandler}
          />
        ))}
      </div>
    </BottomSheet>
  )
};

export default CardCompanySelectModal;
