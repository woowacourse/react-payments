import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { CardListResponse, getCardList } from '../apis/cards';
import RegisteredCardList from '../components/Card/CardList/RegisteredCardList';
import { useNavigate } from 'react-router-dom';
import EmptyCardList from '../components/Card/CardList/EmptyCardList';

export default function CardListPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<CardListResponse>([]);

  const fetchData = async () => {
    const res = await getCardList();
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id: string) => {
    console.log('id', id);
  };

  return (
    <Container>
      <Title>보유 카드 {data.length > 0 && `(${data.length})`}</Title>

      {data.length === 0 && <EmptyCardList onClick={() => navigate('/registration/completion')} />}
      {data.length > 0 && (
        <RegisteredCardList
          data={data}
          onDelete={handleDelete}
          onClick={() => navigate('/registration/completion')}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  width: 100%;
  margin-bottom: 16px;
  font-size: 18px;
  font-wieght: 700;
  color: #353c49;
`;
