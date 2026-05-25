import styled from '@emotion/styled';
import { deleteCard, getCardList } from '../apis/cards';
import RegisteredCardList from '../components/Card/CardList/RegisteredCardList';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';
import SkeletonCardList from '../components/Card/CardList/SkeletonCardList';
import FabllbackView from '../components/Card/CardList/FabllbackView';
import errorIcon from '../assets/error.svg';

export default function CardListPage() {
  const navigate = useNavigate();

  const { data, isLoading, isSuccess, isError, refetch } = useQuery({ queryFn: getCardList });

  const handleDelete = async (id: string) => {
    await deleteCard(id);
    refetch();
  };

  return (
    <Container>
      <Title>보유 카드 {isSuccess && data && data.length > 0 && `(${data.length})`}</Title>

      {isLoading && <SkeletonCardList />}
      {isSuccess && data && data.length === 0 && (
        <FabllbackView
          icon={<EmptyCard />}
          title="등록된 카드가 없습니다"
          description="아래 버튼을 눌러 첫 카드를 등록해보세요"
          action={{ label: '카드 추가하기', onClick: () => navigate('/registration') }}
        />
      )}
      {isSuccess && data && data.length > 0 && (
        <RegisteredCardList
          data={data}
          onDelete={handleDelete}
          onClick={() => navigate('/registration')}
        />
      )}
      {isError && (
        <FabllbackView
          icon={<img src={errorIcon} alt="error-icon" />}
          title="카드 목록을 불러올 수 없어요"
          description="잠시 후 다시 시도해 주세요."
          action={{ label: '다시 시도', onClick: () => navigate(0) }}
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

const EmptyCard = styled.div`
  width: 160px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 5px;
  background-color: #f5f5f5;
`;
