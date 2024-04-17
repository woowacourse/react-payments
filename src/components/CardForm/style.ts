import styled from "styled-components";

const InputFieldWithInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InputTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;

const InputSubtitle = styled.h4`
  font-size: 9.5px;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.COLOR["grey-1"]};
`;

const S = {
  InputTitle,
  InputSubtitle,
  InputFieldWithInfo,
  TitleWrapper,
};

export default S;
