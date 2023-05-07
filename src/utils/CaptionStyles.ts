import { LENGTH } from 'constants/constants';
import { HIDDEN_ELEMENT_STYLE } from 'styles/HiddenStyle';

const showNumberCaption = (cardNumbers: string[]) =>
  (cardNumbers.join('').length === LENGTH.EACH_CARD_NUMBER * 4 ||
    cardNumbers.join('').length === 0) &&
  `${HIDDEN_ELEMENT_STYLE}`;

const showDateCaption = (date: string[]) =>
  (date.join('').length === LENGTH.EXPIRATION * 2 ||
    date.join('').length === 0) &&
  `${HIDDEN_ELEMENT_STYLE}`;

const showNameCaption = (Name: string) => Name && `${HIDDEN_ELEMENT_STYLE}`;

const showPasswordCaption = (password: string[]) =>
  (password.join('').length === LENGTH.EACH_PASSWORD * 2 ||
    password.join('').length === 0) &&
  `${HIDDEN_ELEMENT_STYLE}`;

const showCodeCaption = (codeLength: number) =>
  (codeLength === LENGTH.SECURITY_CODE || codeLength === 0) &&
  `${HIDDEN_ELEMENT_STYLE}`;

export {
  showNumberCaption,
  showDateCaption,
  showNameCaption,
  showPasswordCaption,
  showCodeCaption,
};
