/** @jsxImportSource @emotion/react */
import FormSection from "../FormSection/FormSection";
import { css } from "@emotion/css";

type cardInformationType = {
  uniqueNumber: string[];
  expirationDate: string[];
  cvcNumber: string[];
};

type FormContainerProps = {
  cardInformationState: cardInformationType;
  setCardInformationState: (newValue: FormContainerProps["cardInformationState"]) => void;
};

const UIControllerData = {
  uniqueNumber: {
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    inputFieldData: {
      label: "카드번호",
      inputNumber: 4,
      inputProps: { placeholder: ["1234", "1234", "1234", "1234"], maxLength: 4 },
    },
  },
  expirationDate: {
    title: "카드 유효기간을 입력해 주세요",
    description: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    inputFieldData: {
      label: "유효기간",
      inputNumber: 2,
      inputProps: { placeholder: ["MM", "YY"], maxLength: 2 },
    },
  },
  cvcNumber: {
    title: "CVC 번호를 입력해 주세요",
    description: "",
    inputFieldData: {
      label: "cvc",
      inputNumber: 1,
      inputProps: { placeholder: ["123"], maxLength: 3 },
    },
  },
};

const FormContainer = ({ cardInformationState, setCardInformationState }: FormContainerProps) => {
  return (
    <div css={FormContainerStyle}>
      {Object.keys(cardInformationState).map((key) => {
        const formSectionData = UIControllerData[key];
        return (
          <FormSection
            title={formSectionData.title}
            description={formSectionData.description}
            inputFieldData={{
              ...formSectionData.inputFieldData,
              cardInformation: cardInformationState,
              setCardInformation: setCardInformationState,
              informationType: key,
            }}
          />
        );
      })}
    </div>
  );
};

export default FormContainer;

const FormContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
