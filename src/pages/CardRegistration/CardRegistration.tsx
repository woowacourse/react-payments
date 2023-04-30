import { useState } from 'react';
import useModal from '../../hooks/useModal';
import BottomSheet from '../../components/BottomSheet';
import CardRegistrationForm from '../../components/CardRegistrationForm';
import BankProfileList from '../../components/BankProfileList';
import type { CardType } from '../../domain/types/card';

type CardRegistrationProps = {
  setPageCardAlias: () => void;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
};

const CardRegistration = ({ setPageCardAlias, setCurrentId }: CardRegistrationProps) => {
  const { isModalOpen, openModal, closeModal } = useModal(true);
  const [cardType, setCardType] = useState<CardType>('우리카드');

  return (
    <>
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
    </>
  );
};

export default CardRegistration;
