import styled from "styled-components";
import { LIMIT_LENGTH } from "constants/limit";
import { HIDDEN_ELEMENT_STYLE } from "constants/style";

const Delimiter = styled.p`
  font-weight: 900;
  align-self: center;
`;

export const Hyphen = styled(Delimiter)<{ cardNumber: string }>`
  visibility: ${({ cardNumber }) =>
    cardNumber.length !== LIMIT_LENGTH.CARD_NUMBER &&
    `${HIDDEN_ELEMENT_STYLE}`};
`;

export const Slash = styled(Delimiter)<{ month: string }>`
  visibility: ${({ month }) =>
    month.length !== LIMIT_LENGTH.EXPIRATION_DATE && `${HIDDEN_ELEMENT_STYLE}`};
`;
