import { useState } from "react";
import { isNumberWithinRange, PASSWORD_MAX_LENGTH } from "../utils/validation";
import { MESSAGE } from "../components/form/constants/error";

const useCardPassword = () => {
	const [cardPassword, setCardPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const isComplete = cardPassword.length === 2 && isNumberWithinRange(cardPassword, 2);

	const onChange = (value: string) => {
		setCardPassword(value);

		if (!isNumberWithinRange(value, PASSWORD_MAX_LENGTH)) {
			setError(MESSAGE.INVALID_NUMBER);
			return;
		}

		setError("");
	};

	const onBlur = (value: string) => {
		if (value.length < PASSWORD_MAX_LENGTH) setError(MESSAGE.INPUT_LENGTH_LIMIT(PASSWORD_MAX_LENGTH));
	};

	return { cardPassword, setCardPassword, error, setError, isComplete, onChange, onBlur };
};

export default useCardPassword;
