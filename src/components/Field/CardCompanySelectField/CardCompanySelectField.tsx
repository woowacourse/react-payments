import { COMPANY_LIST, CardCompany } from '../../../types/cardCompany';
import DropDown from '../../common/DropDown/DropDown';
import styles from '../../../App.module.css';

type CardCompanySelectField = {
  cardCompany: CardCompany;
  handleSelectCardCompany: (selected: string) => void;

  errorMessage: string;
};

const CardCompanySelectField = ({ cardCompany, handleSelectCardCompany, errorMessage }: CardCompanySelectField) => {
  return (
    <>
      <DropDown
        selected={cardCompany}
        itemList={COMPANY_LIST}
        handleSelectItem={handleSelectCardCompany}
        placeholder='카드사를 선택해주세요'
        isError={errorMessage !== ''}
      />
      {errorMessage !== '' && cardCompany === null && <div className={styles.error_message}>{errorMessage}</div>}
    </>
  );
};

export default CardCompanySelectField;
