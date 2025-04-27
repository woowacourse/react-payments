import { useState } from "react";
import { isValidateExpirationDate } from "../utils/validation";

export interface ExpirationDate {
	month: string;
	year: string;
}

const useExpirationDate = () => {
	const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
		month: "",
		year: "",
	});
	const [error, setError] = useState({ month: "", year: "" });
	const isComplete = isValidateExpirationDate(expirationDate);

	return { expirationDate, setExpirationDate, error, setError, isComplete };
};

export default useExpirationDate;
