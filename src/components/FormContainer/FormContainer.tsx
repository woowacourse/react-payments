import FormSection from "../FormSection/FormSection";
import { css } from "@emotion/react";
import { FormContainerProps } from "../../types/componentPropsType";
import formUIControllerData from "../../constants/formUIControllerData";
import { useState } from "react";

const FormContainer = ({ cardInformationState, setCardInformationState, validation }: FormContainerProps) => {
  const [step, setStep] = useState(0);

  return (
    <div css={FormContainerStyle}>
      <button onClick={() => setStep(step + 1)}></button>
      {formUIControllerData
        .slice(0, step + 1)
        .reverse()
        .map((formSectionData) => {
          if (formSectionData.type === "input") {
            const eachValidation = validation[formSectionData.key];
            return (
              <FormSection
                key={formSectionData.key}
                type="input"
                title={formSectionData.title}
                description={formSectionData.description}
                fieldData={{
                  ...formSectionData.fieldData,
                  cardInformation: cardInformationState,
                  setCardInformation: setCardInformationState,
                  eachValidation: eachValidation,
                  informationType: formSectionData.key,
                }}
              />
            );
          }

          return (
            <FormSection
              key={formSectionData.key}
              type="select"
              title={formSectionData.title}
              description={formSectionData.description}
              fieldData={{
                ...formSectionData.fieldData,
                informationType: formSectionData.key,
                setCardInformation: setCardInformationState,
              }}
            />
          );
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
