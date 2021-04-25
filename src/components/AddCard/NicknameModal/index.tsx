import Modal from '../../common/Modal';
import Input from '../../common/Input';
import { FC } from 'react';
import CreditCard from '../../CreditCard';
import { CardNumber, ExpDate } from '../../../types';
import { NicknameContainer } from './styles';
import Button from '../../common/Button';

interface Props {
  modalClose: () => void;
  cardName: string;
  cardColor: string;
  cardNumber: CardNumber;
  expDate: ExpDate;
  ownerName: string;
}

const NicknameModal: FC<Props> = ({ modalClose, cardName, cardColor, cardNumber, expDate, ownerName }) => {
  return (
    <Modal modalClose={modalClose} type="full">
      <NicknameContainer>
        <header>카드등록이 완료되었습니다.</header>
        <CreditCard
          className="result-card"
          cardName={cardName}
          cardColor={cardColor}
          cardNumber={cardNumber}
          expDate={expDate}
          ownerName={ownerName}
          size="lg"
        />
        <Input color="black" underline textCenter width="60%" height="2rem" defaultValue={cardName} />
        <Button position="bottom-right" className="submit-btn">
          확인
        </Button>
      </NicknameContainer>
    </Modal>
  );
};

export default NicknameModal;
