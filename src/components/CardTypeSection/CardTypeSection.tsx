import styles from './CardTypeSection.module.css';
import { InputSection } from '../InputSection/InputSection';

type Props = {};

export default function CardTypeSection({}: Props) {
  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="카드사를 선택해 주세요" />
        <InputSection.SubTitle title="현재 국내 카드사만 가능합니다." />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="카드번호" />
      </div>
    </div>
  );
}
