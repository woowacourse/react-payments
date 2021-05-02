import { Header } from '../../components/commons/header/Header';
import { Button } from '../../components/commons/button/Button';
import { Card } from '../../components/commons/card/Card';
import Styled from './style';
import { Link } from 'react-router-dom';

const CardListPage = () => {
  return (
    <>
      <Header>보유카드</Header>
      <Styled.Container>
        <Link to="/create">
          <Button>
            <Card boxShadow="none">+</Card>
          </Button>
        </Link>
      </Styled.Container>
    </>
  );
};

export default CardListPage;
