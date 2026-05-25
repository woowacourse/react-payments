import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Flex from "./Flex";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Circle = styled.div`
  margin-top: 333px;
  width: 30px;
  height: 30px;
  border: 4px solid #e0e0e0;
  border-top-color: #333333;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const Text = styled.span`
  font-size: 14px;
  color: var(--color-description);
`;

function Spinner() {
  return (
    <Flex
      direction="column"
      gap={12}
      justifyContent="center"
      style={{ alignItems: "center" }}
    >
      <Circle />
      <Text>로딩중</Text>
    </Flex>
  );
}

export default Spinner;
