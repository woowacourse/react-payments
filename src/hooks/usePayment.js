import { useCardCompany } from './useCardCompany';
import { useCardName } from './useCardName';
import { useCardNumbers } from './useCardNumbers';
import { useExpiration } from './useExpiration';
import { useOwnerName } from './useOwnerName';
import { usePassword } from './usePassword';
import { useSecurityCode } from './useSecurityCode';

export const usePayments = () => {
  const { cardNumbers } = useCardNumbers();
  const { cardCompany } = useCardCompany();
  const { expiration } = useExpiration();
  const { ownerName } = useOwnerName();
  const { securityCode } = useSecurityCode();
  const { password } = usePassword();
  const { cardName } = useCardName();

  return {
    cardNumbers,
    cardCompany,
    expiration,
    ownerName,
    securityCode,
    password,
    cardName,
  };
};
