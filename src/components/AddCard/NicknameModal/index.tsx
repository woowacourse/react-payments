import Modal from '../../common/Modal';
import Input from '../../common/Input';
import { ChangeEvent, FC, useEffect } from 'react';
import CreditCard from '../../common/CreditCard';
import { CardBrand, ExpDate } from '../../../types';
import { NicknameContainer } from './styles';
import Button from '../../common/Button';

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
