import styled from "styled-components";

type Props = {
	options: string[];
	cardCompany: string;
	onChange?: (value: string) => void;
};

const Select = ({ options, cardCompany, onChange }: Props) => {
	return (
		<SelectContainer $cardCompany={cardCompany} onChange={onChange && ((e) => onChange(e.target.value))}>
			<Option value="" hidden>
				카드사를 선택해주세요.
			</Option>
			{options.map((option) => {
				return (
					<Option key={option} value={option}>
						{option}
					</Option>
				);
			})}
		</SelectContainer>
	);
};

export default Select;

const SelectContainer = styled.select<{ $cardCompany: string }>`
	width: 100%;
	padding: 8px;
	margin-top: 16px;
	border: 1px solid #acacac;
	border-radius: 3px;
	color: ${(props) => (props.$cardCompany === "" ? "#acacac" : "#000")};

	&:focus {
		outline: none;
		border: 1px solid #000;
	}
`;

const Option = styled.option`
	outline: none;
	border: none;
`;
