import styled from "styled-components";

const ColorBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin: 15px;
  cursor: pointer;
`;

const ColorCircle = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.color};
  width: 50px;
  height: 50px;
`;

export { ColorBoxWrapper, ColorCircle };
