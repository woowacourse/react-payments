import SectionTitle from "../sectionTitle/SectionTitle"
import CardCVCNumberInputs from "../cardCVCNumberInputs/cardCVCNumberInputs"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
`

function CardCVCNumberSection() {
    return (
        <StyledContainer>
            <SectionTitle title="CVC 번호를 입력해 주세요"/>
            <CardCVCNumberInputs/>
        </StyledContainer>
    )
}

export default CardCVCNumberSection