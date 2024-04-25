import { FlexCenter } from "@/style/common";
import styled from "styled-components";
import { fadeInAnimation } from "@/style/common";

const ConfirmWrapper = styled.div`
  font-size: 25px;
  font-weight: 700;
  ${FlexCenter}
  flex-direction: column;
  height: 100vh;
  gap: 46px;
`;

const ConfirmCheckIconCircle = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLOR["grey-3"]};
  ${FlexCenter}
  ${fadeInAnimation}
`;

const ConfirmMessageWrapper = styled.div`
  white-space: "pre-wrap";
  ${FlexCenter}
  flex-direction: column;
`;

const S = {
  ConfirmWrapper,
  ConfirmCheckIconCircle,
  ConfirmMessageWrapper,
};

export default S;
