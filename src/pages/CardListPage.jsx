import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cards from '../components/Cards';

const StyledPage = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 30px;
  width: 400px;
  min-height: 757px;
`;

const Title = styled.h2`
  color: #383838;
  font-size: 18px;
  font-weight: normal;
  margin: 0 0 65px 10px;
`;

const PlusCard = styled.div`
  background: #e5e5e5;
  border-radius: 5px;
  color: #575757;
  cursor: pointer;
  font-size: 40px;
  height: 133px;
  line-height: 133px;
  margin: auto;
  margin-bottom: 85px;
  padding: 19px;
  text-align: center;
  width: 213px;
`;

function CardListPage() {
  const navigate = useNavigate();

  return (
    <StyledPage>
      <Title>보유카드</Title>
      <Cards />
      <PlusCard
        onClick={() => {
          navigate('/add');
        }}
      >
        +
      </PlusCard>
    </StyledPage>
  );
}

export default memo(CardListPage);
