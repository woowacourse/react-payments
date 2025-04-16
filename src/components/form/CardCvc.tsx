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
	const cvcInput = [<Input isError={error.length > 0 && true} placeholder="123" value={cvcNumber} inputHandler={(value) => handleCardCvc(value)} />];

	const handleCardCvc = (value: string) => {
		setcvcNumber(value);

		if (isNaN(Number(value))) {
			setError("숫자만 입력 가능합니다.");
			return;
		}

		setError("");
	};

	return (
		<CardNumberWrap>
			<Title>CVC 번호를 입력해 주세요</Title>
			<InputField label="CVC" inputs={cvcInput} errorMessage={error} />
		</CardNumberWrap>
	);
};

export default CardCvc;

const CardNumberWrap = styled.div``;
