import { Dispatch, SetStateAction, useState } from "react";
import { date } from "../../App";
import Description from "../description/Description";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import styled from "styled-components";
import Input from "../input/Input";

type Props = {
	expirationDate: date;
	setExpirationDate: Dispatch<SetStateAction<date>>;
};

const ExpirationDate = ({ expirationDate, setExpirationDate }: Props) => {
	const [error, setError] = useState({
		month: "",
		year: "",
	});

	const expirationInput = [
		<Input isError={error.month.length > 0 && true} maxLength={2} placeholder="MM" value={expirationDate.month} inputHandler={(value) => handleDate("month", value)} />,
		<Input isError={error.year.length > 0 && true} maxLength={2} placeholder="YY" value={expirationDate.year} inputHandler={(value) => handleDate("year", value)} />,
	];
	const handleDate = (order: keyof date, value: string) => {
		setExpirationDate({ ...expirationDate, [order]: value });

		if (isNaN(Number(value))) {
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
			if (year < 25 && year > 0) {
				setError({ ...error, year: "25년 이상만 입력 가능합니다." });
				return;
			}
		}

		setError({ ...error, [order]: "" });
	};

	const findError = () => {
		for (const key in error) {
			if (error[key as keyof date].length > 0) return error[key as keyof date];
		}

		return "";
	};

	return (
		<CardNumberWrap>
			<Title>카드 유효기간을 입력해 주세요</Title>
			<Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
			<InputField label="유효기간" inputs={expirationInput} errorMessage={findError()} />
		</CardNumberWrap>
	);
};

export default ExpirationDate;

const CardNumberWrap = styled.div``;
