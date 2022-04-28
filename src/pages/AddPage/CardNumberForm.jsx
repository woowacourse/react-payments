import InputBox from "../../components/InputBox";
import { Input } from "../../components/Input/style";
import { FormWrapper } from "./style";

function CardNumberForm({
  cardNumbers,
  cardNumberInputRefs,
  handleCardNumber,
}) {
  return (
    <FormWrapper>
      <label>카드번호</label>
      <InputBox>
        {Array.from({ length: 4 }, (_, index) => (
          <Input
            key={index}
            ref={cardNumberInputRefs[index]}
            type={index < 2 ? "number" : "password"}
            value={cardNumbers[index]}
            onChange={(e) => handleCardNumber(index, e)}
          />
        ))}
      </InputBox>
    </FormWrapper>
  );
}

export default CardNumberForm;
