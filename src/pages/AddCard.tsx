import BottomSheet from '../components/BottomSheet/BottomSheet';
import AddCardForm from '../components/AddCardForm/AddCardForm';
import { useCardCompany, useBottomSheet } from '../hooks';

const AddCard = () => {
  const { cardCompany, onSetCardCompany } = useCardCompany();
  const { isBottomSheetOpen, onOpenBottomSheet, onCloseBottomSheet } =
    useBottomSheet();

  return (
    <>
      <AddCardForm
        isBottomSheetOpen={isBottomSheetOpen}
        onOpenBottomSheet={onOpenBottomSheet}
        cardCompany={cardCompany}
      />
      {isBottomSheetOpen && (
        <BottomSheet
          onSetCardCompany={onSetCardCompany}
          closeBottomSheet={onCloseBottomSheet}
        />
      )}
    </>
  );
};

export default AddCard;
