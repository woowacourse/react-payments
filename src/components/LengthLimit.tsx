import styled, { CSSProp } from "styled-components";
import { LIMIT_LENGTH } from "constants/limit";

interface Props {
  length: number;
  lengthLimitStyle: CSSProp;
}

const LengthLimit = ({ length, lengthLimitStyle }: Props) => {
  return (
    <S.Limit lengthLimitStyle={lengthLimitStyle}>
      {length}/{LIMIT_LENGTH.NAME}
    </S.Limit>
  );
};

const S = {
  Limit: styled.div<{ lengthLimitStyle: CSSProp }>`
    ${(props) => props.lengthLimitStyle}
  `,
};

export default LengthLimit;
