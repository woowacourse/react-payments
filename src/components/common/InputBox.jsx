import React from "react";
import styled from "styled-components";

export const InputBox = ({
  children,
  width,
  color,
  backgroundColor,
  justifyContent,
  padding,
}) => {
  return (
    <InputBoxStyle
      width={width}
      color={color}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      padding={padding}
    >
      {children}
    </InputBoxStyle>
  );
};

const InputBoxStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: ${(props) => props.color || "#d3d3d3"};
  border-radius: 0.25rem;
  background-color: ${(props) => props.backgroundColor || "#ecebf1"};
  width: ${(props) => props.width || "unset"};
  justify-content: ${(props) => props.justifyContent || "unset"};
  padding: ${(props) => props.padding || "0"};
`;
