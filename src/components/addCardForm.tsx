import styled from "styled-components";
import { getFormFields, IFormData } from "../utils/formData";

import { CardNumber } from "./cardNumber";
import { CardPassword } from "./cardPassword";
import { ExpiredDate } from "./expiredDate";
import { SecurityCode } from "./securityCode";
import { UserName } from "./userName";

export function AddCardForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const fields: IFormData = getFormFields(target);
    console.log(fields);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <CardNumber />
      <ExpiredDate />
      <UserName />
      <SecurityCode />
      <CardPassword />
      <button type="submit">next</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  margin-left: 1rem;
`;
