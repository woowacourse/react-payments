import { ChangeEvent, FC, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { ALERT } from '../../../../constants/messages';
import PAGE from '../../../../constants/pages';
import { addCard } from '../../../../firebase/api';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { CardBrand, ExpDate } from '../../../../types';
import Button from '../../../shared/Button';
import Input from '../../../shared/Input';
import Modal from '../../../shared/Modal';
import { NicknameContainer, ResultCreditCard } from './styles';

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
  const history = useHistory();

  const onBlurNickname = () => {
    if (nickname !== '') return;

    setNickname(cardBrand.name);
  };

  const onAddCard = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await addCard({ cardBrand, cardNumber, expDate, ownerName, nickname });
      alert(ALERT.CARD_SUBMIT_SUCCESS);
      history.push(PAGE.CARD_LIST.PATH);
    } catch (e) {
      alert(e.message);
    }
  };

  const debouncedOnAddCard = useDebounceCallback(onAddCard, 500);

  return (
    <Modal type="full">
      <NicknameContainer onSubmit={debouncedOnAddCard}>
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
