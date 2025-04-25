import FormSection from "../FormSection/FormSection";
import { css } from "@emotion/react";
import { FormContainerProps } from "../../types/componentPropsType";
import formUIControllerData from "../../constants/formUIControllerData";

const FormContainer = ({ cardInformationState, setCardInformationState, validation }: FormContainerProps) => {
  return (
    <div css={FormContainerStyle}>
      {formUIControllerData.map((formSectionData) => {
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
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
