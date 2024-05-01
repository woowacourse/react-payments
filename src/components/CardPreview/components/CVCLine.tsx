import styled from "styled-components";

interface CVCLineProps {
  cvcNumber: string;
}

const CVCLine = ({ cvcNumber }: CVCLineProps) => {
  return (
    <StyledCVCLine>
      <CVCText>{cvcNumber}</CVCText>
    </StyledCVCLine>
  );
};

export default CVCLine;

const StyledCVCLine = styled.div`
  height: 24px;
  margin-top: 84px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #cbba64;
`;

const CVCText = styled.span`
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 8%;

  margin-right: 16px;
`;
