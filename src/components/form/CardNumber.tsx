import React from "react";
import Description from "../description/Description";
import Input from "../input/Input";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import findErrorOrder from "../../utils/findErrorOrder";
import { CardNumberType } from "../../hooks/useCardNumber";
import { CARD_MAX_LENGTH } from "../../utils/validation";
import styled from "styled-components";

interface CardNumberProps {
	cardNumber: CardNumberType;
	onChange: (order: keyof CardNumberType, value: string) => void;
	onBlur: (order: keyof CardNumberType, value: string) => void;
	error: CardNumberType;
}

const CardNumber = React.memo(({ cardNumber, onChange, onBlur, error }: CardNumberProps) => {
	const orderLabels = ["first", "second", "third", "fourth"] as const;

	return (
		<CardNumberWrap>
			<Title>결제할 카드 번호를 입력해 주세요</Title>
			<Description>본인 명의의 카드만 결제 가능합니다.</Description>
			<InputField label="카드 번호" errorMessage={findErrorOrder(error as unknown as Record<string, string>)}>
				{orderLabels.map((label: keyof CardNumberType) => (
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
