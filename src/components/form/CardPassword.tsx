import React from "react";
import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import Description from "../description/Description";
import { PASSWORD_MAX_LENGTH } from "../../utils/validation";
import styled from "styled-components";

interface CardPasswordProps {
	cardPassword: string;
	onChange: (value: string) => void;
	onBlur: (value: string) => void;
	error: string;
}

const CardPassword = React.memo(({ cardPassword, onChange, onBlur, error }: CardPasswordProps) => {
	return (
		<CardNumberWrap>
			<Title>비밀번호를 입력해 주세요</Title>
			<Description>앞의 2자리를 입력해주세요</Description>
			<InputField label="비밀번호 앞 2자리" errorMessage={error}>
				<Input type="password" maxLength={PASSWORD_MAX_LENGTH} isError={!!error} value={cardPassword} onChange={(value) => onChange(value)} onBlur={(value) => onBlur(value)} />
			</InputField>
		</CardNumberWrap>
	);
});

export default CardPassword;

const CardNumberWrap = styled.div`
	height: 130px;
`;
