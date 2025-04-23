import styled from "styled-components";
import Card from "./components/card/Card";
import { useState } from "react";
import CardNumber from "./components/form/CardNumber";
import ExpirationDate from "./components/form/ExpirationDate";
import CardCvc from "./components/form/CardCvc";
import CardCompany from "./components/form/CardCompany";
import CardPassword from "./components/form/CardPassword";

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
	const [cvcNumber, setCvcNumber] = useState<string>("");
	const [cardCompany, setCardCompany] = useState<string>("");
	const [cardPassword, setCardPassword] = useState<string>("");

	return (
		<MainContainer>
			<Card cardNumbers={cardNumber} cardCompany={cardCompany} expirationDate={expirationDate} />
			<CardNumber cardNumber={cardNumber} setCardNumber={setCardNumber} />
			<CardPassword cardPassword={cardPassword} setCardPassword={setCardPassword} />
			<CardCompany cardCompany={cardCompany} setCardCompany={setCardCompany} />
			<ExpirationDate expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
			<CardCvc cvcNumber={cvcNumber} setCvcNumber={setCvcNumber} />
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.div`
	width: 376px;
	padding: 77px 30px 20px;
	margin: auto;
`;
