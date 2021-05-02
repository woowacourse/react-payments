import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EditNicknameForm from '../../components/edit/EditNicknameForm';
import Template from '../../components/shared/Template';
import { requestCard } from '../../service/card';
import { Card, CardBrand, ExpDate } from '../../types';

interface Props {
  nickname: string;
  setNickname: (nickname: string) => void;
  cardBrand: CardBrand;
  cardNumber: string;
  expDate: ExpDate;
  ownerName: string;
}

const EditNicknamePage: FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<Card>({
    CVC: '',
    cardBrand: { color: '', name: '' },
    cardNumber: '',
    expDate: {
      year: '',
      month: '',
    },
    ownerName: '',
    password: '',
    id: '',
    nickname: '',
  });

  useEffect(() => {
    (async () => {
      const cardData = await requestCard(id);

      setCard(cardData);
    })();
  }, []);

  return (
    <Template>
      <EditNicknameForm card={card} />
    </Template>
  );
};

export default EditNicknamePage;
