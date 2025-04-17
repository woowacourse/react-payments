import styled from "styled-components";
import Title from "../title/Title";
import InputField from "../inputField/InputField";
import Input from "../input/Input";
import { Dispatch, SetStateAction, useState } from "react";

const INPUT_MAX_LENGTH = 3;

type Props = {
	cvcNumber: string;
	setcvcNumber: Dispatch<SetStateAction<string>>;
};
const CardCvc = ({ cvcNumber, setcvcNumber }: Props) => {
	const [error, setError] = useState("");

	const handleCardCvc = (value: string) => {
		setcvcNumber(value);
		const regex = new RegExp(`^(?:\\d{1,${INPUT_MAX_LENGTH}})?$`);

		if (!regex.test(value)) {
			setError("숫자만 입력 가능합니다.");
			return;
		}

		setError("");
	};

	const handleFocusout = (value: string) => {
		if (value.length < INPUT_MAX_LENGTH) setError(`${INPUT_MAX_LENGTH}자리를 입력해주세요.`);
	};

	const cvcInput = [
		<Input
			maxLength={INPUT_MAX_LENGTH}
			isError={error.length > 0}
			placeholder="123"
			value={cvcNumber}
			inputHandler={(value) => handleCardCvc(value)}
			handleFocusout={(value) => handleFocusout(value)}
		/>,
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
