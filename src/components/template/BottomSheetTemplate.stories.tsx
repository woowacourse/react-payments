import BottomSheetTemplate from './BottomSheetTemplate';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'BottomSheetTemplate',
  component: BottomSheetTemplate,
};

export const BankSelectBottomSheet = () => {
  return (
    <BottomSheetTemplate onClose={() => {}} modalState={true}>
      <BankSelectBottomSheet />
    </BottomSheetTemplate>
  );
};
