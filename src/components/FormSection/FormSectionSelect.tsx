import FormSection from "./FormSection";
import Select from "../Select/Select";
import { SelectFormSectionProps } from "../../types/componentPropsType";
import React from "react";

const FormSectionSelect = (props: SelectFormSectionProps<any>) => {
  const { title, description, fieldData } = props;

  return (
    <FormSection title={title} description={description}>
      <Select {...fieldData} />
    </FormSection>
  );
};

export default React.memo(FormSectionSelect);
// export default FormSectionSelect;
