import useCardInfoInputs, { ICardInfoInputsControl } from './useCardInfoInputs';
import useCardInfoCompletionStatus, { ICardInfoCompletionStatus } from './useCardInfoCompletionStatus';

interface IUseCardInfoReturn {
  control: ICardInfoInputsControl;
  completionStatus: ICardInfoCompletionStatus;
}

const useCardInfo = (): IUseCardInfoReturn => {
  const cardInfoControl = useCardInfoInputs();
  const completionStatus = useCardInfoCompletionStatus(cardInfoControl);

  return {
    control: cardInfoControl,
    completionStatus,
  };
};

export default useCardInfo;
