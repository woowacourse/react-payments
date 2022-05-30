import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/Atoms/Button';
import Card from 'components/Molecules/Card';
import CardNumbersInput from 'components/Molecules/CardNumbersInput';
import ExpiredDateInput from 'components/Molecules/ExpiredDateInput';
import OwnerNameInput from 'components/Molecules/OwnerNameInput';
import SecurityNumberInput from 'components/Molecules/SecurityNumberInput';
import PasswordInput from 'components/Molecules/PasswordInput';
import CardCompanySelector from 'components/Molecules/CardCompanySelector';
import Head from 'components/Templates/Head';
import ModalPortal from 'components/Templates/ModalPortal';
import MESSAGE from 'constant/message';
import PATH from 'constant/path';
import { useCardListContext } from 'context/cardList';
import useCardCompany from 'hooks/useCardCompany';
import useCardNumbers from 'hooks/useCardNumbers';
import useExpiredDate from 'hooks/useExpiredDate';
import useOwnerName from 'hooks/useOwnerName';
import useSecurityNumber from 'hooks/useSecurityNumber';
import usePassword from 'hooks/usePassword';
import BackButtonArrow from 'assets/images/backButtonArrow.svg';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeadContainer = styled.div`
  display: flex;
  gap: 18px;
  background-color: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
`;

const BackButton = styled.button`
  background-color: #fff;
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 158px;
  padding-top: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 28px 16px;
  gap: 15px;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

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

  const handleClickBackButton = () => {
    navigate(PATH.CARD_LIST);
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
      navigate(PATH.CARD_ADD_COMPLETION, {
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
            <BackButton type="click" onClick={handleClickBackButton}>
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
