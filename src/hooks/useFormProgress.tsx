import { useEffect, useState } from "react";

const useFormProgress = ({
  isValidatedArr,
}: {
  isValidatedArr: boolean[];
  isNameEntered: boolean;
}) => {
  const [formProgress, setFormProgress] = useState(1);
  const progressCompleted = isValidatedArr.every(
    (isCompleted) => isCompleted === true
  );

  useEffect(() => {
    if (
      isValidatedArr[formProgress - 1] &&
      formProgress <= isValidatedArr.length
    ) {
      setFormProgress((prev) => prev + 1);
    }
  }, [formProgress, isValidatedArr]);

  return { progressCompleted, formProgress };
};

export default useFormProgress;
