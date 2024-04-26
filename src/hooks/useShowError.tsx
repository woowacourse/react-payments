import { useState } from "react";

const useShowError = (errors: string[] | null) => {
  const [showErrors, setShowErrors] = useState(false);

  const onBlurShowErrors = () => {
    setShowErrors(true);
  };

  const onFocusHideErrors = () => {
    if (Array.isArray(errors) && errors.length > 0) {
      setShowErrors(true);
    } else {
      setShowErrors(false);
    }
  };

  return { showErrors, onBlurShowErrors, onFocusHideErrors };
};

export default useShowError;
