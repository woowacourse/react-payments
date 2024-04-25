import { CARD_ISSUER } from "../constants/cardIssuer";
import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import SelectBox from "./common/SelectBox";

interface CardIssuerProps {
  value: string;
  setValue: React.Dispatch<string>;
}

export default function CardIssuer({ value, setValue }: CardIssuerProps) {
  return (
    <section>
      <SectionTitle
        title={"카드사를 선택해 주세요"}
        description={"현재 국내 카드사만 가능합니다."}
      />
      <FormItem>
        <SelectBox
          options={CARD_ISSUER}
          placeholder={"카드사를 선택해 주세요"}
          selected={value}
          setSelected={setValue}
        />
      </FormItem>
    </section>
  );
}
