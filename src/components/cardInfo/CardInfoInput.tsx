import styled from "@emotion/styled";

interface CardInfoInputProps {
  inputTitle: string;
  children: React.ReactElement[] | React.ReactElement;
}

export default function CardInfoInput({
  inputTitle,
  children,
}: CardInfoInputProps) {
  return (
    <CardInfoInputWrapper>
      <CardInfoInputLabel>{inputTitle}</CardInfoInputLabel>
      <InputContainer>{children}</InputContainer>
    </CardInfoInputWrapper>
  );
}

const CardInfoInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const CardInfoInputLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0%;
  line-height: 15px;
  vertical-align: middle;
  color: rgba(10, 13, 19, 1);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
`;
