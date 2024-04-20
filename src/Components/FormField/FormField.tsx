/** @jsxImportSource @emotion/react */
import FormInput from "../FormInput/FormInput";
import Tooltip from "../Tooltip/Tooltip";
import { titleCss, descriptionCss, rowStyle } from "./FormField.styles";

interface Props {
  formFieldInfo: FormFieldInfo;
  formErrors: ErrorState;
}

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
            onChange={(e) => inputInfo.onInputChange(e, index)}
            sizePreset={sizePreset}
            placeholder={inputInfo.placeholder}
            maxLength={inputInfo.maxLength}
          ></FormInput>
        ))}
      </div>
      {formErrors[key].errorMessage ? (
        <Tooltip>{formErrors[key].errorMessage}</Tooltip>
      ) : (
        <Tooltip>{""}</Tooltip>
      )}
    </div>
  );
};

export default FormField;
