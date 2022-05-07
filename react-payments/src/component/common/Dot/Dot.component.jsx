import styled, { css } from "styled-components";
import { RowFlexWrapper } from "styles/wrapper";

const StyledDot = styled.div`
  border-radius: 50%;
  ${({ size }) =>
    size === "huge"
      ? css`
          width: 37px;
          height: 37px;
        `
      : css`
          width: 5px;
          height: 5px;
        `}
  background: ${({ theme, cardType }) =>
    theme.colors[cardType] || theme.colors.cardText}
`;

const StyledDotBox = styled(RowFlexWrapper)`
  ${({ formType, size }) =>
    size === "small" &&
    (formType === "card-password"
      ? css`
          width: 43px;
          height: 43px;
        `
      : css`
          width: 9px;
          height: 9px;
        `)}
`;

const Dot = (props) => {
  return (
    <StyledDotBox {...props}>
      <StyledDot {...props} />
    </StyledDotBox>
  );
};

export default Dot;
