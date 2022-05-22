import styled, { css } from "styled-components";
import { RowFlexWrapper } from "styles/wrapper";
import { CardType } from "types";

export interface DotProps {
  styleSize?: string;
  formType?: string;
  cardType?: CardType;
}

const StyledDot = styled.div<DotProps>`
  border-radius: 50%;
  ${({ styleSize }) =>
    styleSize === "huge"
      ? css`
          width: 37px;
          height: 37px;
        `
      : css`
          width: 5px;
          height: 5px;
        `}
  background: ${({ theme, cardType }) =>
    cardType ? theme.colors[cardType] : theme.colors.cardText}
`;

const StyledDotBox = styled(RowFlexWrapper)<DotProps>`
  ${({ formType, styleSize }) =>
    styleSize === "small" &&
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

const Dot = (props: DotProps) => {
  return (
    <StyledDotBox {...props}>
      <StyledDot {...props} />
    </StyledDotBox>
  );
};

export default Dot;
