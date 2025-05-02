import { useState } from "react";
import { EXPIRATION_MAX_LENGTH, isNumberWithinRange, isValidFullExpirationDate, isValidMonth, isValidYear } from "../utils/validation";
import { MESSAGE } from "../components/form/constants/error";

export interface ExpirationDateType {
	month: string;
	year: string;
}

const useExpirationDate = () => {
	const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({
		month: "",
		year: "",
	});
	const [error, setError] = useState({ month: "", year: "" });
	const isComplete = isValidFullExpirationDate(expirationDate);
	const CURRENT_YEAR = new Date().getFullYear() % 100;

	const updateExpirationDate = (order: keyof ExpirationDateType, value: string) => {
		setExpirationDate((prev) => ({ ...prev, [order]: value }));
	};

	const validateInputFormat = (order: keyof ExpirationDateType, value: string): boolean => {
		if (!isNumberWithinRange(value, EXPIRATION_MAX_LENGTH)) {
			setError((prev) => ({ ...prev, [order]: MESSAGE.INVALID_NUMBER }));
			return false;
		}
		return true;
	};

	const validateMonthRange = (value: string): boolean => {
		if (!isValidMonth(value)) {
			setError((prev) => ({ ...prev, month: MESSAGE.MONTH_RANGE }));
			return false;
		}
		return true;
	};

	const validateYearRange = (value: string): boolean => {
		if (!isValidYear(value)) {
			setError((prev) => ({ ...prev, year: MESSAGE.YEAR_RANGE(CURRENT_YEAR) }));
			return false;
		}
		return true;
	};

	const clearError = (order: keyof ExpirationDateType) => {
		setError((prev) => ({ ...prev, [order]: "" }));
	};

	const onChange = (order: keyof ExpirationDateType, value: string) => {
		updateExpirationDate(order, value);

		if (!validateInputFormat(order, value)) return;

		if (order === "month" && !validateMonthRange(value)) return;

		if (order === "year" && !validateYearRange(value)) return;

		clearError(order);
	};

	const onBlur = (order: keyof ExpirationDateType, value: string) => {
		if (value.length < EXPIRATION_MAX_LENGTH) setError({ ...error, [order]: MESSAGE.MONTH_FORMAT });
	};

	return { expirationDate, error, isComplete, onChange, onBlur };
};

export default useExpirationDate;
