import { css } from "@emotion/react";
import { FormContainerProps } from "../../types/componentPropsType";
import formUIControllerData from "../../constants/formUIControllerData";
import FormSectionSelect from "../FormSection/FormSectionSelect";
import FormSectionInput from "../FormSection/FormSectionInput";
import { CardInformationType } from "../../types/CardInformationType";
import Button from "../Button/Button";
import { useMemo } from "react";

const formType: Record<"select" | "input", React.FC<any>> = {
  input: FormSectionInput,
  select: FormSectionSelect,
};

const FieldRenderer = ({ type, ...rest }: { type: "select" | "input" }) => {
  const FieldComponent = formType[type];
  return <FieldComponent {...rest} />;
};

const FormContainer = ({
  cardInformationState,
  setCardInformationState,
  validation,
  step,
  complete,
  onSubmit,
}: FormContainerProps) => {
  const visibleFields = useMemo(() => {
    return formUIControllerData.slice(0, step + 1).reverse();
  }, [step]);

  return (
    <form css={FormContainerStyle} onSubmit={onSubmit}>
      {visibleFields.map((formSectionData) => {
        const { key, type, title, description, fieldData } = formSectionData;

        const props =
          type === "select"
            ? {
                type,
                title,
                description,
                fieldData: {
                  ...fieldData,
                  setState: setCardInformationState.company,
                },
              }
            : {
                type,
                title,
                description,
                fieldData: {
                  ...fieldData,
                  state: cardInformationState[key],
                  setState: setCardInformationState[key] as React.Dispatch<
                    React.SetStateAction<CardInformationType[typeof key]>
                  >,
                  eachValidation: validation[key],
                },
              };

        return <FieldRenderer key={key} {...props} />;
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
