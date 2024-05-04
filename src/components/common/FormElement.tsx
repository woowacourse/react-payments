import styled from "styled-components";
import ErrorMessage from "../Form/ErrorMessage";

const Styled = {
  InputLabel: styled.label`
    font-size: 12px;
    font-weight: 500;
  `,

  InputsContainer: styled.div`
    display: flex;
    gap: 8px;
    margin-top: 5px;
  `,
};

const FormElement = ({
  labelContent,
  inputs,
  errorMessage,
}: {
  labelContent: string;
  inputs: JSX.Element[] | JSX.Element;
  errorMessage: string;
}) => {
  return (
    <>
      <Styled.InputLabel htmlFor={labelContent}>{labelContent}</Styled.InputLabel>
      <Styled.InputsContainer id={labelContent}>{inputs}</Styled.InputsContainer>
      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

export default FormElement;
