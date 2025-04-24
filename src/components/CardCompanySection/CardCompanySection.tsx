import styles from './CardCompanySection.module.css';
import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

export default function CardCompanySection() {
  return (
    <div className={styles.container}>
      <FieldGroup.TitleWrapper>
        <FieldGroup.Title title="카드사를 선택해 주세요" />
        <FieldGroup.SubTitle title="현재 국내 카드사만 가능합니다." />
      </FieldGroup.TitleWrapper>
      <div className={styles.fieldGroup}>
        <FieldGroup.Label text="카드사" />
        <div className={styles.selectWrapper}>
          <select className={styles.select} defaultValue="default">
            <option value="default" disabled hidden>
              카드를 선택해주세요
            </option>
            <option value="bc">BC카드</option>
            <option value="shinhan">신한카드</option>
            <option value="kakao">카카오뱅크</option>
            <option value="hyundai">현대카드</option>
            <option value="woori">우리카드</option>
            <option value="lotte">롯데카드</option>
            <option value="hana">하나카드</option>
            <option value="kb">국민카드</option>
          </select>
          <IoIosArrowUp className={styles.icon} />
          {/* <IoIosArrowDown /> */}
        </div>
      </div>
    </div>
  );
}
