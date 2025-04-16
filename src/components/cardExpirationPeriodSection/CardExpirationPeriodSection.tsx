import SectionTitle from "../sectionTitle/SectionTitle"
import CardNumberInputs from "../cardNumberInputs/CardNumberInputs"
import CardExpirationPeriodInputs from "../cardExpirationPeriodInputs/CardExpirationPeriodInputs"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
`

function CardExpirationPeriodSection() {
    return (
        <StyledContainer>
            <SectionTitle title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MMYY)를 순서대로 입력해 주세요."/>
            <CardExpirationPeriodInputs/>
        </StyledContainer>
    )
}

export default CardExpirationPeriodSection