import { Dispatch, SetStateAction, useState } from "react";
import { date } from "../../App";
import Description from "../description/Description";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import styled from "styled-components";
import Input from "../input/Input";
import findErrorOrder from "../../utils/findErrorOrder";
import isNumberWithinRange from "../../utils/isNumberWithinRange";

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

	const handleDate = (order: keyof date, value: string) => {
		setExpirationDate({ ...expirationDate, [order]: value });

		if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
			setError({ ...error, [order]: "숫자만 입력 가능합니다." });
			return;
		}

		if (order === "month") {
			const month = Number(value);
			if (month < 0 || month > 12) {
				setError({ ...error, month: "1~12까지의 숫자만 입력 가능합니다." });
				return;
			}
		}

		if (order === "year") {
			const year = Number(value);
			if (year < 25 && year >= 0) {
				setError({ ...error, year: "25년 이상만 입력 가능합니다." });
				return;
			}
		}

		setError({ ...error, [order]: "" });
	};

	const handleFocusout = (order: keyof date, value: string) => {
		if (value.length < INPUT_MAX_LENGTH) setError({ ...error, [order]: "MM형태로 입력해주세요." });
	};

	const expirationInput = Array.from({ length: INPUT_MAX_LENGTH }, (_, index: number) => {
		const orderLabels = ["month", "year"] as const;

		return (
			<Input
				isError={error[orderLabels[index]].length > 0}
				placeholder="MM"
				value={expirationDate[orderLabels[index]]}
				maxLength={INPUT_MAX_LENGTH}
				inputHandler={(numbers) => handleDate(orderLabels[index], numbers)}
				handleFocusout={(numbers) => handleFocusout(orderLabels[index], numbers)}
			/>
		);
	});

	return (
		<CardNumberWrap>
			<Title>카드 유효기간을 입력해 주세요</Title>
			<Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
			<InputField label="유효기간" inputs={expirationInput} errorMessage={findErrorOrder(error)} />
		</CardNumberWrap>
	);
};

export default ExpirationDate;

const CardNumberWrap = styled.div`
	height: 130px;
`;
