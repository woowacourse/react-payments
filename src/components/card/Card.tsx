import { useEffect, useState } from "react";
import { cardNumber, date } from "../../App";
import styled from "styled-components";

type Props = {
	cardNumbers: cardNumber;
	expirationDate: date;
};

type CardBrand = "none" | "mastercard" | "visa";

const Card = ({ cardNumbers, expirationDate }: Props) => {
	const [badgeBrand, setBadgeBrand] = useState<CardBrand>("none");

	const badgeImagePath = () => {
		if (badgeBrand === "mastercard") return "./images/Mastercard.png";
		if (badgeBrand === "visa") return "./images/Visa.png";

		return "";
	};

	const findCardBrand = (firstInputElementValues: string): CardBrand => {
		if (firstInputElementValues.startsWith("4")) return "visa";

		const firstTwoDigits = parseInt(firstInputElementValues.slice(0, 2));
		if (firstTwoDigits >= 51 && firstTwoDigits <= 55) return "mastercard";

		return "none";
	};

	const settingBadgeBrand = () => {
		const firstInputElementValues = String(cardNumbers.first);
		const brandName = findCardBrand(firstInputElementValues);
		setBadgeBrand(brandName);
	};

	const formatDate = () => {
		const { month, year } = expirationDate;

		if (month === "" && year === "") return;
		if (year === "") return month;
		return `${month} / ${year}`;
	};

	useEffect(() => {
		settingBadgeBrand();
	}, [cardNumbers]);

	return (
		<Container>
			<Wrap>
				<Chip />
				<BrandBadge image={badgeImagePath()} />
			</Wrap>

			<CardInfoWrap>
				{Object.entries(cardNumbers).map(([key, value]) => {
					const isBlind = key === "third" || key === "fourth";
					const displayValue = isBlind ? "•".repeat(value?.length) : value;

					return <CardNumber key={key}>{displayValue}</CardNumber>;
				})}
			</CardInfoWrap>

			<CardInfoWrap>{formatDate()}</CardInfoWrap>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	width: 212px;
	height: 132px;
	margin: 0 auto 45px;
	padding: 8px 12px;
	border-radius: 4px;
	background: #333;
	box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const Chip = styled.div`
	background-color: #ddcd78;
	width: 36px;
	height: 22px;
	border-radius: 5px;
`;

const BrandBadge = styled.div<{ image: string }>`
	background-image: url("${(props) => props.image}");
	background-size: cover;
	width: 36px;
	height: 22px;
	border-radius: 5px;
`;

const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CardInfoWrap = styled.div`
	display: flex;
	gap: 10px;
	font-size: 14px;
	font-weight: 500;
	color: #fff;
`;

const CardNumber = styled.p`
	letter-spacing: 2.24px;
`;
