import { useState } from "react";

const useShowError = () => {
  const [showErrors, setShowErrors] = useState(false);

  const onBlurShowErrors = () => {
    setShowErrors(true);
  };

  const onFocusHideErrors = () => {
    setShowErrors(false);
  };

  return { showErrors, onBlurShowErrors, onFocusHideErrors };
};

export default useShowError;
