import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCreditCards } from '../hooks/useCreditCards';
import { useResisteringCreditCard } from '../hooks/useResisteringCreditCard';
import { Spinner } from '../svg';
import type { CreditCard } from '../types/CreditCard';
import { CreditCardView } from './CreditCardView';
import { Text } from './common/Text';

type WrapperProps = { isShownOrTransForm: boolean };

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  height: 100%;

  padding: 130px 28px 28px 28px;
`;

const NickNameInput = styled.input`
  width: 75%;

  border: none;
  border-bottom: solid 1.5px #737373;

  font-size: 18px;
  text-align: center;

  margin-top: 120px;
`;

const NextButton = styled.button<WrapperProps>`
  visibility: ${({ isShownOrTransForm }) => (isShownOrTransForm ? 'visible' : 'hidden')};

  align-self: flex-end;
  margin-top: auto;
`;

const IsVisibleExceptCardWrapper = styled.div<WrapperProps>`
  width: 100%;
  text-align: center;

  visibility: ${({ isShownOrTransForm }) => (isShownOrTransForm ? 'visible' : 'hidden')};
  opacity: ${({ isShownOrTransForm }) => (isShownOrTransForm ? 1 : 0)};
  transform: ${({ isShownOrTransForm }) => (isShownOrTransForm ? 'scale(1)' : 'scale(0.5)')};
  transition: all 0.5s ease-in-out;
`;

const IsVisibleCardViewWrapper = styled.div<WrapperProps>`
  width: 100%;

  transform: ${({ isShownOrTransForm }) =>
    isShownOrTransForm ? 'scale(1.5) translateY(25%)' : 'scale(1)'};
  transition: all 0.5s ease-in-out;
`;

const StyledSpinner = styled(Spinner)`
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const CompleteTextTransformWrapper = styled.div`
  transform: translateY(170%);
  animation: slide-in 0.5s ease-in-out;

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(0);
    }
    to {
      opacity: 1;
      transform: translateY(60px);
    }
  }
`;

export const AddNickNamePageContent = () => {
  const { resisteringCreditCard } = useResisteringCreditCard();

  const { addCreditCard } = useCreditCards();

  const [newCard, setNewCard] = useState<CreditCard>(resisteringCreditCard);

  const [isTextShown, setIsTextShown] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCardTransform, setIsCardTransform] = useState<boolean>(false);
  const [isTextTransform, setIsTextTransform] = useState<boolean>(false);
  const [isAddingEnd, setIsAddingEnd] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCard({ ...newCard, nickName: event.target.value });
  };

  const handleClickAddButton = () => {
    addCreditCard(newCard);
    setIsTextShown(false);
    setIsLoading((prevState) => !prevState);

    setTimeout(() => {
      setIsLoading((prevState) => !prevState);
      setIsCardTransform((prevState) => !prevState);
      setIsTextTransform((prevState) => !prevState);
      setIsAddingEnd((prevState) => !prevState);
    }, 2000);
  };

  const handleClickHomeButton = () => {
    navigate('/');
  };

  return (
    <Container>
      <IsVisibleExceptCardWrapper isShownOrTransForm={isTextShown}>
        <Text size="largest" weight="light">
          카드별칭을 지정해주세요
        </Text>
      </IsVisibleExceptCardWrapper>

      <IsVisibleCardViewWrapper isShownOrTransForm={isCardTransform}>
        <CreditCardView
          cardCompany={newCard.cardCompany}
          cardNumbers={newCard.cardNumbers}
          expirationDate={newCard.expirationDate}
          name={newCard.name}
        />
      </IsVisibleCardViewWrapper>
      {isLoading && <StyledSpinner width={50} />}
      {isTextTransform && (
        <CompleteTextTransformWrapper>
          <Text size="largest" weight="light">
            등록을 완료했습니다
          </Text>
        </CompleteTextTransformWrapper>
      )}
      <IsVisibleExceptCardWrapper isShownOrTransForm={isTextShown}>
        <NickNameInput
          onChange={handleChangeInput}
          maxLength={10}
          placeholder="10자 이내로 입력해주세요."
        />
      </IsVisibleExceptCardWrapper>
      {isAddingEnd && (
        <NextButton isShownOrTransForm={isAddingEnd} onClick={handleClickHomeButton}>
          <Text weight="bold">홈으로</Text>
        </NextButton>
      )}
      {newCard.nickName !== '' && (
        <NextButton isShownOrTransForm={isTextShown} onClick={handleClickAddButton}>
          <Text weight="bold">등록</Text>
        </NextButton>
      )}
    </Container>
  );
};
