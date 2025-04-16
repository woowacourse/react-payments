import SectionTitle from "../sectionTitle/SectionTitle"
import CardNumberInputs from "../cardNumberInputs/CardNumberInputs"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
`

function CardNumberSection() {
    return (
        <StyledContainer>
            <SectionTitle title="결제할 카드 번호를 입력해 주세요" subTitle="본인 명의의 카드만 결제 가능합니다."/>
            <CardNumberInputs />
        </StyledContainer>
    )
}

export default CardNumberSection