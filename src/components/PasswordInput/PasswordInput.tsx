import Field from "@/components/layout/Field/Field";
import Input from "../common/Input/Input";

const PasswordInput = () => {
  return (
    <Field
      title="비밀번호를 입력해 주세요"
      description="앞의 2자리를 입력해주세요"
      labelText="비밀번호 앞 2자리"
      errorMessage=""
    >
      <Input
        name="password"
        value="12321"
        placeholder=""
        isError={false}
        maxLength={2}
        isPassword={true}
      />
    </Field>
  );
};

export default PasswordInput;
