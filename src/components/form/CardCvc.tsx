import React from "react";
import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import { CVC_MAX_LENGTH } from "../../utils/validation";
import useAutoFocus from "../../hooks/useAutoFocus";
import styled from "styled-components";

interface CardCvcProps {
	cvcNumber: string;
	onChange: (value: string) => void;
	onBlur: (value: string) => void;
	error: string;
}

const INPUT_COUNT = 1;

const CardCvc = React.memo(({ cvcNumber, onChange, onBlur, error }: CardCvcProps) => {
	const { inputRef } = useAutoFocus(INPUT_COUNT, CVC_MAX_LENGTH);

	return (
		<CardNumberWrap>
			<Title>CVC 번호를 입력해 주세요</Title>
			<InputField label="CVC" errorMessage={error}>
				<Input ref={inputRef[0]} maxLength={CVC_MAX_LENGTH} isError={!!error} placeholder="123" value={cvcNumber} onChange={(e) => onChange(e.target.value)} onBlur={(e) => onBlur(e.target.value)} />
			</InputField>
		</CardNumberWrap>
	);
});

export default CardCvc;

const CardNumberWrap = styled.div`
	height: 120px;
`;
