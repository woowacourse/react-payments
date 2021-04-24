import { Header } from '../../components/commons/header/Header';
import { Button } from '../../components/commons/button/Button';
import { Card } from '../../components/commons/card/Card';
import Styled from './style';
import { PAGE } from '../../constants/page';

const CardListPage = ({ setCurrentPage }) => {
  return (
    <>
      <Header>보유카드</Header>
      <Styled.Container>
        <Button onClick={() => setCurrentPage(PAGE.CARD_CREATION)}>
          <Card boxShadow="none">+</Card>
        </Button>
      </Styled.Container>
    </>
  );
};

export default CardListPage;
