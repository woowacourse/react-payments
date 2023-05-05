import Container from "../common/Container";
import styled from "styled-components";

const AliasInput = () => {
  return (
    <Container>
      <InputField name="alias" placeholder="카드별명" maxLength={20} />
    </Container>
  );
};

const InputField = styled.input`
  height: 45px;
  width: 244px;
  text-align: center;

  font-size: 18px;
  font-weight: 500;

  border-bottom: 1px solid;

  padding: 0 10px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    font-size: 18px;
  }
`;

export default AliasInput;
