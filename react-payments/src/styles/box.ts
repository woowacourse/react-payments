import styled, { BoxType } from "styled-components";

const Box = styled.div<BoxType>`
  background-color: ${({ bg }) => bg};
  flex-direction: ${({ flexDirection }) => flexDirection};
  color: ${({ color }) => color};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  margin: ${({ margin }) => margin};
  padding-left: ${({ pl }) => pl};
  padding-top: ${({ pt }) => pt};
  padding-right: ${({ pr }) => pr};
  padding-bottom: ${({ pb }) => pb};
  font-size: ${({ fontSize }) => fontSize};
  display: ${({ display }) => display};
  position: ${({ position }) => position};
  gap: ${({ gap }) => gap};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default Box;
