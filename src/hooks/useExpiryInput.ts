import { useState } from "react";

const useExpiryInput = () => {
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [isExpiryMonthCompleted, setIsExpiryMonthCompleted] = useState(false);
  const [isExpiryYearCompleted, setIsExpiryYearCompleted] = useState(false);

  const handleExpiryMonthChange = (value: string) => {
    const filteredValue = value.replace(/\D/g, "");
    if (filteredValue === "" || parseInt(filteredValue, 10) <= 12) {
      setExpiryMonth(filteredValue);
    }
  };

  const handleExpiryYearChange = (value: string) => {
    const filteredValue = value.replace(/\D/g, "").slice(0, 2);
    setExpiryYear(filteredValue);
  };

  const handleExpiryMonthCompleted = (isCompleted: boolean) => {
    setIsExpiryMonthCompleted(isCompleted);
  };

  const handleExpiryYearCompleted = (isCompleted: boolean) => {
    setIsExpiryYearCompleted(isCompleted);
  };

  return {
    expiryMonth,
    expiryYear,
    isExpiryMonthCompleted,
    isExpiryYearCompleted,
    handleExpiryMonthChange,
    handleExpiryYearChange,
    handleExpiryMonthCompleted,
    handleExpiryYearCompleted,
  };
};

export default useExpiryInput;
