import React from "react";
import Field from "@/components/layout/Field/Field";
import Input from "@/components/common/Input/Input";

const CVCInput = () => {
  return (
    <Field
      title="CVC 번호를 입력해 주세요"
      labelText="비밀번호 앞 2자리"
      errorMessage=""
    >
      <Input
        name="CVC"
        value="CVC"
        placeholder=""
        isError={false}
        maxLength={3}
      />
    </Field>
  );
};

export default CVCInput;
