import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';
import { LeftArrowIcon } from '../../assets/icons';
import CardItem from '../common/CardItem';
import CardForm from '../cardForm/CardForm';

const CardRegistrationPage = () => {
  return (
    <>
      <Header
        title='카드추가'
        leftChild={
          <Link to={'/'}>
            <LeftArrowIcon />
          </Link>
        }
      />
      <CardItemContainer>
        <CardItem></CardItem>
      </CardItemContainer>
      <CardForm />
    </>
  );
};

const CardItemContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export default CardRegistrationPage;
