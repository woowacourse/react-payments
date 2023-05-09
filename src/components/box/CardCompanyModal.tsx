import type { CardType } from '../../types';
import styled from 'styled-components';
import PortalDrawer from 'react-portal-drawer';

import { useCardForm } from '../../context/CardFormContext';
import { CARD_COMPANY_OPTION_MATRIX } from '../../constants';

interface Props {
  closeModal: () => void;
}

const CardCompanyModal = ({ closeModal }: Props) => {
  const [{ cardCompany }, dispatch] = useCardForm();

  const onClickCardCompanyItem = (cardCompany: CardType['cardCompany']) => () => {
    dispatch({ type: 'SET_VALUE', key: 'cardCompany', value: cardCompany });
    closeModal();
  };

  return (
    <PortalDrawer selectors="#root" requestClose={cardCompany ? closeModal : undefined}>
      {CARD_COMPANY_OPTION_MATRIX.map((row) => (
        <CardCompanyRow>
          {row.map(({ iconSrc, cardCompany }) => (
            <CardCompanyItem onClick={onClickCardCompanyItem(cardCompany)}>
              <img src={iconSrc} alt={cardCompany} />
              <p>{cardCompany}</p>
            </CardCompanyItem>
          ))}
        </CardCompanyRow>
      ))}
    </PortalDrawer>
  );
};

export default CardCompanyModal;

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
