import type { CardType } from '../../types';
import styled from 'styled-components';

import { useCardForm } from '../../context/cardForm';
import { CARD_COMPANY_MODAL_MATRIX } from '../../constants';

interface Props {
  closeModal: () => void;
}

const CardCompanyModal = ({ closeModal }: Props) => {
  const [, dispatch] = useCardForm();

  const onClickCardCompanyItem = (cardCompany: CardType['cardCompany']) => () => {
    dispatch({ type: 'SET_VALUE', key: 'cardCompany', value: cardCompany });
    closeModal();
  };

  return (
    <>
      <ModalBackdrop />
      <ModalWrapper>
        {CARD_COMPANY_MODAL_MATRIX.map((row) => (
          <CardCompanyRow>
            {row.map(({ iconSrc, cardCompany }) => (
              <CardCompanyItem onClick={onClickCardCompanyItem(cardCompany)}>
                <img src={iconSrc} alt={cardCompany} />
                <p>{cardCompany}</p>
              </CardCompanyItem>
            ))}
          </CardCompanyRow>
        ))}
      </ModalWrapper>
    </>
  );
};

export default CardCompanyModal;

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: auto;
  border-radius: 6px 6px 0px 0px;
  padding: 34px 48px;

  background: white;
`;

const CardCompanyRow = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 26px;
  }
`;

const CardCompanyItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 54px;
  height: 70px;

  cursor: pointer;

  img {
    width: 38px;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: #525252;
  }
`;
