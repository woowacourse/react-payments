import { useState } from 'react';
import useModal from '../../hooks/useModal';
import BottomSheet from '../../components/BottomSheet';
import CardRegistrationForm from '../../components/CardRegistrationForm';
import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import BankProfileList from '../../components/BankProfileList';
import Layout from '../../components/Layout/Layout';
import type { CardType } from '../../domain/types/card';

type CardRegistrationProps = {
  setPageCardAlias: () => void;
  setPageCardList: () => void;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
};

const CardRegistration = ({ setPageCardAlias, setPageCardList, setCurrentId }: CardRegistrationProps) => {
  const { isModalOpen, openModal, closeModal } = useModal({ defaultVisible: true });
  const [cardType, setCardType] = useState<CardType>('우리카드');

  return (
    <Layout
      title="카드 추가"
      leftButton={<ChevronLeft width="16px" height="16px" cursor="pointer" onClick={setPageCardList} />}
    >
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
    </Layout>
  );
};

export default CardRegistration;
