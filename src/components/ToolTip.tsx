import React from "react";
import styled from "styled-components";

interface ToolTipProps {
  text: string;
}

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #525252;
  padding: 10px 20px;
  border-radius: 7px;
  width: 200px;
  position: absolute;
  bottom: 35px;
`;

export default function ToolTip({ text }: ToolTipProps) {
  return <Wrapper>{text}</Wrapper>;
}
