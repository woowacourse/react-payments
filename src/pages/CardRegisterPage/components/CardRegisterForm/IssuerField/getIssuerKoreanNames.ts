import { ISSUER } from "../../../../../domain/card/cardIssuer";

export const getIssuerKoreanNames = () => {
  return Object.values(ISSUER).map((issuer) => issuer.KOR);
};
