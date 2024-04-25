import useCardInfoInputs from './useCardInfoInputs';
import useCardInfoCompletionStatus from './useCardInfoCompletionStatus';

const useCardInfo = () => {
  const cardInfoControl = useCardInfoInputs();
  const completionStatus = useCardInfoCompletionStatus(cardInfoControl);

  return {
    cardInfoControl,
    completionStatus,
  };
};

export default useCardInfo;
