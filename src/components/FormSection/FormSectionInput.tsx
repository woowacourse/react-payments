import FormSection from "./FormSection";
import { InputFormSectionProps } from "../../types/componentPropsType";
import InputField from "../InputField/InputField";
import { CardInformationType } from "../../types/CardInformationType";
import React from "react";

const FormSectionInput = <T extends Exclude<keyof CardInformationType, "company">>(props: InputFormSectionProps<T>) => {
  const { title, description, fieldData } = props;
  return (
    <FormSection title={title} description={description}>
      <InputField {...fieldData} />
    </FormSection>
  );
};

export default React.memo(FormSectionInput);
// export default FormSectionInput;
