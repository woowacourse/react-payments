import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CardInfoContext } from "src/context/CardInfoContext";
import { PATHS } from "src/utils/constant";
import { isValidateFormValues } from "src/utils/validation";
import useAutoFocus from "./useAutoFocus";

function useRegisterCardInfo() {
  const navigation = useNavigate();

  const [cardInfo] = useContext(CardInfoContext);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigation(PATHS.cardNickName);
  };

  const isValidateInfo = useMemo(
    () => isValidateFormValues(cardInfo),
    [cardInfo],
  );

  const { neighborhoodFocus } = useAutoFocus({});

  const submitKeyDown: React.KeyboardEventHandler<HTMLFormElement> = (
    event,
  ) => {
    const { key, currentTarget, target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    const inputs = [...currentTarget].filter(
      (ele) => ele instanceof HTMLInputElement,
    ) as HTMLInputElement[];

    neighborhoodFocus(inputs, target, key);
  };

  return { cardInfo, onSubmit, isValidateInfo, submitKeyDown };
}

export default useRegisterCardInfo;
