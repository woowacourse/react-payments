import styles from "./CardBrandSelect.module.css";
import Text from "../../../components/Text/Text";
import Select from "../../../components/Select/select";
import { CARD_BRAND_INFO } from "../../../constants/CardBrandInfo";

interface CardBrandProps {
  handleChange: (brand: string, step: number) => void;
  step: number;
  errorMessage: string;
}

const CARD_NUMBER_LABEL = {
  TITLE: "카드사를 선택해 주세요",
  DESCRIPTION: "현재 국내 카드사만 가능합니다.",
  PLACEHOLDER: "카드 번호",
} as const;

export default function CardBrandSelect({
  handleChange,
  step,
  errorMessage,
}: CardBrandProps) {
  return (
    <section className={styles["card-brand"]}>
      <Text textType="title">{CARD_NUMBER_LABEL.TITLE}</Text>
      <Text textType="description">{CARD_NUMBER_LABEL.DESCRIPTION}</Text>
      <div className={styles["card-brand-select"]}>
        <Select
          title={CARD_NUMBER_LABEL.TITLE}
          options={Object.keys(CARD_BRAND_INFO)}
          handleChange={(value) => handleChange(value, step)}
        ></Select>
      </div>
      <Text textType="error">{errorMessage}</Text>
    </section>
  );
}
