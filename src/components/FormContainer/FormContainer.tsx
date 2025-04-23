import FormSection from "../FormSection/FormSection";
import { css } from "@emotion/react";
import { FormContainerProps } from "../../types/componentPropsType";
import formUIControllerData from "../../constants/formUIControllerData";

const FormContainer = ({ cardInformationState, setCardInformationState, validation }: FormContainerProps) => {
  return (
    <div css={FormContainerStyle}>
      {formUIControllerData.map((formSectionData) => {
        const eachValidation = validation[formSectionData.key];
        return (
          <FormSection
            title={formSectionData.title}
            description={formSectionData.description}
            inputFieldData={{
              ...formSectionData.inputFieldData,
              cardInformation: cardInformationState,
              setCardInformation: setCardInformationState,
              eachValidation: eachValidation,
              informationType: formSectionData.key,
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
