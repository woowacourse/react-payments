import styled from "styled-components";
import Card from "./components/card/Card";
import { useState } from "react";
import CardNumber from "./components/form/CardNumber";
import ExpirationDate from "./components/form/ExpirationDate";
import CardCvc from "./components/form/CardCvc";

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

	return (
		<MainContainer>
			<Card cardNumbers={cardNumber} expirationDate={expirationDate} />
			<CardNumber cardNumber={cardNumber} setCardNumber={setCardNumber} />
			<ExpirationDate expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
			<CardCvc cvcNumber={cvcNumber} setcvcNumber={setcvcNumber} />
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.div``;
