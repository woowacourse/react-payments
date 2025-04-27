import React, { Dispatch, SetStateAction, useState } from "react";
import { date } from "../page/CardInfo";
import Description from "../description/Description";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import Input from "../input/Input";
import findErrorOrder from "../../utils/findErrorOrder";
import { EXPIRATION_MAX_LENGTH, isValidMonth, isValidYear } from "../../utils/validation";
import isNumberWithinRange from "../../utils/isNumberWithinRange";
import { MESSAGE } from "./constants/error";
import styled from "styled-components";

interface ExpirationDateProps {
	expirationDate: date;
	setExpirationDate: Dispatch<SetStateAction<date>>;
}

const ExpirationDate = React.memo(({ expirationDate, setExpirationDate }: ExpirationDateProps) => {
	const [error, setError] = useState({
		month: "",
		year: "",
	});

	const CURRENT_YEAR = new Date().getFullYear() % 100;
	const orderLabels = ["month", "year"] as const;
	const placeholderMap = {
		month: "MM",
		year: "YY",
	};

	const updateExpirationDate = (order: keyof date, value: string) => {
		setExpirationDate((prev) => ({ ...prev, [order]: value }));
	};

	const validateInputFormat = (order: keyof date, value: string): boolean => {
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

	const clearError = (order: keyof date) => {
		setError((prev) => ({ ...prev, [order]: "" }));
	};

	const onChange = (order: keyof date, value: string) => {
		updateExpirationDate(order, value);

		if (!validateInputFormat(order, value)) return;

		if (order === "month" && !validateMonthRange(value)) return;

		if (order === "year" && !validateYearRange(value)) return;

		clearError(order);
	};

	const onBlur = (order: keyof date, value: string) => {
		if (value.length < EXPIRATION_MAX_LENGTH) setError({ ...error, [order]: MESSAGE.MONTH_FORMAT });
	};

	return (
		<CardNumberWrap>
			<Title>카드 유효기간을 입력해 주세요</Title>
			<Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
			<InputField label="유효기간" errorMessage={findErrorOrder(error)}>
				{orderLabels.map((label: keyof date) => {
					return (
						<Input
							key={label}
							isError={!!error[label]}
							placeholder={placeholderMap[label]}
							value={expirationDate[label]}
							maxLength={EXPIRATION_MAX_LENGTH}
							onChange={(numbers) => onChange(label, numbers)}
							onBlur={(numbers) => onBlur(label, numbers)}
						/>
					);
				})}
			</InputField>
		</CardNumberWrap>
	);
});

export default ExpirationDate;

const CardNumberWrap = styled.div`
	height: 130px;
`;
