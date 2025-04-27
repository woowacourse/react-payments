import { useState } from "react";
import isNumberWithinRange from "../utils/isNumberWithinRange";

const useCardPassword = () => {
	const [cardPassword, setCardPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const isComplete = cardPassword.length === 2 && isNumberWithinRange(cardPassword, 2);

	return { cardPassword, setCardPassword, error, setError, isComplete };
};

export default useCardPassword;
