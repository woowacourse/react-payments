import styled from "styled-components";
import Card from "./components/card/Card";
import Title from "./components/title/Title";
import Description from "./components/description/Description";
import InputField from "./components/inputField/InputField";
import Input from "./components/input/Input";
import { useState } from "react";

export type cardNumber = {
	first: string;
	second: string;
	third: string;
	fourth: string;
};

export type date = {
	month: string;
	year: string;
};

function App() {
	const [cardNumber, setCardNumber] = useState<cardNumber>({
		first: "",
		second: "",
		third: "",
		fourth: "",
	});
	const [expirationDate, setExpirationDate] = useState<date>({
		month: "",
		year: "",
	});
	const [cvcNumber, setcvcNumber] = useState<string>("");

	const handleCardNumber = (order: keyof cardNumber, numbers: string) => {
		setCardNumber({ ...cardNumber, [order]: numbers });
	};

	const handleDate = (order: keyof date, value: string) => {
		setExpirationDate({ ...expirationDate, [order]: value });
	};

	const cardNumberInputs = [
		<Input placeholder="1234" value={cardNumber?.first} inputHandler={(numbers) => handleCardNumber("first", numbers)} />,
		<Input placeholder="1234" value={cardNumber?.second} inputHandler={(numbers) => handleCardNumber("second", numbers)} />,
		<Input placeholder="1234" value={cardNumber?.third} inputHandler={(numbers) => handleCardNumber("third", numbers)} />,
		<Input placeholder="1234" value={cardNumber?.fourth} inputHandler={(numbers) => handleCardNumber("fourth", numbers)} />,
	];

	const expirationInput = [
		<Input placeholder="MM" value={expirationDate.month} inputHandler={(value) => handleDate("month", value)} />,
		<Input placeholder="YY" value={expirationDate.year} inputHandler={(value) => handleDate("year", value)} />,
	];

	const cvcInput = [<Input placeholder="123" value={cvcNumber} inputHandler={(value) => setcvcNumber(value)} />];

	return (
		<MainContainer>
			<Card />
			<CardNumberWrap>
				<Title>결제할 카드 번호를 입력해 주세요</Title>
				<Description>본인 명의의 카드만 결제 가능합니다.</Description>
				<InputField label="카드 번호" inputs={cardNumberInputs} />
			</CardNumberWrap>

			<CardNumberWrap>
				<Title>카드 유효기간을 입력해 주세요</Title>
				<Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
				<InputField label="유효기간" inputs={expirationInput} />
			</CardNumberWrap>

			<CardNumberWrap>
				<Title>CVC 번호를 입력해 주세요</Title>
				<InputField label="CVC" inputs={cvcInput} />
			</CardNumberWrap>
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.div``;
const CardNumberWrap = styled.div``;
