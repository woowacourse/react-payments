import styled from 'styled-components';
import Header from '../common/Header';
import { LeftArrowIcon } from '../../assets/icons';
import CardItem from '../common/CardItem';
import { Link } from 'react-router-dom';

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
      <FormContainer></FormContainer>
    </>
  );
};

const FormContainer = styled.section`
  padding: 28px;
`;

const CardItemContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export default CardRegistrationPage;
