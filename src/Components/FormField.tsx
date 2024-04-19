/** @jsxImportSource @emotion/react */
import FormInput from "./FormInput";
import Tooltip from "./Tooltip";

import { css } from "@emotion/react";

interface Props {
  formFieldInfo: FormFieldInfo;
  formErrors: ErrorState;
}

const titleCss = css({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "26px",
  textAlign: "left",
});

const descriptionCss = css({
  fontSize: "10px",
  fontWeight: "400",
  lineHeight: "14px",
  textAlign: "left",
  color: "#8B95A1",
  marginBottom: "30px",
});

const rowStyle = css({
  display: "flex",
  justifyContent: "space-between",
});

const FormField: React.FC<Props> = ({
  formFieldInfo: { key, title, description, label, sizePreset, inputInfoList },
  formErrors,
}) => {
  return (
    <div>
      <h1 css={titleCss}>{title}</h1>
      <p css={descriptionCss}>{description}</p>
      <label htmlFor="id">{label}</label>
      <div css={rowStyle}>
        {inputInfoList.map((inputInfo, index) => (
          <FormInput
            key={`id-${index}`}
            id={`id=${index}`}
            onChange={(e) => inputInfo.onInputChange(e, index)}
            sizePreset={sizePreset}
            placeholder={inputInfo.placeholder}
            maxLength={inputInfo.maxLength}
          ></FormInput>
        ))}
      </div>
      {formErrors[key].errorMessage ? <Tooltip>{formErrors[key].errorMessage}</Tooltip> : <Tooltip>{""}</Tooltip>}
    </div>
  );
};

export default FormField;
