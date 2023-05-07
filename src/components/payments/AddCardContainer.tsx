import { useContext, useState } from 'react';
import styled from 'styled-components';
import CardPreview from './CardPreview';
import CardCompanyModal from './CardCompanyModal';
import useModal from '../../hooks/useModal';
import ErrorMessage from '../common/ErrorMessage';
import { CardCompany } from '../../@types';
import AddCardForm from './AddCardForm';
import { CardInformationContext } from '../../context/CardInformationContext';
import { getUniqueID } from '../../utils/key';
import { useNavigate } from 'react-router-dom';
import { useCardDispatch } from '../../context/CardListContext';
import useAddCardFormValidation from '../../hooks/useAddCardFormValidation';
import { PAGE_PATH } from '../../constants';
import AddCardSpinner from './AddCardSpinner';

const AddCardContainer = () => {
  const navigate = useNavigate();
  const setCard = useCardDispatch();
  const { cardInformation, CardInformationActions } = useContext(CardInformationContext);
  const { isModalOpen, openModal, closeModal } = useModal(true);
  const { error, validateCardCompany, validateExpirationDate } = useAddCardFormValidation();
  const { cardCompany, cardOwner, cardNumbers, cardExpirationDate } = cardInformation;
  const [loading, setLoading] = useState(false);

  const onClickLogo = (cardCompanyName: CardCompany) => {
    CardInformationActions.setCardCompany(cardCompanyName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const cardID = getUniqueID();

    if (validateExpirationDate(cardExpirationDate) || validateCardCompany(cardCompany)) return;

    setCard((prev) => [...prev, { ...cardInformation, id: cardID }]);

    setTimeout(() => {
      setLoading(false);
      navigate(PAGE_PATH.ADD_CARD_NAME, { state: { cardID } });
    }, 3000);
  };

  return (
    <AddCardContainerWrapper>
      {loading ? (
        <AddCardSpinner />
      ) : (
        <>
          <CardCompanyButton onClick={openModal}>
            <CardPreview
              cardCompany={cardCompany}
              cardNumbers={cardNumbers}
              cardOwner={cardOwner}
              cardExpirationDate={cardExpirationDate}
            />
          </CardCompanyButton>
          {error.cardCompany && <ErrorMessage message="카드사를 선택해주세요." />}
          <AddCardForm expirationError={error.cardExpirationDate} onSubmit={handleSubmit} />
          <CardCompanyModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            onClickLogo={onClickLogo}
          />
        </>
      )}
    </AddCardContainerWrapper>
  );
};

const CardCompanyButton = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  text-align: left;

  transform: scale(1);
  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.03);
    transition-duration: 0.2s;
  }
`;

const AddCardContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 0 40px;
`;

export default AddCardContainer;
