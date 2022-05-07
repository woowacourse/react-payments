import React from "react";
import { Form } from "../components";
import Button from "../components/UIComponents/Button/Button";
import Input from "../components/UIComponents/Input/Input";
import InputField from "../components/UIComponents/InputField/InputField";

export default function CardNicknameForm({ handleAddNickname }) {
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
          required
        />
      </InputField>
      <Button>완료</Button>
    </Form>
  );
}
