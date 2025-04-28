import FormSection from "./FormSection";
import Select from "../Select/Select";
import { SelectFormSectionProps } from "../../types/componentPropsType";
import React from "react";
import { CardInformationType } from "../../types/CardInformationType";

const FormSectionSelect = <T extends Extract<keyof CardInformationType, "company">>(
  props: SelectFormSectionProps<T>,
) => {
  const { title, description, fieldData } = props;

  return (
    <FormSection title={title} description={description}>
      <Select {...fieldData} />
    </FormSection>
  );
};

export default React.memo(FormSectionSelect) as typeof FormSectionSelect;
// export default FormSectionSelect;
