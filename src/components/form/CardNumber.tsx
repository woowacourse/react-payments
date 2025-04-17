import styled from "styled-components";
import Description from "../description/Description";
import Input from "../input/Input";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import { cardNumber } from "../../App";
import { Dispatch, SetStateAction, useState } from "react";
import findErrorOrder from "../../utils/findErrorOrder";
import isNumberWithinRange from "../../utils/isNumberWithinRange";

const INPUT_MAX_LENGTH = 4;

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

		if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
			setError({ ...error, [order]: "숫자만 입력 가능합니다." });
			return;
		}

		setError({ ...error, [order]: "" });
	};

	const handleFocusout = (order: keyof cardNumber, value: string) => {
		if (value.length < INPUT_MAX_LENGTH) setError({ ...error, [order]: `${INPUT_MAX_LENGTH}자리를 입력해주세요.` });
	};

	const cardNumberInputs = Array.from({ length: INPUT_MAX_LENGTH }, (_, index: number) => {
		const orderLabels = ["first", "second", "third", "fourth"] as const;

		return (
			<Input
				isError={error[orderLabels[index]].length > 0}
				placeholder="1234"
				value={cardNumber[orderLabels[index]]}
				maxLength={INPUT_MAX_LENGTH}
				inputHandler={(numbers) => handleCardNumber(orderLabels[index], numbers)}
				handleFocusout={(numbers) => handleFocusout(orderLabels[index], numbers)}
			/>
		);
	});

	return (
		<CardNumberWrap>
			<Title>결제할 카드 번호를 입력해 주세요</Title>
			<Description>본인 명의의 카드만 결제 가능합니다.</Description>
			<InputField label="카드 번호" inputs={cardNumberInputs} errorMessage={findErrorOrder(error)} />
		</CardNumberWrap>
	);
};

export default CardNumber;

const CardNumberWrap = styled.div`
	height: 130px;
`;
