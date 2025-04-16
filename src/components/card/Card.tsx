import { useEffect, useState } from "react";
import styled from "styled-components";
import { cardNumber } from "../../App";

const Card = ({ cardNumbers }: { cardNumbers: cardNumber }) => {
	// none:0, mastercard: 1, visa: 2
	const [badgeBrand, setBadgeBrand] = useState(0);

	const matchBadgeBrand = () => {
		if (badgeBrand === 1) return "./images/Mastercard.png";
		if (badgeBrand === 2) return "./images/Visa.png";

		return "";
	};

	const settingBadgeBrand = () => {
		const firstSection = cardNumbers.first;

		if (firstSection === "") {
			setBadgeBrand(0);
			return;
		}

		const firstSectionStr = String(firstSection);

		if (firstSectionStr.length >= 2) {
			const firstTwoDigits = firstSectionStr.substring(0, 2);
			const numValue = parseInt(firstTwoDigits);

			if (numValue >= 51 && numValue <= 55) {
				setBadgeBrand(1); // Mastercard
				return;
			}
		}

		if (firstSectionStr.startsWith("4")) {
			setBadgeBrand(2); // Visa
			return;
		}
	};

	useEffect(() => {
		settingBadgeBrand();
	}, [cardNumbers]);

	return (
		<Container>
			<Wrap>
				<Chip />
				<BrandBadge image={matchBadgeBrand()} />
			</Wrap>
			<CardNumbers>
				{Object.entries(cardNumbers).map(([key, value]) => {
					if (key === "third" || key === "fourth") {
						return <CardNumberblind>{"•".repeat(value?.length)}</CardNumberblind>;
					}
					return <CardNumber>{value}</CardNumber>;
				})}
			</CardNumbers>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	width: 212px;
	height: 132px;
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

const CardNumbers = styled.div`
	display: flex;
	gap: 10px;
	font-size: 14px;
	font-weight: 500;
	color: #fff;
`;

const CardNumber = styled.p`
	letter-spacing: 2.24px;
`;

const CardNumberblind = styled.p``;
