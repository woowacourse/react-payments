import { S } from "./style";

const ProgressBar = ({
  currentStep,
  fullStep,
}: {
  currentStep: number;
  fullStep: number;
}) => {
  const progressRatio = (currentStep / fullStep) * 100;
  return (
    <>
      <S.BarWrapper></S.BarWrapper>
      <S.ProgressBarLine widthPercent={progressRatio} />
    </>
  );
};

export default ProgressBar;
