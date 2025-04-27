import React from "react";
import Description from "../description/Description";
import Title from "../title/Title";
import Select from "../select/Select";
import styled from "styled-components";

interface CardCompanyProps {
	cardCompany: string;
	onChange: (value: string) => void;
}

export const CARD_COMPANIES = ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"];

const CardCompany = React.memo(({ cardCompany, onChange }: CardCompanyProps) => {
	return (
		<CardNumberWrap>
			<Title>카드사를 선택해 주세요</Title>
			<Description>현재 국내 카드사만 가능합니다.</Description>
			<Select options={CARD_COMPANIES} cardCompany={cardCompany} onChange={onChange} />
		</CardNumberWrap>
	);
});

export default CardCompany;

const CardNumberWrap = styled.div`
	height: 130px;
`;
