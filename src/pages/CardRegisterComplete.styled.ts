import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
`;
const P = styled.p`
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36.2px;
  text-align: center;
`;
const Button = styled.button`
  width: 320px;
  height: 44px;
  top: 414px;
  left: 28px;
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
const S = { Div, P, Button };
export default S;
