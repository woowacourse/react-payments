import { css } from "@emotion/react";
import { FormContainerProps } from "../../types/componentPropsType";
import formUIControllerData from "../../constants/formUIControllerData";
import { useState } from "react";
import FormSectionSelect from "../FormSection/FormSectionSelect";
import FormSectionInput from "../FormSection/FormSectionInput";
import { CardInformationType } from "../../types/CardInformationType";

const FormContainer = ({ cardInformationState, setCardInformationState, validation }: FormContainerProps) => {
  const [step, setStep] = useState(0);

  return (
    <div css={FormContainerStyle}>
      <button onClick={() => setStep(step + 1)}></button>
      {formUIControllerData
        .slice(0, step + 1)
        .reverse()
        .map((formSectionData) => {
          if (formSectionData.key === "company") {
            const setState = setCardInformationState.company;
            return (
              <FormSectionSelect
                key="company"
                type="select"
                title={formSectionData.title}
                description={formSectionData.description}
                fieldData={{
                  ...formSectionData.fieldData,
                  setCardInformation: setState,
                }}
              />
            );
          } else {
            // key가 'uniqueNumber' | 'expirationDate' | 'cvcNumber' | 'password'
            const key = formSectionData.key;
            const state = cardInformationState[key];
            const setState = setCardInformationState[key] as React.Dispatch<
              React.SetStateAction<CardInformationType[typeof key]>
            >;
            const eachValidation = validation[key];
            return (
              <FormSectionInput
                key={key}
                type="input"
                title={formSectionData.title}
                description={formSectionData.description}
                fieldData={{
                  ...formSectionData.fieldData,
                  cardInformation: state,
                  setCardInformation: setState,
                  eachValidation,
                }}
              />
            );
          }
        })}
    </div>
  );
};

export default FormContainer;

const FormContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
