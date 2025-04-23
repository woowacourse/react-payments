import FormSection from "../FormSection/FormSection";
import { css } from "@emotion/react";
import { FormContainerProps } from "../../types/componentPropsType";
import formUIControllerData from "../../constants/formUIControllerData";
import { CardInformationType } from "../../types/CardInformationType";

const FormContainer = ({ cardInformationState, setCardInformationState, validation }: FormContainerProps) => {
  return (
    <div css={FormContainerStyle}>
      {(Object.keys(cardInformationState) as (keyof CardInformationType)[]).map((key) => {
        const formSectionData = formUIControllerData[key];
        const eachValidation = validation[key];
        return (
          <FormSection
            title={formSectionData.title}
            description={formSectionData.description}
            inputFieldData={{
              ...formSectionData.inputFieldData,
              cardInformation: cardInformationState,
              setCardInformation: setCardInformationState,
              eachValidation: eachValidation,
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
