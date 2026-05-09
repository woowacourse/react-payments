import styled from '@emotion/styled';

export function ConfirmButton({ isFormComplete }: { isFormComplete: boolean }) {
  return (
    <Button type="submit" $isFormComplete={isFormComplete} disabled={!isFormComplete}>
      확인
    </Button>
  );
}

const Button = styled.button<{ $isFormComplete: boolean }>`
  width: 100%;
  height: 52px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  background-color: #333333;
  position: fixed;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.$isFormComplete ? 'show' : 'none')};
  cursor: pointer;
`;
