import styled from "styled-components";
import Card from "./components/card/Card";
import Title from "./components/title/Title";
import Description from "./components/description/Description";
import InputField from "./components/inputField/InputField";
import Input from "./components/input/Input";
import { useState } from "react";
import CardNumber from "./components/card/CardNumber";

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

	const handleDate = (order: keyof date, value: string) => {
		setExpirationDate({ ...expirationDate, [order]: value });
	};

	const expirationInput = [
		<Input placeholder="MM" value={expirationDate.month} inputHandler={(value) => handleDate("month", value)} />,
		<Input placeholder="YY" value={expirationDate.year} inputHandler={(value) => handleDate("year", value)} />,
	];

	const cvcInput = [<Input placeholder="123" value={cvcNumber} inputHandler={(value) => setcvcNumber(value)} />];

	return (
		<MainContainer>
			<Card cardNumbers={cardNumber} expirationDate={expirationDate} />
			<CardNumber cardNumber={cardNumber} setCardNumber={setCardNumber} />

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
