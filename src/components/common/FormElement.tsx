import styled from "styled-components";
import ErrorMessage from "../Form/ErrorMessage";

const FormElement = ({ labelContent, inputs, errorMessage }) => {
  return (
    <>
      <InputLabel htmlFor={labelContent}>{labelContent}</InputLabel>
      <InputsContainer id={labelContent}>{inputs}</InputsContainer>
      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

const InputLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
`;

const InputsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 5px;
`;

export default FormElement;
