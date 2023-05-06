import { useContext } from 'react';

import CardContext from '../../contexts/CardContext';

import * as styled from './CardPreviewSection.styled';
import CardBox from '../CardBox/CardBox';

const CardPreviewSection = ({
  handleModalOpen,
}: {
  handleModalOpen?: () => void;
}) => {
  const {
    serialNumbers,
    expirationDate,
    ownerName,
    securityCode,
    password,
    company,
    nickname,
  } = useContext(CardContext);

  return (
    <styled.CardPreviewSection onClick={handleModalOpen}>
      <CardBox
        card={{
          serialNumbers,
          expirationDate,
          ownerName,
          securityCode,
          password,
          company,
          nickname,
        }}
        backgroundColor={company.backgroundColor}
      />
    </styled.CardPreviewSection>
  );
};

export default CardPreviewSection;
