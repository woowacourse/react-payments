import styled from "styled-components";

const BarWrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.COLOR["grey-4"]};
  position: relative;
  transition: width 2s;
`;

const ProgressBarLine = styled.div<{ widthPercent: number }>`
  width: ${({ widthPercent }) => `${widthPercent}%`};
  height: 10px;
  background: linear-gradient(to right, #49a3c9, #3cd3ad);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  position: absolute;
  z-index: 10;
  left: 0;
  border-radius: ${({ widthPercent }) =>
    widthPercent === 100 ? "0" : "0 10px 10px 0"};
  transition: width 0.5s ease-in-out;
`;

export const S = {
  BarWrapper,
  ProgressBarLine,
};
