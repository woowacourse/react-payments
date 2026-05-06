import { type Dispatch, type SetStateAction } from 'react';
import { Wrapper } from './CardInfo.styles';
import CardNumberSection from './cardNumber/CardNumberSection';
import ExpireDateSection from './expireDate/ExpireDateSection';
import CvcSection from './cvc/CvcSection';

interface Props {
  cardNumber: string[];
  setCardNumber: Dispatch<SetStateAction<string[]>>;
  expireDate: string[];
  setExpireDate: Dispatch<SetStateAction<string[]>>;
  cvcNumber: string;
  setCvcNumber: Dispatch<SetStateAction<string>>;
}

export default function CardInfo({
  cardNumber,
  setCardNumber,
  expireDate,
  setExpireDate,
  cvcNumber,
  setCvcNumber,
}: Props) {
  return (
    <Wrapper>
      <CardNumberSection cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <ExpireDateSection expireDate={expireDate} setExpireDate={setExpireDate} />
      <CvcSection cvcNumber={cvcNumber} setCvcNumber={setCvcNumber} />
    </Wrapper>
  );
}
