import React from "react";
import { ExpirationDateType } from "../../hooks/useExpirationDate";
import Description from "../description/Description";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import Input from "../input/Input";
import findErrorOrder from "../../utils/findErrorOrder";
import useAutoFocus from "../../hooks/useAutoFocus";
import { EXPIRATION_MAX_LENGTH } from "../../utils/validation";
import styled from "styled-components";

<<<<<<< HEAD
interface ExpirationDateProps {
	expirationDate: ExpirationDateType;
	onChange: (order: keyof ExpirationDateType, value: string) => void;
	onBlur: (order: keyof ExpirationDateType, value: string) => void;
	error: ExpirationDateType;
}

const INPUT_COUNT = 2;

const ExpirationDate = React.memo(({ expirationDate, onChange, onBlur, error }: ExpirationDateProps) => {
	const orderLabels = ["month", "year"] as const;
	const { inputRef, moveFocus } = useAutoFocus(INPUT_COUNT, EXPIRATION_MAX_LENGTH);
	const placeholderMap = {
		month: "MM",
		year: "YY",
	};

=======
const INPUT_MAX_LENGTH = 2;

type Props = {
	expirationDate: date;
	setExpirationDate: Dispatch<SetStateAction<date>>;
};

const ExpirationDate = ({ expirationDate, setExpirationDate }: Props) => {
	const [error, setError] = useState({
		month: "",
		year: "",
	});

	const CURRENT_YEAR = new Date().getFullYear() % 100;
	const orderLabels = ["month", "year"] as const;
	const placeholderMap = {
		month: "MM",
		year: "YY",
	};

	const onChange = (order: keyof date, value: string) => {
		setExpirationDate({ ...expirationDate, [order]: value });

		if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
			setError({ ...error, [order]: MESSAGE.INVALID_NUMBER });
			return;
		}

		if (order === "month") {
			const month = Number(value);
			if (month < 0 || month > 12) {
				setError({ ...error, month: MESSAGE.MONTH_RANGE });
				return;
			}
		}

		if (order === "year") {
			const year = Number(value);
			if (year < CURRENT_YEAR && year >= 0) {
				setError({ ...error, year: MESSAGE.YEAR_RANGE(CURRENT_YEAR) });
				return;
			}
		}

		setError({ ...error, [order]: "" });
	};

	const onBlur = (order: keyof date, value: string) => {
		if (value.length < INPUT_MAX_LENGTH) setError({ ...error, [order]: MESSAGE.MONTH_FORMAT });
	};

	const inputs = orderLabels.map((label: keyof date) => {
		return (
			<Input
				key={label}
				isError={!!error[label]}
				placeholder={placeholderMap[label]}
				value={expirationDate[label]}
				maxLength={INPUT_MAX_LENGTH}
				onChange={(numbers) => onChange(label, numbers)}
				onBlur={(numbers) => onBlur(label, numbers)}
			/>
		);
	});

>>>>>>> refactor: 변수명 수정
	return (
		<CardNumberWrap>
			<Title>카드 유효기간을 입력해 주세요</Title>
			<Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
			<InputField label="유효기간" errorMessage={findErrorOrder(error as unknown as Record<string, string>)}>
				{orderLabels.map((label: keyof ExpirationDateType, index: number) => {
					return (
						<Input
							key={label}
							ref={inputRef[index]}
							isError={!!error[label]}
							placeholder={placeholderMap[label]}
							value={expirationDate[label]}
							maxLength={EXPIRATION_MAX_LENGTH}
							onChange={(e) => {
								onChange(label, e.target.value);
								moveFocus(index, e.target.value);
							}}
							onBlur={(e) => onBlur(label, e.target.value)}
						/>
					);
				})}
			</InputField>
		</CardNumberWrap>
	);
});

export default ExpirationDate;

const CardNumberWrap = styled.div`
	height: 130px;
`;
