import { useNavigate } from 'react-router-dom';
import Head from '../../components/Head';
import Card from '../../components/Card';
import CardNumbersInput from '../../components/CardNumbersInput';
import ExpiredDateInput from '../../components/ExpiredDateInput';
import OwnerNameInput from '../../components/OwnerNameInput';
import SecurityNumberInput from '../../components/SecurityNumberInput';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import ModalPortal from '../../components/ModalPortal';
import CardCompanySelector from '../../components/CardCompanySelector';
import { Page, HeadContainer, BackButton, CardSection, Form, SubmitButtonContainer } from './style';
import MESSAGE from '../../constant/message';
import { useCardListContext } from 'context/cardList';
import useCardCompany from '../../hooks/useCardCompany';
import useCardNumbers from '../../hooks/useCardNumbers';
import useExpiredDate from '../../hooks/useExpiredDate';
import useOwnerName from '../../hooks/useOwnerName';
import useSecurityNumber from '../../hooks/useSecurityNumber';
import usePassword from '../../hooks/usePassword';
import BackButtonArrow from 'assets/images/backButtonArrow.svg';

function CardAddPage({ isOpenModal, openModal }) {
  const navigate = useNavigate();
  const { addCard } = useCardListContext();

  const { cardCompany, handleClickCardCompany } = useCardCompany();
  const { cardNumbers, isValidCardNumbers, handleChangeCardNumbersInput } = useCardNumbers();
  const { expiredDate, isValidExpiredDate, handleChangeExpiredDateInput } = useExpiredDate();
  const { ownerName, isValidOwnerName, handleChangeOwnerNameInput } = useOwnerName();
  const { securityNumber, isValidSecurityNumber, handleChangeSecurityNumber } = useSecurityNumber();
  const { password, isValidPassword, handleChangePassword } = usePassword();

  const isAllValidInput = () => {
    return (
      isValidCardNumbers &&
      isValidExpiredDate &&
      isValidOwnerName &&
      isValidSecurityNumber &&
      isValidPassword
    );
  };

  const handleClickCard = () => {
    openModal();
  };

  const handleSubmit = event => {
    event.preventDefault();

    const cardInfo = {
      alias: '',
      cardCompany,
      cardNumbers,
      expiredDate,
      ownerName,
      securityNumber,
      password,
    };

    if (isAllValidInput()) {
      const cardId = addCard(cardInfo);
      navigate('/cardAddCompletion', {
        state: {
          cardId,
        },
      });
    }
  };

  return (
    <Page>
      <Head
        leftComponent={
          <HeadContainer>
            <BackButton type="click">
              <img src={BackButtonArrow} />
            </BackButton>
            <span>카드 추가</span>
          </HeadContainer>
        }
      />
      <CardSection>
        <Card
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
          expiredDate={expiredDate}
          ownerName={ownerName}
          handleClickCard={handleClickCard}
        />
      </CardSection>
      <Form onSubmit={handleSubmit}>
        <CardNumbersInput
          cardNumbers={cardNumbers}
          handleInputChange={handleChangeCardNumbersInput}
          isValid={isValidCardNumbers}
          invalidMessage={MESSAGE.INVALID_CARD_NUMBER}
        />
        <ExpiredDateInput
          expiredDate={expiredDate}
          handleInputChange={handleChangeExpiredDateInput}
          isValid={isValidExpiredDate}
          invalidMessage={MESSAGE.INVALID_EXPIRED_DATE}
          width="137px"
        />
        <OwnerNameInput
          ownerName={ownerName}
          handleInputChange={handleChangeOwnerNameInput}
          isValid={isValidOwnerName}
          invalidMessage={MESSAGE.INVALID_OWNER_NAME}
        />
        <SecurityNumberInput
          securityNumber={securityNumber}
          handleInputChange={handleChangeSecurityNumber}
          isValid={isValidSecurityNumber}
          invalidMessage={MESSAGE.INVALID_SECURITY_NUMBER}
        />
        <PasswordInput
          password={password}
          handleInputChange={handleChangePassword}
          isValid={isValidPassword}
          invalidMessage={MESSAGE.INVALID_PASSWORD}
        />
        <SubmitButtonContainer>
          <Button type="submit" hidden={!isAllValidInput()}>
            다음
          </Button>
        </SubmitButtonContainer>
      </Form>
      <ModalPortal isOpenModal={isOpenModal}>
        <CardCompanySelector handleClickCardCompany={handleClickCardCompany} />
      </ModalPortal>
    </Page>
  );
}

export default CardAddPage;
