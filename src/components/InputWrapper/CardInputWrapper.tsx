import styled from "@emotion/styled";

interface Props {
  errorMessage: string | null;
  children: React.ReactNode;
}

export default function CardInputWrapper({ errorMessage, children }: Props) {
  return (
    <CardInputContainer>
      <CardInputRow>{children}</CardInputRow>
      <ErrorContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorContainer>
    </CardInputContainer>
  );
}

const CardInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardInputRow = styled.div`
  display: flex;
  gap: 10px;
`;

const ErrorContainer = styled.div`
  height: 14px;
`;

const ErrorMessage = styled.p`
  font-size: 9.5px;
  line-height: 100%;
  font-weight: 400;
  color: #ff3d3d;
  margin: 0;
`;
