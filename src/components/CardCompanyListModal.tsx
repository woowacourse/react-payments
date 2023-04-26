import styled from 'styled-components';
import { CARD_COMPANY } from '../constants/cardCompany';
import type { CardCompanyButtonProps } from './CardCompanyButton';
import { CardCompanyButton } from './CardCompanyButton';
import { Modal } from './common/Modal';

type CardCompanyListModalProps = {
  handleOnClick: (value: CardCompanyButtonProps['cardCompany']) => void;
};

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  padding: 34px 50px;
`;

export const CardCompanyListModal = (props: CardCompanyListModalProps) => {
  const { handleOnClick } = props;
  return (
    <Modal>
      <Contents>
        {CARD_COMPANY.map((cardCompany, index) => (
          <CardCompanyButton
          // eslint-disable-next-line react/no-array-index-key
            key={index}
            handleOnClick={handleOnClick}
            cardCompany={cardCompany}
          />
        ))}
      </Contents>
    </Modal>
  );
};
