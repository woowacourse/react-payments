import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import Description from "../description/Description";
import { Dispatch, SetStateAction, useState } from "react";
import isNumberWithinRange from "../../utils/isNumberWithinRange";
import { MESSAGE } from "./constants/error";
import styled from "styled-components";

const INPUT_MAX_LENGTH = 2;

type Props = {
	cardPassword: string;
	setCardPassword: Dispatch<SetStateAction<string>>;
};

const CardPassword = ({ cardPassword, setCardPassword }: Props) => {
	const [error, setError] = useState("");

	const onChange = (value: string) => {
		setCardPassword(value);

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
			<Title>비밀번호를 입력해 주세요</Title>
			<Description>앞의 2자리를 입력해주세요</Description>
			<InputField label="비밀번호 앞 2자리" errorMessage={error}>
				<Input type="password" maxLength={INPUT_MAX_LENGTH} isError={!!error} value={cardPassword} onChange={(value) => onChange(value)} onBlur={(value) => onBlur(value)} />
			</InputField>
		</CardNumberWrap>
	);
};

export default CardPassword;

const CardNumberWrap = styled.div`
	height: 130px;
`;
