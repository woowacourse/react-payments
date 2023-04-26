import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";

interface BottomSheetType {
  children: ReactNode;
}

const BottomSheet = (props: BottomSheetType) => {
  return <BottomSheetWrapper>{props.children}</BottomSheetWrapper>;
};

const BottomSheetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: white;
  padding: 100px;
`;

export default React.memo(BottomSheet);
