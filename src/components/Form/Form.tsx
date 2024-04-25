import styled from "styled-components";

import { useState } from "react";

import InputDescription from "./InputDescription";
import ExpirationDateForm from "./ExpirationDateForm";
import UserNameForm from "./UserNameForm";
import CardNumberForm from "./CardNumberForm";
import CardCompanyForm from "./CardCompanyForm";
import CVCNumberForm from "./CVCNumberForm";

// TODO: 이름 수정 - ICardInputFormProps
export interface ICardFormProps {
  labelContent: string;
  inputCount: number;
  type: string;
  placeholders?: string[];
  setCardNumbers?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setExpirationDate?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setUserName?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setCardCompany?: React.Dispatch<React.SetStateAction<string>>;
  setCVCNumber?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setPassword?: React.Dispatch<React.SetStateAction<Map<string, string>>>;

  setIsFrontCardPreview?: React.Dispatch<React.SetStateAction<boolean>>;
  setAllFormsValid: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFormFilledOnce: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({
  setCardNumbers,
  setExpirationDate,
  setUserName,
  setCardCompany,
  setCVCNumber,
  setPassword,
  setIsFrontCardPreview,
}: {
  setCardNumbers: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setExpirationDate: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setUserName: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setCardCompany: React.Dispatch<React.SetStateAction<string>>;
  setCVCNumber: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setPassword: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setIsFrontCardPreview: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isAllCardNumberValid, setIsAllCardNumberValid] = useState(false);
  const [isCardNumberFormFilledOnce, setIsCardNumberFormFilledOnce] =
    useState(false);

  const [isCardCompanySelected, setIsCardCompanySelected] = useState(false);
  const [isCardCompanySelectedOnce, setIsCardCompanySelectedOnce] =
    useState(false);

  const [isAllExpirationDateValid, setIsAllExpirationDateValid] =
    useState(false);
  const [isExpirationDateFilledOnce, setIsExpirationDateFilledOnce] =
    useState(false);

  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isUserNameFilledOnce, setIsUserNameFilledOnce] = useState(false);

  const [isCVCNumberValid, setIsCVCNumberValid] = useState(false);
  const [isCVCNumberFilledOnce, setIsCVCNumberFilledOnce] = useState(false);

  return (
    <FormWrapper>
      <div style={{ height: "170px" }}>
        <InputDescription
          title="결제할 카드 번호를 입력해 주세요"
          description="본인 명의의 카드만 결제 가능합니다."
        ></InputDescription>
        <CardNumberForm
          labelContent="카드 번호"
          inputCount={4}
          type="text"
          placeholders={["1234", "1234", "1234", "1234"]}
          setCardNumbers={setCardNumbers}
          setAllFormsValid={setIsAllCardNumberValid}
          setIsFormFilledOnce={setIsCardNumberFormFilledOnce}
        ></CardNumberForm>
      </div>

      {isCardNumberFormFilledOnce && (
        <div style={{ height: "137px" }}>
          <InputDescription
            title="카드사를 선택해 주세요"
            description="현재 국내 카드사만 가능합니다."
          ></InputDescription>
          <CardCompanyForm
            setCardCompany={setCardCompany}
            setAllFormsValid={setIsCardCompanySelected}
            setIsFormFilledOnce={setIsCardCompanySelectedOnce}
          ></CardCompanyForm>
        </div>
      )}

      {isCardCompanySelectedOnce && (
        <div style={{ height: "170px" }}>
          <InputDescription
            title="카드 유효기간을 입력해 주세요"
            description="월/년도(MMYY)를 순서대로 입력해 주세요."
          ></InputDescription>
          <ExpirationDateForm
            labelContent="유효기간"
            inputCount={2}
            type="text"
            placeholders={["MM", "YY"]}
            setExpirationDate={setExpirationDate}
            setAllFormsValid={setIsAllExpirationDateValid}
            setIsFormFilledOnce={setIsExpirationDateFilledOnce}
          ></ExpirationDateForm>
        </div>
      )}

      {isExpirationDateFilledOnce && (
        <div style={{ height: "170px" }}>
          <InputDescription title="카드 소유자 이름을 입력해 주세요"></InputDescription>
          <UserNameForm
            labelContent="소유자 이름"
            inputCount={1}
            type="text"
            placeholders={["JOHN DOE"]}
            setUserName={setUserName}
            setAllFormsValid={setIsUserNameValid}
            setIsFormFilledOnce={setIsUserNameFilledOnce}
          ></UserNameForm>
        </div>
      )}

      {isUserNameFilledOnce && (
        <div style={{ height: "170px" }}>
          <InputDescription title="CVC 번호를 입력해 주세요"></InputDescription>
          <CVCNumberForm
            labelContent="CVC"
            inputCount={1}
            type="text"
            placeholders={["123"]}
            setCVCNumber={setCVCNumber}
            setAllFormsValid={setIsCVCNumberValid}
            setIsFormFilledOnce={setIsCVCNumberFilledOnce}
            setIsFrontCardPreview={setIsFrontCardPreview}
          ></CVCNumberForm>
        </div>
      )}
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 315px;
  height: max-content;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  max-height: 500px;
  padding: 10px 30px;
`;

const SubmitButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); // 화면 중앙 정렬
  width: 315px;
  height: 50px;
  background-color: #333333;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export default Form;
