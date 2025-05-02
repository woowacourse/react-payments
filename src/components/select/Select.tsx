import styled from "styled-components";

interface SelectProps {
	options: string[];
	value: string;
	onChange?: (value: string) => void;
	placeholder: string;
}

const Select = ({ options, value, onChange, placeholder }: SelectProps) => {
	return (
		<SelectContainer value={value} onChange={onChange && ((e) => onChange(e.target.value))}>
			<Option value="" hidden>
				{placeholder}
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

const SelectContainer = styled.select<{ value: string }>`
	width: 100%;
	padding: 8px;
	border: 1px solid #acacac;
	border-radius: 3px;
	color: ${(props) => (props.value === "" ? "#acacac" : "#000")};

	&:focus {
		outline: none;
		border: 1px solid #000;
	}
`;

const Option = styled.option`
	outline: none;
	border: none;
`;
