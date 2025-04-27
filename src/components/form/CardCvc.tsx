import React from "react";
import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import { CVC_MAX_LENGTH } from "../../utils/validation";
import styled from "styled-components";

interface CardCvcProps {
	cvcNumber: string;
	onChange: (value: string) => void;
	onBlur: (value: string) => void;
	error: string;
	// setCvcNumber: Dispatch<SetStateAction<string>>;
}

const CardCvc = React.memo(({ cvcNumber, onChange, onBlur, error }: CardCvcProps) => {
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
