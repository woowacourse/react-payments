import styled from "styled-components";

import InputDescription from "./InputDescription";
import ExpirationDateForm from "./ExpirationDateForm";
import UserNameForm from "./UserNameForm";
import CardNumberForm from "./CardNumberForm";
export interface ICardFormProps {
  labelContent: string;
  inputCount: number;
  type: string;
  placeholders: string[];
  setCardNumbers?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setExpirationDate?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setUserName?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

const Form = ({
  setCardNumbers,
  setExpirationDate,
  setUserName,
}: {
  setCardNumbers: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setExpirationDate: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setUserName: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}) => {
  return (
    <FormWrapper>
      <div style={{ height: "137px" }}>
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
        ></CardNumberForm>
      </div>

      <div style={{ height: "137px" }}>
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
        ></ExpirationDateForm>
      </div>

      <div style={{ height: "137px" }}>
        <InputDescription title="카드 소유자 이름을 입력해 주세요"></InputDescription>
        <UserNameForm
          labelContent="소유자 이름"
          inputCount={1}
          type="text"
          placeholders={["JOHN DOE"]}
          setUserName={setUserName}
        ></UserNameForm>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 315px;
  height: 427px;
`;

export default Form;
