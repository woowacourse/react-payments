import Button from "@components/common/Button";
import useNavigateCardsPage from "@hooks/feature/navigation/useNavigateCardsPage";

const GoCardsButton = () => {
  const navigateToCardsPage = useNavigateCardsPage();

  return (
    <Button rounded fullWidth onClick={navigateToCardsPage}>
      확인
    </Button>
  );
};

export default GoCardsButton;
