import { flexCenter } from "@/style/common";
import styled from "styled-components";
import { fadeInAnimation } from "@/style/common";

const ConfirmWrapper = styled.div`
  font-size: 25px;
  font-weight: 700;
  ${flexCenter}
  flex-direction: column;
  height: 100vh;
  gap: 46px;
`;

const ConfirmCheckIconCircle = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLOR["grey-3"]};
  ${flexCenter}
  ${fadeInAnimation}
`;

const ConfirmMessageWrapper = styled.div`
  white-space: "pre-wrap";
  ${flexCenter}
  flex-direction: column;
`;

const S = {
  ConfirmWrapper,
  ConfirmCheckIconCircle,
  ConfirmMessageWrapper,
};

export default S;
