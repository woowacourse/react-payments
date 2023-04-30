import { useState } from 'react';
import useModal from '../../hooks/useModal';
import BottomSheet from '../../components/BottomSheet';
import CardRegistrationForm from '../../components/CardRegistrationForm';
import type { CardType } from '../../domain/types/card';
import Header from '../../components/Header';
import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import styled from 'styled-components';
import BankProfileList from '../../components/BankProfileList';

type CardRegistrationProps = {
  setPageCardAlias: () => void;
  setPageCardList: () => void;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
};

const CardRegistration = ({ setPageCardAlias, setPageCardList, setCurrentId }: CardRegistrationProps) => {
  const { isModalOpen, openModal, closeModal } = useModal(true);
  const [cardType, setCardType] = useState<CardType>('우리카드');

  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper>
        <ChevronLeft width="16px" height="16px" cursor="pointer" onClick={setPageCardList} />
        <Header title="카드 추가" />
      </Styled.HeaderWrapper>
      <CardRegistrationForm
        setPageCardAlias={setPageCardAlias}
        setCurrentId={setCurrentId}
        cardType={cardType}
        openModal={openModal}
      />
      {isModalOpen && (
        <BottomSheet closeModal={closeModal}>
          <BankProfileList closeModal={closeModal} setCardType={setCardType} />
        </BottomSheet>
      )}
    </Styled.Wrapper>
  );
};

export default CardRegistration;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Styled = {
  Wrapper,
  HeaderWrapper,
};
