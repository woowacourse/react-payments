import useNavigateAddNewCardPage from "@/hooks/feature/navigation/useNavigateAddNewCardPage";
import DashedButton from "@components/common/DashedButton";

const AddCardNavigateButton = () => {
  const navigateToAddNewCardPage = useNavigateAddNewCardPage();
  return (
    <DashedButton fullWidth onClick={navigateToAddNewCardPage}>
      + 카드 추가
    </DashedButton>
  );
};

export default AddCardNavigateButton;
