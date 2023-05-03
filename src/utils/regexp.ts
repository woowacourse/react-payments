export const VALID_CARD_NUMBER_REGEX = /^\d{16}$/;
export const VALID_EXPIRATION_MONTH_REGEX = /^0[1-9]|1[0-2]$/;
export const VALID_EXPIRATION_YEAR_REGEX = /^(2[3-9]|[3-9][0-9])$/;
export const VALID_SECURITY_CODE_REGEX = /^\d{3}$/;
export const VALID_PASSWORD_REGEX = /^\d{2}$/;

export const ONLY_NUMBER_REGEXP = /(^$|^\d+$)/;
export const ONLY_NUMBER_OR_SLASH_REGEX = /(^$|^[0-9/]+$)/;
export const MMYY_REGEXP = /^(0[1-9]|1[0-2])([0-9]{2})$/;
export const ONLY_ENG_AND_EMPTY_REGEXP = /(^$|^[a-zA-Z][a-zA-Z ]*$)/;
export const CONTINUOUS_EMPTY_REGEXP = /[ ]{2,}/;
