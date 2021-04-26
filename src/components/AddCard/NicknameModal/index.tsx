import Modal from '../../common/Modal';
import Input from '../../common/Input';
import { FC } from 'react';
import CreditCard from '../../CreditCard';
import { CardBrand, CardNumber, ExpDate } from '../../../types';
import { NicknameContainer } from './styles';
import Button from '../../common/Button';

interface Props {
  nickname: string;
  setNickname: (nickname: string) => void;
  modalClose: () => void;
  cardBrand: CardBrand;
  cardNumber: CardNumber;
  expDate: ExpDate;
  ownerName: string;
}

const NicknameModal: FC<Props> = ({ modalClose, cardBrand, cardNumber, expDate, ownerName, nickname, setNickname }) => {
  return (
    <Modal modalClose={modalClose} type="full">
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
          onChange={({ target }) => setNickname(target.value)}
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
