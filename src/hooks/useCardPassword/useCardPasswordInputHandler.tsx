export default function useCardPasswordInputHandler(
  handleChange: (value: string) => void,
  onComplete: () => void
) {
  const handleCardPasswordChange = (value: string) => {
    handleChange(value);

    if (value.length === 2) {
      onComplete();
      console.log("finished");
    }
  };

  return {
    handleCardPasswordChange,
  };
}
