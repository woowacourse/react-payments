import { ErrorMessage } from "./ErrorMessage";
import { CARD_INPUT } from "../../Constants";
import { sanitizeErrors } from "../../Utils";
import { CardInput } from "./CardInput";
import useCardInputError from "../../hooks/useCardInputError";
import { Validator } from "../../validators/CardValidator";
import {
  CardInputFieldContainer,
  CardInputLabel,
} from "../../style/CardStyles";

interface CardCVCInputProps {
  cardCVC: string;
  setCardCVC: (value: string) => void;
}

export function CardCVCInput({ cardCVC, setCardCVC }: CardCVCInputProps) {
  const [isError, handleChangeError, handleOnBlurError] = useCardInputError({
    state: false,
    message: "",
  });

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const errorReport = handleChangeError([() => Validator.isNumber(value)]);
    if (errorReport.state) return;
    setCardCVC(value);
  };

  return (
    <CardInputFieldContainer>
      <CardInputLabel htmlFor="card-cvc-input">CVC</CardInputLabel>
      <CardInput
        type="text"
        maxLength={CARD_INPUT.CVC_LENGTH}
        placeholder="123"
        id="card-cvc-input"
        value={cardCVC}
        onChange={changeCardCVC}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
          handleOnBlurError([
            () => Validator.isValidCardCVCLength(e.target.value),
          ])
        }
      />
      <ErrorMessage messages={sanitizeErrors([isError["message"]])} />
    </CardInputFieldContainer>
  );
}
