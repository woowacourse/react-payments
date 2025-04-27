import Input from "../../shared/input/Input";
import { CVC_NUMBER_LENGTH } from "./CardCVCNumberInputs.constant";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../css/inputs.css";
import useAutoFocus from "../hooks/useAutoFocus";

export type CardCVCNumberSectionProps = {
  CVCNumber: {
    values: { CVCNumber: string };
    changeValues: (type: "CVCNumber", CVCNumber: string) => void;
    isFullFilled: () => boolean;
  };
  CVCError: {
    error: Record<"CVCNumber", string>;
    checkValidation: ({
      length,
      value,
      type,
    }: {
      length: number;
      value: string;
      type: "CVCNumber";
    }) => void;
    getErrorMessage: () => string | undefined;
    isError: () => boolean;
  };
};

function CardCVCNumberInputs({
  CVCNumber,
  CVCError,
}: CardCVCNumberSectionProps) {
  const errorMessage = CVCError.getErrorMessage();

  const { inputRefs, handleKeyDown } = useAutoFocus({
    inputCount: 1,
    inputMaxLength: CVC_NUMBER_LENGTH,
  });

  return (
    <StyledContainer>
      <label htmlFor="">CVC</label>
      <StyledInputWrap>
        <Input
          ref={inputRefs[0]}
          onKeyDown={(e) => {
            handleKeyDown(e, 0);
          }}
          value={CVCNumber.values.CVCNumber}
          onChange={(e) => {
            CVCNumber.changeValues("CVCNumber", e.target.value);
            CVCError.checkValidation({
              length: CVC_NUMBER_LENGTH,
              value: e.target.value,
              type: "CVCNumber",
            });
          }}
          isError={CVCError.isError()}
          width="100%"
          maxLength={CVC_NUMBER_LENGTH}
          placeholder="123"
        />
      </StyledInputWrap>
      {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}

export default CardCVCNumberInputs;
