import { ChangeEvent, FC, FormEvent, useEffect } from 'react';
import { CardBrand, ExpDate } from '../../../../types';
import Button from '../../../shared/Button';
import Input from '../../../shared/Input';
import Modal from '../../../shared/Modal';
import CreditCard from '../../../shared/CreditCard';
import { NicknameContainer, ResultCreditCard } from './styles';
import fireStore from '../../../../firebase/firebase';
import { addCard } from '../../../../firebase/api';

interface Props {
  nickname: string;
  setNickname: (nickname: string) => void;
  cardBrand: CardBrand;
  cardNumber: string;
  expDate: ExpDate;
  ownerName: string;
}

const NicknameModal: FC<Props> = ({ cardBrand, cardNumber, expDate, ownerName, nickname, setNickname }) => {
  useEffect(() => {
    setNickname(cardBrand.name);
  }, []);

  const onChangeNickname = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setNickname(value);

  const onBlurNickname = () => {
    if (nickname !== '') return;

    setNickname(cardBrand.name);
  };

  const onAddCard = async (event: FormEvent) => {
    event.preventDefault();

    addCard({ cardBrand, cardNumber, expDate, ownerName, nickname });
  };

  return (
    <Modal type="full">
      <NicknameContainer onSubmit={onAddCard}>
        <header>카드등록이 완료되었습니다.</header>
        <ResultCreditCard
          cardBrand={cardBrand}
          cardNumber={cardNumber}
          expDate={expDate}
          ownerName={ownerName}
          size="lg"
        />
        <Input
          color="black"
          value={nickname}
          onChange={onChangeNickname}
          onBlur={onBlurNickname}
          underline
          textCenter
          width="60%"
          height="2rem"
        />

        <Button type="submit" position="bottom-right">
          확인
        </Button>
      </NicknameContainer>
    </Modal>
  );
};

export default NicknameModal;
