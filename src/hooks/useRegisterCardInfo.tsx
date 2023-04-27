import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CardInfoContext } from "src/context/CardInfoContext";
import { PATHS } from "src/utils/constant";
import { isValidateFormValues } from "src/utils/validation";

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

  return { cardInfo, onSubmit, isValidateInfo };
}

export default useRegisterCardInfo;
