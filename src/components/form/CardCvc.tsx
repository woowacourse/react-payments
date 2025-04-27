import React, { Dispatch, SetStateAction, useState } from "react";
import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import { CVC_MAX_LENGTH } from "../../utils/validation";
import isNumberWithinRange from "../../utils/isNumberWithinRange";
import { MESSAGE } from "./constants/error";
import styled from "styled-components";

interface CardCvcProps {
	cvcNumber: string;
	setCvcNumber: Dispatch<SetStateAction<string>>;
}

const CardCvc = React.memo(({ cvcNumber, setCvcNumber }: CardCvcProps) => {
	const [error, setError] = useState("");

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

	return (
		<CardNumberWrap>
			<Title>CVC 번호를 입력해 주세요</Title>
			<InputField label="CVC" errorMessage={error}>
				<Input maxLength={CVC_MAX_LENGTH} isError={!!error} placeholder="123" value={cvcNumber} onChange={(value) => onChange(value)} onBlur={(value) => onBlur(value)} />
			</InputField>
		</CardNumberWrap>
	);
});

export default CardCvc;

const CardNumberWrap = styled.div`
	height: 120px;
`;
