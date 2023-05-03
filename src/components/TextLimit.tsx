import styled, { CSSProp } from "styled-components";
import { LIMIT_LENGTH } from "constants/limit";

interface Props {
  length: number;
  textLimitStyle: CSSProp;
}

const LengthLimit = ({ length, textLimitStyle }: Props) => {
  return (
    <S.Limit textLimitStyle={textLimitStyle}>
      {length}/{LIMIT_LENGTH.NAME}
    </S.Limit>
  );
};

const S = {
  Limit: styled.div<{ textLimitStyle: CSSProp }>`
    ${(props) => props.textLimitStyle}
  `,
};

export default LengthLimit;
