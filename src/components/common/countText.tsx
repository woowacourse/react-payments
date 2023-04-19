import styled from "styled-components";
import { useCountText } from "../../hooks/useCountText";

export function CountText(maxLength: number) {
  const { count, handleChange } = useCountText();

  return (
    <Wrapper>
      {count}/{maxLength}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0;

  display: flex;
`;
