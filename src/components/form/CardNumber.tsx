import styled from "styled-components";
import Description from "../description/Description";
import Input from "../input/Input";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import { cardNumber } from "../../App";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
	cardNumber: cardNumber;
	setCardNumber: Dispatch<SetStateAction<cardNumber>>;
};

const CardNumber = ({ cardNumber, setCardNumber }: Props) => {
	const [error, setError] = useState({
		first: "",
		second: "",
		third: "",
		fourth: "",
	});

	const handleCardNumber = (order: keyof cardNumber, value: string) => {
		setCardNumber({ ...cardNumber, [order]: value });

		if (isNaN(Number(value))) {
			setError({ ...error, [order]: "숫자만 입력 가능합니다." });
			return;
		}

		setError({ ...error, [order]: "" });
	};

	const cardNumberInputs = [
		<Input isError={error.first.length > 0 && true} placeholder="1234" value={cardNumber?.first} maxLength={4} inputHandler={(numbers) => handleCardNumber("first", numbers)} />,
		<Input isError={error.second.length > 0 && true} placeholder="1234" value={cardNumber?.second} maxLength={4} inputHandler={(numbers) => handleCardNumber("second", numbers)} />,
		<Input isError={error.third.length > 0 && true} placeholder="1234" value={cardNumber?.third} maxLength={4} inputHandler={(numbers) => handleCardNumber("third", numbers)} />,
		<Input isError={error.fourth.length > 0 && true} placeholder="1234" value={cardNumber?.fourth} maxLength={4} inputHandler={(numbers) => handleCardNumber("fourth", numbers)} />,
	];

	const findError = () => {
		for (const key in error) {
			if (error[key as keyof cardNumber].length > 0) return error[key as keyof cardNumber];
		}

		return "";
	};

	return (
		<CardNumberWrap>
			<Title>결제할 카드 번호를 입력해 주세요</Title>
			<Description>본인 명의의 카드만 결제 가능합니다.</Description>
			<InputField label="카드 번호" inputs={cardNumberInputs} errorMessage={findError()} />
		</CardNumberWrap>
	);
};

export default CardNumber;

const CardNumberWrap = styled.div`
	height: 130px;
`;
