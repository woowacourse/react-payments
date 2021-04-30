import { ChangeEvent, FC, useEffect } from 'react';
import { CardBrand, ExpDate } from '../../../../types';
import Button from '../../../shared/Button';
import Input from '../../../shared/Input';
import Modal from '../../../shared/Modal';
import CreditCard from '../../../shared/CreditCard';
import { NicknameContainer } from './styles';

interface Props {
  nickname: string;
  setNickname: (nickname: string) => void;
  cardBrand: CardBrand;
  cardNumber: string;
  expDate: ExpDate;
  ownerName: string;
}

const NicknameModal: FC<Props> = ({ cardBrand, cardNumber, expDate, ownerName, nickname, setNickname }) => {
  const onChangeNickname = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!value) {
      setNickname(cardBrand.name);
    }
    setNickname(value);
  };

  useEffect(() => {
    setNickname(cardBrand.name);
  }, []);

  return (
    <Modal type="full">
      <NicknameContainer>
        <header>카드등록이 완료되었습니다.</header>
        <CreditCard
          className="result-card"
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
