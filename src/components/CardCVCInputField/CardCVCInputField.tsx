import { CVC_MAX_LENGTH, HELPER_MESSAGE } from "./constants";
import FormField from "@components/common/FormField";
import Input from "@components/common/Input";
import useCardCVCInput from "./useCardCVCInput";

interface CardCVCInputFieldProps {
  CVC: string;
  onChange: (CVC: string) => void;
  onNextStep: (fromStep: number) => void;
}

const CardCVCInputField = ({
  CVC,
  onChange,
  onNextStep,
}: CardCVCInputFieldProps) => {
  const { status, handleCVCChange, handleCVCBlur } = useCardCVCInput({
    onChange,
    onNextStep,
  });

  return (
    <FormField
      title="CVC 번호를 입력해 주세요"
      label="CVC"
      helperMessage={HELPER_MESSAGE[status]}
    >
      <Input
        autoFocus
        placeholder="123"
        maxLength={CVC_MAX_LENGTH}
        fullWidth
        value={CVC}
        onChange={(e) => {
          const input = e.target.value;
          handleCVCChange(input);
        }}
        onBlur={(e) => {
          const input = e.target.value;
          handleCVCBlur(input);
        }}
        state={status === "DEFAULT" ? "default" : "error"}
      />
    </FormField>
  );
};

export default CardCVCInputField;
