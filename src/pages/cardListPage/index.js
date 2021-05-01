import PropTypes from 'prop-types';
import { Header } from '../../components/commons/header/Header';
import { Button } from '../../components/commons/button/Button';
import { Card } from '../../components/commons/card/Card';
import Styled from './style';
import { PAGE } from '../../constants/page';

const CardListPage = ({ setCurrentPage, ...props }) => {
  console.log(setCurrentPage, props);
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

CardListPage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default CardListPage;
