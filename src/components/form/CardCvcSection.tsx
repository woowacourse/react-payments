import styled from "styled-components";
import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import { Dispatch, SetStateAction, useState } from "react";
import isNumberWithinRange from "../../utils/isNumberWithinRange";
import { MESSAGE } from "./constants/error";

const INPUT_MAX_LENGTH = 3;

type Props = {
	cvcNumber: string;
	setcvcNumber: Dispatch<SetStateAction<string>>;
};

const CardCvc = ({ cvcNumber, setcvcNumber }: Props) => {
	const [error, setError] = useState("");

	const handleInput = (value: string) => {
		setcvcNumber(value);

		if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
			setError(MESSAGE.INVALID_NUMBER);
			return;
		}

		setError("");
	};

	const handleFocusout = (value: string) => {
		if (value.length < INPUT_MAX_LENGTH) setError(MESSAGE.INPUT_LENGTH_LIMIT(INPUT_MAX_LENGTH));
	};

	const inputs = [
		<Input maxLength={INPUT_MAX_LENGTH} isError={error.length > 0} placeholder="123" value={cvcNumber} handleInput={(value) => handleInput(value)} handleFocusout={(value) => handleFocusout(value)} />,
	];

	return (
		<CardNumberWrap>
			<Title>CVC 번호를 입력해 주세요</Title>
			<InputField label="CVC" inputs={inputs} errorMessage={error} />
		</CardNumberWrap>
	);
};

export default CardCvc;

const CardNumberWrap = styled.div`
	height: 130px;
`;
