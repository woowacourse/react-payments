import { css } from "@emotion/react";
import { FormContainerProps } from "../../types/componentPropsType";
import Button from "../Button/Button";
import { useMemo } from "react";
import formUIControllerData from "../../constants/formUIControllerData";
import FieldRenderer from "./FieldRenderer";

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
      {visibleFields.map((field) => {
        return (
          <FieldRenderer
            key={field.key}
            field={field}
            cardInformationState={cardInformationState}
            setCardInformationState={setCardInformationState}
            validation={validation}
          />
        );
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
