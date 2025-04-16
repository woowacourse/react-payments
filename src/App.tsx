import styled from "styled-components";
import Card from "./components/card/Card";
import Title from "./components/title/Title";
import Description from "./components/description/Description";
import InputField from "./components/inputField/InputField";
import Input from "./components/input/Input";
import { useState } from "react";

export type cardNumber = {
	first: number | undefined;
	second: number | undefined;
	third: number | undefined;
	fourth: number | undefined;
};

function App() {
	const [cardNumber, setCardNumber] = useState<cardNumber>({
		first: undefined,
		second: undefined,
		third: undefined,
		fourth: undefined,
	});

	const handleCardNumber = (order: keyof cardNumber, numbers: number) => {
		setCardNumber({ ...cardNumber, [order]: numbers });
	};

	const cardNumberInputs = [
		<Input value={cardNumber?.first} inputHandler={(numbers) => handleCardNumber("first", numbers)} />,
		<Input value={cardNumber?.second} inputHandler={(numbers) => handleCardNumber("second", numbers)} />,
		<Input value={cardNumber?.third} inputHandler={(numbers) => handleCardNumber("third", numbers)} />,
		<Input value={cardNumber?.fourth} inputHandler={(numbers) => handleCardNumber("fourth", numbers)} />,
	];

	return (
		<MainContainer>
			<Card />
			<CardNumberWrap>
				<Title>결제할 카드 번호를 입력해 주세요</Title>
				<Description>본인 명의의 카드만 결제 가능합니다.</Description>
				<InputField label="카드 번호" inputs={cardNumberInputs} />
			</CardNumberWrap>
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.div``;
const CardNumberWrap = styled.div``;
