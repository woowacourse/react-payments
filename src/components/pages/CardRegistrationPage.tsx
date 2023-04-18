import styled from 'styled-components';
import Header from '../common/Header';
import { LeftArrowIcon } from '../../assets/icons';
import CardItem from '../common/CardItem';

const CardRegistrationPage = () => {
  return (
    <>
      <Header title='카드추가' leftChild={<LeftArrowIcon />} />
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
