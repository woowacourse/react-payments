import styled from "styled-components";
import { LIMIT_LENGTH } from "constants/limit";
import { HIDDEN_ELEMENT_STYLE } from "constants/style";

const Caption = styled.p`
  color: var(--caption-color);
  font-size: 12px;
  margin: 8px 0 16px 4px;
`;

export const CardNumberCaption = styled(Caption)<{ cardNumbers: string[] }>`
  visibility: ${({ cardNumbers }) =>
    cardNumbers.join("").length === LIMIT_LENGTH.ALL_CARD_NUMBERS &&
    `${HIDDEN_ELEMENT_STYLE}`};
`;

export const DateCaption = styled(Caption)<{ date: string[] }>`
  visibility: ${({ date }) =>
    date.join("").length === LIMIT_LENGTH.ALL_EXPIRATION_DATE &&
    `${HIDDEN_ELEMENT_STYLE}`};
`;

export const PasswordCaption = styled(Caption)<{ password: string[] }>`
  visibility: ${({ password }) =>
    password.join("").length === 2 && `${HIDDEN_ELEMENT_STYLE}`};
`;

export const CodeCaption = styled(Caption)<{ codeLength: number }>`
  visibility: ${({ codeLength }) =>
    codeLength === LIMIT_LENGTH.SECURITY_CODE && `${HIDDEN_ELEMENT_STYLE}`};
`;

export const CardCompanyCaption = styled(Caption)<{ cardCompany: string }>`
  margin: 8px 0 0 0;
  text-align: center;
  visibility: ${({ cardCompany }) =>
    cardCompany !== "" && `${HIDDEN_ELEMENT_STYLE}`};
`;
