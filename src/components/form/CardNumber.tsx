import React, { Dispatch, SetStateAction, useState } from "react";
import Description from "../description/Description";
import Input from "../input/Input";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import findErrorOrder from "../../utils/findErrorOrder";
import { cardNumber } from "../page/CardInfo";
import isNumberWithinRange from "../../utils/isNumberWithinRange";
import { CARD_MAX_LENGTH } from "../../utils/validation";
import { MESSAGE } from "./constants/error";
import styled from "styled-components";

type CardNumberProps = {
	cardNumber: cardNumber;
	setCardNumber: Dispatch<SetStateAction<cardNumber>>;
};

const CardNumber = React.memo(({ cardNumber, setCardNumber }: CardNumberProps) => {
	const [error, setError] = useState({
		first: "",
		second: "",
		third: "",
		fourth: "",
	});
	const orderLabels = ["first", "second", "third", "fourth"] as const;

	const onChange = (order: keyof cardNumber, value: string) => {
		setCardNumber({ ...cardNumber, [order]: value });

		if (!isNumberWithinRange(value, CARD_MAX_LENGTH)) {
			setError({ ...error, [order]: MESSAGE.INVALID_NUMBER });
			return;
		}

		setError({ ...error, [order]: "" });
	};

	const onBlur = (order: keyof cardNumber, value: string) => {
		if (value.length < CARD_MAX_LENGTH) setError({ ...error, [order]: MESSAGE.INPUT_LENGTH_LIMIT(CARD_MAX_LENGTH) });
	};

	return (
		<CardNumberWrap>
			<Title>결제할 카드 번호를 입력해 주세요</Title>
			<Description>본인 명의의 카드만 결제 가능합니다.</Description>
			<InputField label="카드 번호" errorMessage={findErrorOrder(error)}>
				{orderLabels.map((label: keyof cardNumber) => (
					<Input
						key={label}
						isError={!!error[label]}
						placeholder="1234"
						value={cardNumber[label]}
						maxLength={CARD_MAX_LENGTH}
						onChange={(numbers) => onChange(label, numbers)}
						onBlur={(numbers) => onBlur(label, numbers)}
					/>
				))}
			</InputField>
		</CardNumberWrap>
	);
});

export default CardNumber;

const CardNumberWrap = styled.div`
	height: 130px;
`;
