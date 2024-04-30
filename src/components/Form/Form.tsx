import styled from "styled-components";
import InputDescription from "./InputDescription";
import ExpirationDateForm from "./ExpirationDateForm";
import UserNameForm from "./UserNameForm";
import CardNumberForm from "./CardNumberForm";
import CardCompanyForm from "./CardCompanyForm";
import CardCVCForm from "./CardCVCForm";
import CardPasswordForm from "./CardPasswordForm";
import { useNavigate } from "react-router-dom";
import { CARD_PATH } from "../../constants/card";
import useForm from "../../hooks/useForm";

export interface FormProps {
  cardNumbers?: string[];
  expirationDate?: string[];
  userName?: string[];
  cardCompany?: string[];
  cardCVC?: string[];
  cardPassword?: string[];
  setCardNumbers?: React.Dispatch<React.SetStateAction<string[]>>;
  setExpirationDate?: React.Dispatch<React.SetStateAction<string[]>>;
  setUserName?: React.Dispatch<React.SetStateAction<string[]>>;
  setCardCompany?: React.Dispatch<React.SetStateAction<string[]>>;
  setCardCVC?: React.Dispatch<React.SetStateAction<string[]>>;
  setCardPassword?: React.Dispatch<React.SetStateAction<string[]>>;
  setFocusedField: (field: string) => void;
}

const Styled = {
  FormWrapper: styled.form`
    width: 315px;
    height: 427px;
    overflow-y: auto;
    position: relative;

    font-family: Noto Sans KR;
  `,

  SubmitButton: styled.button`
    background: #333333;
    width: 100%;
    height: 40px;
    position: sticky;
    bottom: 0;
    font-size: 16px;
    font-weight: 500;
    color: white;
    border: none;
  `,
};

const Form = ({
  cardNumbers,
  expirationDate,
  userName,
  cardCompany,
  cardCVC,
  cardPassword,
  setCardNumbers,
  setExpirationDate,
  setUserName,
  setCardCompany,
  setCardCVC,
  setCardPassword,
  setFocusedField,
}: FormProps) => {
  const {
    isCardNumberValid,
    isExpirationDateValid,
    isUserNameValid,
    isCardCompanyValid,
    isCardCVCValid,
    isSubmitEnabled,
    handleCardNumberValidation,
    handleExpirationDateValidation,
    handleUserNameValidation,
    handleCardCompanyValidation,
    handleCardCVCValidation,
    handleCardPasswordValidation,
  } = useForm();

  const navigate = useNavigate();

  return (
    <Styled.FormWrapper>
      {isCardCVCValid && (
        <div style={{ height: "137px" }}>
          <InputDescription
            title="비밀번호를 입력해 주세요"
            description="앞의 2자리를 입력해주세요"
          />
          <CardPasswordForm
            labelContent="비밀번호 앞 2자리"
            inputCount={1}
            type="password"
            placeholders={[""]}
            cardPassword={cardPassword}
            setCardPassword={setCardPassword}
            onValidation={handleCardPasswordValidation}
            onFocus={() => setFocusedField("cardPassword")}
            setFocusedField={setFocusedField}
          />
        </div>
      )}

      {isUserNameValid && (
        <div style={{ height: "137px" }}>
          <InputDescription title="CVC 번호를 입력해 주세요" />
          <CardCVCForm
            labelContent="CVC"
            inputCount={1}
            type="text"
            placeholders={["123"]}
            cardCVC={cardCVC}
            setCardCVC={setCardCVC}
            onValidation={handleCardCVCValidation}
            onFocus={() => setFocusedField("cardCVC")}
            setFocusedField={setFocusedField}
          />
        </div>
      )}

      {isExpirationDateValid && (
        <div style={{ height: "137px" }}>
          <InputDescription title="카드 소유자 이름을 입력해 주세요" />
          <UserNameForm
            labelContent="소유자 이름"
            inputCount={1}
            type="text"
            placeholders={["JOHN DOE"]}
            userName={userName}
            setUserName={setUserName}
            onValidation={handleUserNameValidation}
            onFocus={() => setFocusedField("cardUserName")}
            setFocusedField={setFocusedField}
          />
        </div>
      )}

      {isCardCompanyValid && (
        <div style={{ height: "137px" }}>
          <InputDescription
            title="카드 유효기간을 입력해 주세요"
            description="월/년도(MMYY)를 순서대로 입력해 주세요."
          />
          <ExpirationDateForm
            labelContent="유효기간"
            inputCount={2}
            type="text"
            placeholders={["MM", "YY"]}
            expirationDate={expirationDate}
            setExpirationDate={setExpirationDate}
            onValidation={handleExpirationDateValidation}
            onFocus={() => setFocusedField("cardExpirationDate")}
            setFocusedField={setFocusedField}
          />
        </div>
      )}

      {isCardNumberValid && (
        <div style={{ height: "137px" }}>
          <InputDescription
            title="카드사를 선택해 주세요"
            description="현재 국내 카드사만 가능합니다."
          />
          <CardCompanyForm
            labelContent=""
            placeholders={["카드사를 선택해주세요"]}
            cardCompany={cardCompany}
            setCardCompany={setCardCompany}
            onValidation={handleCardCompanyValidation}
            onFocus={() => setFocusedField("cardCompany")}
            setFocusedField={setFocusedField}
          />
        </div>
      )}

      <div style={{ height: "137px" }}>
        <InputDescription
          title="결제할 카드 번호를 입력해 주세요."
          description="본인 명의의 카드만 결제 가능합니다."
        />
        <CardNumberForm
          labelContent="카드 번호"
          inputCount={4}
          type="text"
          placeholders={["1234", "1234", "1234", "1234"]}
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
          onValidation={handleCardNumberValidation}
          onFocus={() => setFocusedField("cardNumber")}
          setFocusedField={setFocusedField}
        />
      </div>

      {isSubmitEnabled && (
        <Styled.SubmitButton
          onClick={() => {
            navigate(`${CARD_PATH.CARD_REGISTRATION_COMPLETE_PAGE}`, {
              state: { cardNumbers, cardCompany },
            });
          }}
        >
          확인
        </Styled.SubmitButton>
      )}
    </Styled.FormWrapper>
  );
};

export default Form;
