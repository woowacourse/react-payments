import styled from "styled-components";

export function SubmitButton() {
  return (
    <ButtonWrapper>
      <CompleteButton type="submit">다음</CompleteButton>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const CompleteButton = styled.button`
  width: 5rem;

  padding: 0.5rem 0.1rem;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray200};
`;
