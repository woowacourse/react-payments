import React, { ChangeEvent, KeyboardEvent } from "react";
import Field from "@/components/layout/Field/Field";
import Input from "@/components/common/Input/Input";

interface CVCInputProps {
  CVC: { value: string; isError: boolean; errorMessage: string };
  changeCVC: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const CVCInput = ({ CVC, changeCVC, onKeyDown }: CVCInputProps) => {
  return (
    <Field
      title="CVC 번호를 입력해 주세요"
      labelText="입력 완료 후 엔터 키를 입력해주세요"
      errorMessage={CVC.errorMessage}
    >
      <Input
        name="CVC"
        value={CVC.value}
        placeholder="CVC"
        isError={false}
        maxLength={3}
        autoFocus={true}
        onChange={changeCVC}
        onKeyDown={onKeyDown}
      />
    </Field>
  );
};

export default CVCInput;
