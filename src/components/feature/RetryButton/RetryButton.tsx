import Button from "@components/common/Button";

const RetryButton = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <Button rounded fullWidth onClick={handleClick}>
      다시 시도
    </Button>
  );
};

export default RetryButton;
