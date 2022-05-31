import React, { useState } from "react";

import { Form } from "components";
import Button from "components/UIComponents/Button/Button";
import Input from "components/UIComponents/Input/Input";
import InputField from "components/UIComponents/InputField/InputField";

type Props = {
  handleAddNickname: (FormData: Object) => void;
};

export default function CardNicknameForm({ handleAddNickname }: Props) {
  const [nicknameLength, setNicknameLength] = useState(0);
  return (
    <Form onSubmit={handleAddNickname}>
      <InputField
        shape={"underline"}
        wrapperWidth={"xl"}
        horizontalAlign={"center"}
      >
        <Input
          width={"full"}
          name={"nickname"}
          placeholder={"카드의 별칭을 추가할 수 있습니다"}
          onChange={(e) => setNicknameLength(e.target.value.length)}
        />
      </InputField>
      <Button>{nicknameLength !== 0 ? "완료" : "건너뛰기"}</Button>
    </Form>
  );
}
