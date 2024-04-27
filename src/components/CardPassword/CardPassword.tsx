import Input from "../atoms/Input/Input";
import { SubTitleText, LabelText, CaptionText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./style";

interface Props {
  cardPassword: UseInputReturn;
}

export default function CardPassword({ cardPassword }: Props) {
  return (
    <S.CardPasswordContainer>
      <SubTitleText>비밀번호를 입력해 주세요</SubTitleText>
      <CaptionText>앞의 2자리를 입력해주세요</CaptionText>
      <S.CardPasswordBox>
        <LabelText htmlFor="cardPassword">비밀번호 앞 2자리</LabelText>
        <S.InputContainer>
          <Input
            id="cardPassword"
            ref={cardPassword.ref}
            type="password"
            maxLength={2}
            placeholder=""
            value={cardPassword.value}
            isError={cardPassword.validateMessage !== ""}
            onChange={cardPassword.onChange}
            onBlur={cardPassword.onBlur}
          />
        </S.InputContainer>
        <ErrorMessage message={cardPassword.validateMessage || ""} />
      </S.CardPasswordBox>
    </S.CardPasswordContainer>
  );
}
