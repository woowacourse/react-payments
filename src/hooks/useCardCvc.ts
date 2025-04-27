import { useState } from "react";
import { CVC_MAX_LENGTH, isNumberWithinRange, isValidateCvc } from "../utils/validation";
import { MESSAGE } from "../components/form/constants/error";

const useCardCvc = () => {
	const [cvcNumber, setCvcNumber] = useState<string>("");
	const [error, setError] = useState<string>("");
	const isComplete = isValidateCvc(cvcNumber);

	const onChange = (value: string) => {
		setCvcNumber(value);

		if (!isNumberWithinRange(value, CVC_MAX_LENGTH)) {
			setError(MESSAGE.INVALID_NUMBER);
			return;
		}

		setError("");
	};

	const onBlur = (value: string) => {
		if (value.length < CVC_MAX_LENGTH) setError(MESSAGE.INPUT_LENGTH_LIMIT(CVC_MAX_LENGTH));
	};

	return { cvcNumber, setCvcNumber, error, setError, isComplete, onChange, onBlur };
};

export default useCardCvc;
