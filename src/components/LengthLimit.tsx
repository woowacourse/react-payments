import styled, { CSSProp } from "styled-components";
import { LIMIT_LENGTH } from "constants/limit";

interface Props {
  length: number;
  lengthLimitStyle: CSSProp;
}

const LengthLimit = ({ length, lengthLimitStyle }: Props) => {
  return (
    <Limit lengthLimitStyle={lengthLimitStyle}>
      {length}/{LIMIT_LENGTH.NAME}
    </Limit>
  );
};

const Limit = styled.div<{ lengthLimitStyle: CSSProp }>`
  ${(props) => props.lengthLimitStyle}
`;

export default LengthLimit;
