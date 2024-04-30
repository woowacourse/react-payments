import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

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
        title={PAYMENTS_MESSAGE.cardIssuerTitle}
        description={PAYMENTS_MESSAGE.cardIssuerDescription}
      />
      <FormItem>
        <SelectBox
          options={CARD_ISSUER}
          placeholder={PAYMENTS_INPUT_MESSAGE.cardIssuerPlaceHolder}
          selected={value}
          setSelected={setValue}
        />
      </FormItem>
    </section>
  );
}
