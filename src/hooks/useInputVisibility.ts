import { useState, useEffect } from "react";

interface UseInputVisibilityProps {
  isCardNumberCompleted: boolean;
  isSelectedCardCompleted: boolean;
  isExpiryCompleted: boolean;
  isCardholderNameCompleted: boolean;
  isCardCVCCompleted: boolean;
}

const useInputVisibility = ({
  isCardNumberCompleted,
  isSelectedCardCompleted,
  isExpiryCompleted,
  isCardholderNameCompleted,
  isCardCVCCompleted,
}: UseInputVisibilityProps) => {
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [showExpiryInput, setShowExpiryInput] = useState(false);
  const [showCardOwnerNameInput, setShowCardOwnerNameInput] = useState(false);
  const [showCardCVCInput, setShowCardCVCInput] = useState(false);
  const [showCardPasswordInput, setShowCardPasswordInput] = useState(false);
  const [isOnCVCInput, setIsOnCVCInput] = useState(false);

  useEffect(() => {
    if (isCardNumberCompleted) {
      setShowSelectBox(true);
    }
  }, [isCardNumberCompleted]);

  useEffect(() => {
    if (isSelectedCardCompleted) {
      setShowExpiryInput(true);
    }
  }, [isSelectedCardCompleted]);

  useEffect(() => {
    if (isExpiryCompleted) {
      setShowCardOwnerNameInput(true);
    }
  }, [isExpiryCompleted]);

  useEffect(() => {
    if (isCardholderNameCompleted) {
      setShowCardCVCInput(true);
    }
  }, [isCardholderNameCompleted]);

  useEffect(() => {
    if (isCardCVCCompleted) {
      setShowCardPasswordInput(true);
    }
  }, [isCardCVCCompleted]);

  const handleCVCFocus = () => {
    setIsOnCVCInput(true);
  };

  const handleCVCBlur = () => {
    setIsOnCVCInput(false);
  };

  return {
    showSelectBox,
    showExpiryInput,
    showCardOwnerNameInput,
    showCardCVCInput,
    showCardPasswordInput,
    isOnCVCInput,
    handleCVCFocus,
    handleCVCBlur,
  };
};

export default useInputVisibility;
