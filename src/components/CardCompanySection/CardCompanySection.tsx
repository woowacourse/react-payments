import styles from './CardCompanySection.module.css';
import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Dispatch, SetStateAction } from 'react';
import { CardCompany } from '../../types/card';

type Props = {
  setCardCompany: Dispatch<SetStateAction<CardCompany>>;
};

export default function CardCompanySection({ setCardCompany }: Props) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardCompany(e.target.value as CardCompany);
  };

  return (
    <div className={styles.container}>
      <FieldGroup.TitleWrapper>
        <FieldGroup.Title title="카드사를 선택해 주세요" />
        <FieldGroup.SubTitle title="현재 국내 카드사만 가능합니다." />
      </FieldGroup.TitleWrapper>
      <div className={styles.fieldGroup}>
        <FieldGroup.Label text="카드사" />
        <div className={styles.selectWrapper}>
          <select className={styles.select} defaultValue="default" onChange={handleSelectChange}>
            <option value="default" disabled hidden>
              카드를 선택해주세요
            </option>
            <option value="BC카드">BC카드</option>
            <option value="신한카드">신한카드</option>
            <option value="카카오뱅크">카카오뱅크</option>
            <option value="현대카드">현대카드</option>
            <option value="우리카드">우리카드</option>
            <option value="롯데카드">롯데카드</option>
            <option value="하나카드">하나카드</option>
            <option value="국민카드">국민카드</option>
          </select>
          <IoIosArrowUp className={styles.icon} />
          {/* <IoIosArrowDown /> */}
        </div>
      </div>
    </div>
  );
}
