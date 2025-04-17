import { useEffect, useState } from "react";
import styled from "styled-components";
import { cardNumber, date } from "../../App";

type Props = {
	cardNumbers: cardNumber;
	expirationDate: date;
};
const Card = ({ cardNumbers, expirationDate }: Props) => {
	// none:0, mastercard: 1, visa: 2
	const [badgeBrand, setBadgeBrand] = useState(0);

	const matchBadgeBrand = () => {
		if (badgeBrand === 1) return "./images/Mastercard.png";
		if (badgeBrand === 2) return "./images/Visa.png";

		return "";
	};

	const settingBadgeBrand = () => {
		const firstSection = String(cardNumbers.first);

		if (firstSection.length >= 2) {
			const firstTwoDigits = firstSection.substring(0, 2);
			const numValue = parseInt(firstTwoDigits);

			if (numValue >= 51 && numValue <= 55) {
				setBadgeBrand(1); // Mastercard
				return;
			}
		}

		if (firstSection.startsWith("4")) {
			setBadgeBrand(2); // Visa
			return;
		}

		setBadgeBrand(0);
	};

	const formatDate = () => {
		const month = expirationDate.month;
		const year = expirationDate.year;

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
				<BrandBadge image={matchBadgeBrand()} />
			</Wrap>

			<CardInfoWrap>
				{Object.entries(cardNumbers).map(([key, value]) => {
					if (key === "third" || key === "fourth") {
						return <CardNumberblind key={key}>{"•".repeat(value?.length)}</CardNumberblind>;
					}
					return <CardNumber key={key}>{value}</CardNumber>;
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

const CardNumberblind = styled.p``;
