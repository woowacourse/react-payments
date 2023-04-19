import styled from 'styled-components';
import Header from '../common/Header';
import { LeftArrowIcon } from '../../assets/icons';
import CardItem from '../common/CardItem';
import { Link } from 'react-router-dom';
import CardNumberInput from '../inputs/CardNumberInput';
import ExpirationDateInput from '../inputs/ExpirationDateInput';
import NameInput from '../inputs/NameInput';
import SecurityCodeInput from '../inputs/SecurityCodeInput';
import PasswordInput from '../inputs/PasswordInput';

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
      <FormContainer>
        <CardNumberInput />
        <ExpirationDateInput />
        <NameInput />
        <SecurityCodeInput />
        <PasswordInput />
      </FormContainer>
    </>
  );
};

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
`;

const CardItemContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export default CardRegistrationPage;
