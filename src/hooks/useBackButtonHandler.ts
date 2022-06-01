import { useNavigate } from "react-router-dom";
import { BACK_BUTTON_CONFIRM_MESSAGE, ROUTES } from "../constants/constants";
import { setInitialState } from "../reducer/cardReducer";

export default function useBackButtonHandler(dispatch: React.Dispatch<any>) {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    if (window.confirm(BACK_BUTTON_CONFIRM_MESSAGE)) {
      navigate(ROUTES.HOME, { replace: true });
      dispatch(setInitialState());
    }
  };

  return { handleBackButtonClick };
}
