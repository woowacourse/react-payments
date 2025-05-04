import FormSectionSelect from "../FormSection/FormSectionSelect";
import FormSectionInput from "../FormSection/FormSectionInput";
import { FieldRendererProps } from "../../types/componentPropsType";

const formType: Record<"select" | "input", React.FC<any>> = {
  input: FormSectionInput,
  select: FormSectionSelect,
};

const FieldRenderer = ({ field, cardInformationState, setCardInformationState, validation }: FieldRendererProps) => {
  const { key, type, title, description, fieldData } = field;
  const FieldComponent = formType[type];

  const commonProps = {
    type,
    title,
    description,
  };

  const fieldProps =
    type === "select"
      ? {
          ...commonProps,
          fieldData: {
            ...fieldData,
            setState: setCardInformationState.company,
          },
        }
      : {
          ...commonProps,
          fieldData: {
            ...fieldData,
            state: cardInformationState[key],
            setState: setCardInformationState[key],
            eachValidation: validation[key],
          },
        };

  return <FieldComponent {...fieldProps} />;
};

export default FieldRenderer;
