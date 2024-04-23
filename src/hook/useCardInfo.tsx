import { startsWithNumberRegex } from "../util/startsWithNumberRegex";

interface UseCardInfoProps {
  cardInfo: CardInfo
  setCardInfo: React.Dispatch<React.SetStateAction<CardInfo>>
}

const useCardInfo = (props: UseCardInfoProps) => {
  const { cardInfo, setCardInfo } = props

  const changeCardBrand = (cardNumber: string) => {
    if (startsWithNumberRegex(4).test(cardNumber)) {
      return ('Visa');
    } else if (startsWithNumberRegex(51, 55).test(cardNumber)) {
      return ('MasterCard');
    } else {
      return ('none');
    }
  }

  const changeCompany = (company: CardCompany, isComplete?: boolean) => {
    setCardInfo((prev: CardInfo) => ({ ...prev, cardCompany: { value: company, isComplete: isComplete || prev.cardCompany.isComplete } }))
  }

  const changeCardNumbers = (cardNumber: string, index: number, isComplete?: boolean) => {
    const newCardInfo = [...cardInfo.cardNumbers.value]
    newCardInfo[index] = cardNumber
    setCardInfo((prev: CardInfo) => ({ ...prev, cardNumbers: { value: newCardInfo, isComplete: isComplete || prev.cardNumbers.isComplete } } as CardInfo));
    if (index === 0) {
      setCardInfo((prev: CardInfo) => ({ ...prev, cardBrand: { value: changeCardBrand(cardNumber), isComplete: isComplete || prev.cardBrand.isComplete } }))
    }
  };

  const changeExpiration = ({ month, year }: Expiration, isComplete?: boolean) => {
    setCardInfo((prev: CardInfo) => ({
      ...prev,
      expiration: { value: { month, year }, isComplete: isComplete || prev.expiration.isComplete }
    }));
  };

  const changeName = (name: string, isComplete?: boolean) => {
    setCardInfo((prev: CardInfo) => ({ ...prev, name: { value: name, isComplete: isComplete || prev.name.isComplete } }));
  };

  const changeCVC = (cvc: string, isComplete?: boolean) => {
    setCardInfo((prev: CardInfo) => ({ ...prev, cvc: { value: cvc, isComplete: isComplete || prev.cvc.isComplete } }));
  };

  const changePassword = (password: string, isComplete?: boolean) => {
    setCardInfo((prev: CardInfo) => ({ ...prev, password: { value: password, isComplete: isComplete || prev.password.isComplete } }));
  };

  return { changeCompany, changeCardNumbers, changeExpiration, changeName, changeCVC, changePassword }
}

export default useCardInfo;
