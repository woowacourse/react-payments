import styled from "styled-components";
import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import React, { Dispatch, SetStateAction, useState } from "react";
import isNumberWithinRange from "../../utils/isNumberWithinRange";
import { MESSAGE } from "./constants/error";

const INPUT_MAX_LENGTH = 3;

interface CardCvcProps {
	cvcNumber: string;
	setCvcNumber: Dispatch<SetStateAction<string>>;
}

const CardCvc = React.memo(({ cvcNumber, setCvcNumber }: CardCvcProps) => {
	const [error, setError] = useState("");

	const onChange = (value: string) => {
		setCvcNumber(value);

		if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
			setError(MESSAGE.INVALID_NUMBER);
			return;
		}

		setError("");
	};

	const onBlur = (value: string) => {
		if (value.length < INPUT_MAX_LENGTH) setError(MESSAGE.INPUT_LENGTH_LIMIT(INPUT_MAX_LENGTH));
	};

	return (
		<CardNumberWrap>
			<Title>CVC 번호를 입력해 주세요</Title>
			<InputField label="CVC" errorMessage={error}>
				<Input maxLength={INPUT_MAX_LENGTH} isError={!!error} placeholder="123" value={cvcNumber} onChange={(value) => onChange(value)} onBlur={(value) => onBlur(value)} />
			</InputField>
		</CardNumberWrap>
	);
});

export default CardCvc;

const CardNumberWrap = styled.div`
	height: 120px;
`;
