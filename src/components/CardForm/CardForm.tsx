import { ChangeEvent } from "react";
import useInput from "../../hooks/useInput";
import {
  INPUT_COUNTS,
  PLACE_HOLDER,
  INPUT_INFO_TITLE,
  INPUT_INFO_SUBTITLE,
  INPUT_LABEL,
} from "../../constants/condition";
import InputField from "../InputField/InputField";
import Input from "../Input/Input";
import S from "./style";

const CardForm = () => {
  const {
    input: cardNumbers,
    onChange: onChangeCardNumbers,
    errorMessage: cardNumbersErrorMessage,
  } = useInput({
    initialValue: Array.from({ length: INPUT_COUNTS.CARD_NUMBERS }, () => ""),
  });

  const {
    input: expirationPeriod,
    onChange: onChangeExpirationPeriod,
    errorMessage: expirationPeriodErrorMessage,
  } = useInput({
    initialValue: Array.from(
      { length: INPUT_COUNTS.EXPIRATION_PERIOD },
      () => ""
    ),
  });

  const { onChange: onChangeOwnerName, errorMessage: ownerErrorMessage } =
    useInput({
      initialValue: [""],
    });

  const expirationPlaceholder = [
    PLACE_HOLDER.EXPIRATION_MONTH,
    PLACE_HOLDER.EXPIRATION_YEAR,
  ];

  return (
    <>
      {/*카드 번호*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CARD_NUMBERS}</S.InputTitle>
          <S.InputSubtitle>{INPUT_INFO_SUBTITLE.CARD_NUMBERS}</S.InputSubtitle>
        </S.TitleWrapper>
        <InputField
          label={INPUT_LABEL.CARD_NUMBERS}
          errorMessage={cardNumbersErrorMessage}
        >
          {cardNumbers.map((_, index) => (
            <Input
              key={index}
              placeholder={PLACE_HOLDER.CARD_NUMBERS}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChangeCardNumbers(e, index);
              }}
              isError={false}
            />
          ))}
        </InputField>
      </S.InputFieldWithInfo>

      {/*유효 기간*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.EXPIRATION_DATE}</S.InputTitle>
          <S.InputSubtitle>
            {INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
          </S.InputSubtitle>
        </S.TitleWrapper>
        <InputField
          label={INPUT_LABEL.EXPIRATION_DATE}
          errorMessage={expirationPeriodErrorMessage}
        >
          {expirationPeriod.map((_, index) => (
            <Input
              key={index}
              placeholder={expirationPlaceholder[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChangeExpirationPeriod(e, index);
              }}
              isError={false}
            />
          ))}
        </InputField>
      </S.InputFieldWithInfo>

      {/*소유자 이름*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.OWNER_NAME}</S.InputTitle>
        </S.TitleWrapper>
        <InputField
          label={INPUT_LABEL.OWNER_NAME}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChangeOwnerName(e, 0);
          }}
          errorMessage={ownerErrorMessage}
        >
          <Input placeholder={PLACE_HOLDER.OWNER_NAME} isError={false} />
        </InputField>
      </S.InputFieldWithInfo>
    </>
  );
};

export default CardForm;
