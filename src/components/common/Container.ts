import styled from "styled-components";

const Container = styled.div<{ justify?: string }>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  justify-content: ${(props) => props.justify};

  width: 375px;
  height: 700px;

  padding: 26px 28px;

  background-color: #fff;
`;

export default Container;
