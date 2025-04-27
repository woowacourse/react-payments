import { CardNumberType } from "../../hooks/useCardNumber";
import { ExpirationDateType } from "../../hooks/useExpirationDate";
import styled from "styled-components";

interface CardProps {
	cardNumbers: CardNumberType;
	cardCompany: string;
	expirationDate: ExpirationDateType;
}

enum CardBackgroundColor {
	"BC카드" = "#F04651",
	"신한카드" = "#0046FF",
	"카카오뱅크" = "#FFE600",
	"현대카드" = "#000",
	"우리카드" = "#007BC8",
	"롯데카드" = "#ED1C24",
	"하나카드" = "#009490",
	"국민카드" = "#6A6056",
}

const Card = ({ cardNumbers, cardCompany, expirationDate }: CardProps) => {
	const backgroundColor = CardBackgroundColor[cardCompany as keyof typeof CardBackgroundColor] ?? "#000";

	const getBadgeImagePath = (firstNumber: string) => {
		if (firstNumber.startsWith("4")) return "./images/Visa.png";

		const firstTwoDigits = parseInt(firstNumber.slice(0, 2), 10);
		if (firstTwoDigits >= 51 && firstTwoDigits <= 55) return "./images/Mastercard.png";

		return "";
	};

	const formatDate = () => {
		const { month, year } = expirationDate;

		if (month === "" && year === "") return;
		if (year === "") return month;
		return `${month} / ${year}`;
	};

	return (
		<Container $cardBackgroundColor={backgroundColor}>
			<Wrap>
				<Chip />
				{getBadgeImagePath(cardNumbers.first) && <BrandBadge src={getBadgeImagePath(cardNumbers.first)} alt="brand badge" />}
			</Wrap>

			<CardInfoWrap>
				{Object.entries(cardNumbers).map(([key, value]) => {
					const isBlind = key === "third" || key === "fourth";
					const displayValue = isBlind ? "•".repeat(value?.length) : value;

					return (
						<p key={key} className="card-number-blind">
							{displayValue}
						</p>
					);
				})}
			</CardInfoWrap>

			<CardInfoWrap>{formatDate()}</CardInfoWrap>
		</Container>
	);
};

export default Card;

const Container = styled.div<{ $cardBackgroundColor: string }>`
	width: 212px;
	height: 132px;
	margin: 0 auto 45px;
	padding: 8px 12px;
	border-radius: 4px;
	background: ${(props) => props.$cardBackgroundColor};
	box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const Chip = styled.div`
	background-color: #ddcd78;
	width: 36px;
	height: 22px;
	border-radius: 5px;
`;

const BrandBadge = styled.img`
	width: 36px;
	height: 22px;
	border-radius: 5px;
	object-fit: cover;
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
