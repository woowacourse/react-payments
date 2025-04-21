import { Dispatch, SetStateAction, useState } from "react";
import { date } from "../../App";
import Description from "../description/Description";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import Input from "../input/Input";
import findErrorOrder from "../../utils/findErrorOrder";
import isNumberWithinRange from "../../utils/isNumberWithinRange";
import { MESSAGE } from "./constants/error";
import styled from "styled-components";

const INPUT_MAX_LENGTH = 2;

type Props = {
	expirationDate: date;
	setExpirationDate: Dispatch<SetStateAction<date>>;
};

const ExpirationDate = ({ expirationDate, setExpirationDate }: Props) => {
	const [error, setError] = useState({
		month: "",
		year: "",
	});

	const nowYear = new Date().getFullYear() % 100;

	const onChange = (order: keyof date, value: string) => {
		setExpirationDate({ ...expirationDate, [order]: value });

		if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
			setError({ ...error, [order]: MESSAGE.INVALID_NUMBER });
			return;
		}

		if (order === "month") {
			const month = Number(value);
			if (month < 0 || month > 12) {
				setError({ ...error, month: MESSAGE.MONTH_RANGE });
				return;
			}
		}

		if (order === "year") {
			const year = Number(value);
			if (year < nowYear && year >= 0) {
				setError({ ...error, year: MESSAGE.YEAR_RANGE(nowYear) });
				return;
			}
		}

		setError({ ...error, [order]: "" });
	};

	const onBlur = (order: keyof date, value: string) => {
		if (value.length < INPUT_MAX_LENGTH) setError({ ...error, [order]: MESSAGE.MONTH_FORMAT });
	};

	const inputs = Array.from({ length: INPUT_MAX_LENGTH }, (_, index: number) => {
		const orderLabels = ["month", "year"] as const;
		const placeholderMap = {
			month: "MM",
			year: "YY",
		};

		return (
			<Input
				isError={!!error[orderLabels[index]]}
				placeholder={placeholderMap[orderLabels[index]]}
				value={expirationDate[orderLabels[index]]}
				maxLength={INPUT_MAX_LENGTH}
				onChange={(numbers) => onChange(orderLabels[index], numbers)}
				onBlur={(numbers) => onBlur(orderLabels[index], numbers)}
			/>
		);
	});

	return (
		<CardNumberWrap>
			<Title>카드 유효기간을 입력해 주세요</Title>
			<Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
			<InputField label="유효기간" inputs={inputs} errorMessage={findErrorOrder(error)} />
		</CardNumberWrap>
	);
};

export default ExpirationDate;

const CardNumberWrap = styled.div`
	height: 130px;
`;
