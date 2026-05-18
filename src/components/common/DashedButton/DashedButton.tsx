import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface DashedButtonProps {
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
}

const DashedButton = styled.button<DashedButtonProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 1.2rem 2.4rem;
  background-color: transparent;
  color: ${({ disabled }) =>
    disabled ? COLOR_PALETTE.GRAY : COLOR_PALETTE["BLACK-800"]};
  border-radius: ${({ rounded }) => (rounded ? "5px" : "0")};
  border: 1px dashed
    ${({ disabled }) =>
      disabled ? COLOR_PALETTE.GRAY : COLOR_PALETTE["BLACK-800"]};
  font-weight: 700;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default DashedButton;
