import styles from "./CardBrand.module.css";
import Text from "../../../components/Text/Text";
import Select from "../../../components/Select/select";

interface CardBrandProps {
  handleChange: (brand: string) => void;
  errorMessage: string;
}

const CARD_NUMBER_LABEL = {
  TITLE: "카드사를 선택해 주세요",
  DESCRIPTION: "현재 국내 카드사만 가능합니다.",
  PLACEHOLDER: "카드 번호",
} as const;

const CARD_BRANDS = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

export default function CardBrand({
  handleChange,
  errorMessage,
}: CardBrandProps) {
  return (
    <section className={styles["card-brand"]}>
      <Text textType="title">{CARD_NUMBER_LABEL.TITLE}</Text>
      <Text textType="description">{CARD_NUMBER_LABEL.DESCRIPTION}</Text>
      <div className={styles["card-brand-select"]}>
        <Select options={CARD_BRANDS} handleChange={handleChange}></Select>
      </div>
      <Text textType="error">{errorMessage}</Text>
    </section>
  );
}
