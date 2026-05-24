import Button from "@components/common/Button";
import DashedButton from "@components/common/DashedButton";
import SwitchCase from "@components/common/SwitchCase";
import useNavigateAddNewCardPage from "@hooks/feature/navigation/useNavigateAddNewCardPage";

interface AddCardNavigateButtonProps {
  buttonType?: "default" | "dashed";
}

const AddCardNavigateButton = ({
  buttonType = "default",
}: AddCardNavigateButtonProps) => {
  const navigateToAddNewCardPage = useNavigateAddNewCardPage();
  return (
    <SwitchCase
      value={buttonType}
      caseBy={[
        {
          case: "dashed",
          component: (
            <DashedButton fullWidth onClick={navigateToAddNewCardPage}>
              + 카드 추가
            </DashedButton>
          ),
        },
        {
          case: "default",
          component: (
            <Button fullWidth onClick={navigateToAddNewCardPage}>
              + 카드 추가
            </Button>
          ),
        },
      ]}
      defaultCase={
        <Button fullWidth onClick={navigateToAddNewCardPage}>
          + 카드 추가
        </Button>
      }
    />
  );
};

export default AddCardNavigateButton;
