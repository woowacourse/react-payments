import styled from "@emotion/styled";
import Input from "./Input";
import { type ExpireDateState } from "../../../types/types";
import { memo } from "react";

function ExpireDate({ expireDate, setExpireDate }: ExpireDateState) {
  return (
    <Wrapper>
      <Header>카드 유효기간을 입력해 주세요</Header>
      <SubHeader>월/년도(MMYY)를 순서대로 입력해 주세요.</SubHeader>
      <Label>유효기간</Label>
      <Input expireDate={expireDate} setExpireDate={setExpireDate} />
    </Wrapper>
  );
}

export default memo(ExpireDate);

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

const Header = styled.h1`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0%;
  line-height: 100%;
  vertical-align: middle;
  color: rgba(0, 0, 0, 1);
  margin: 0;
`;

const SubHeader = styled.h2`
  font-size: 9.5px;
  font-weight: 400;
  letter-spacing: 0%;
  line-height: 100%;
  vertical-align: middle;
  color: rgba(139, 149, 161, 1);
  margin: 6px 0 0 0;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  vertical-align: middle;
  color: rgba(10, 13, 19, 1);
  margin: 6px 0;
`;
