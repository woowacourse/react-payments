import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router';
import EditNicknameForm from '../../components/edit/EditNicknameForm/EditNicknameForm';
import Template from '../../components/shared/Template';
import { requestCard } from '../../service/card';
import { Card } from '../../types';

const EditNicknamePage: VFC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<Card>({
    id: '',
    CVC: '',
    cardBrand: { color: '', name: '' },
    cardNumber: '',
    expDate: {
      year: '',
      month: '',
    },
    ownerName: '',
    password: '',
    nickname: '',
    createdAt: '',
  });

  useEffect(() => {
    (async () => {
      if (!id) return;

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
