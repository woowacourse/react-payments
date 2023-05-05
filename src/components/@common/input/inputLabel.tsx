import React, { Children, PropsWithChildren } from "react";
import styled from "styled-components";
import { getCustomElement } from "../../../utils/custumElement";

interface InputLabelProps {
  render?: () => JSX.Element;
  children: React.ReactElement[] | React.ReactElement;
  asChild?: boolean;
}

export function InputLabel(props: InputLabelProps) {
  const { children, render, asChild = false } = props;
  const customElement = getCustomElement(asChild, children, props);

  if (!customElement) {
    return (
      <DefaultInputLabelStyle>
        {children}
        {render && render()}
      </DefaultInputLabelStyle>
    );
  }

  return customElement;
}

const DefaultInputLabelStyle = styled.h2`
  display: flex;
  justify-content: space-between;
`;
