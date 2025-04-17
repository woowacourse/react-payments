import styled from "styled-components";
import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
	cvcNumber: string;
	setcvcNumber: Dispatch<SetStateAction<string>>;
};
const CardCvc = ({ cvcNumber, setcvcNumber }: Props) => {
	const [error, setError] = useState("");

	const handleCardCvc = (value: string) => {
		setcvcNumber(value);
		const regex = /^(?:\d{1,3})?$/;

		if (!regex.test(value)) {
			setError("숫자만 입력 가능합니다.");
			return;
		}

		setError("");
	};

	const handleFocusout = (value: string) => {
		if (value.length < 3) setError("3자리를 입력해주세요.");
	};

	const cvcInput = [
		<Input maxLength={3} isError={error.length > 0 && true} placeholder="123" value={cvcNumber} inputHandler={(value) => handleCardCvc(value)} handleFocusout={(value) => handleFocusout(value)} />,
	];

	return (
		<CardNumberWrap>
			<Title>CVC 번호를 입력해 주세요</Title>
			<InputField label="CVC" inputs={cvcInput} errorMessage={error} />
		</CardNumberWrap>
	);
};

export default CardCvc;

const CardNumberWrap = styled.div`
	height: 130px;
`;
