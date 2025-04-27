import { useState } from "react";
import { isValidateCvc } from "../utils/validation";

const useCardCvc = () => {
	const [cvcNumber, setCvcNumber] = useState<string>("");
	const [error, setError] = useState<string>("");
	const isComplete = isValidateCvc(cvcNumber);

	return { cvcNumber, setCvcNumber, error, setError, isComplete };
};

export default useCardCvc;
