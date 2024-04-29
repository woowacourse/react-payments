import styled from "styled-components";

const CardFormWrapper = styled.div`
  width: 315px;
`;

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

const InputSubTitle = styled.h4`
  font-size: 9.5px;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.COLOR["grey-1"]};
`;
const Button = styled.button`
  position: sticky;
  bottom: 0;
  left: 50%;
  transform: translateX(-28px);

  width: 375px;
  height: 52px;
  gap: 0px;
  border-radius: 5px 0px 0px 0px;
  opacity: 0px;
  background: #333333;

  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  text-align: center;
  color: #ffffff;
`;

const S = {
  CardFormWrapper,
  InputTitle,
  InputSubTitle,
  InputFieldWithInfo,
  TitleWrapper,
  Button,
};

export default S;
