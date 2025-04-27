import { css } from "@emotion/react";
import { FormContainerProps } from "../../types/componentPropsType";
import formUIControllerData from "../../constants/formUIControllerData";
import FormSectionSelect from "../FormSection/FormSectionSelect";
import FormSectionInput from "../FormSection/FormSectionInput";
import { CardInformationType } from "../../types/CardInformationType";
import Button from "../Button/Button";

const FormContainer = ({
  cardInformationState,
  setCardInformationState,
  validation,
  step,
  complete,
  onSubmit,
}: FormContainerProps) => {
  return (
    <form css={FormContainerStyle} onSubmit={onSubmit}>
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
      <div css={ButtonWrapperStyle}>{complete && <Button type="submit" text="완료" />}</div>
    </form>
  );
};

export default FormContainer;

const FormContainerStyle = css`
  width: 100%;
  height: 63%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
`;

const ButtonWrapperStyle = css`
  position: absolute;
  width: calc(100% - 60px);
  bottom: 20px;
  z-index: 99;
`;
