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

  const changeCompany = (company: CardCompany) => {
    setCardInfo((prev: CardInfo) => ({ ...prev, cardCompany: company }))
  }

  const changeCardNumbers = (cardNumber: string, index: number) => {
    const newCardInfo = [...cardInfo.cardNumbers]
    newCardInfo[index] = cardNumber
    setCardInfo((prev: CardInfo) => ({ ...prev, cardNumbers: newCardInfo } as CardInfo));
    if (index === 0) {
      setCardInfo((prev: CardInfo) => ({ ...prev, cardBrand: changeCardBrand(cardNumber) }))
    }
  };

  const changeExpiration = ({ month, year }: Expiration) => {
    setCardInfo((prev: CardInfo) => ({
      ...prev,
      expirationMonth: month,
      expirationYear: year,
    }));
  };

  const changeName = (name: string) => {
    setCardInfo((prev: CardInfo) => ({ ...prev, name: name }));
  };

  const changeCVC = (cvc: string) => {
    setCardInfo((prev: CardInfo) => ({ ...prev, cvc: cvc }));
  };

  const changePassword = (password: string) => {
    setCardInfo((prev: CardInfo) => ({ ...prev, password }));
  };

  return { changeCompany, changeCardNumbers, changeExpiration, changeName, changeCVC, changePassword }
}

export default useCardInfo;
