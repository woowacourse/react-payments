import React from "react";
import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import Description from "../description/Description";
import { PASSWORD_MAX_LENGTH } from "../../utils/validation";
import styled from "styled-components";
import useAutoFocus from "../../hooks/useAutoFocus";

interface CardPasswordProps {
	cardPassword: string;
	onChange: (value: string) => void;
	onBlur: (value: string) => void;
	error: string;
}

const INPUT_COUNT = 1;

const CardPassword = React.memo(({ cardPassword, onChange, onBlur, error }: CardPasswordProps) => {
	const { inputRef } = useAutoFocus(INPUT_COUNT, PASSWORD_MAX_LENGTH);

	return (
		<CardNumberWrap>
			<Title>비밀번호를 입력해 주세요</Title>
			<Description>앞의 2자리를 입력해주세요</Description>
			<InputField label="비밀번호 앞 2자리" errorMessage={error}>
				<Input
					ref={inputRef[0]}
					type="password"
					maxLength={PASSWORD_MAX_LENGTH}
					isError={!!error}
					value={cardPassword}
					onChange={(e) => onChange(e.target.value)}
					onBlur={(e) => onBlur(e.target.value)}
				/>
			</InputField>
		</CardNumberWrap>
	);
});

export default CardPassword;

const CardNumberWrap = styled.div`
	height: 130px;
`;
