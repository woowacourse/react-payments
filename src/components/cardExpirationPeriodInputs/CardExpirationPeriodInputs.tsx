import Input from "../input/Input"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
`

const InputWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`

function CardExpirationPeriodInputs() {
    return (
        <Container>
            <label htmlFor="">유효 기간</label>
           <InputWrap>
                <Input width='50%' maxLength={2} placeholder="MM" ></Input>
                <Input width='50%' maxLength={2} placeholder="YY" ></Input>
            </InputWrap>
        </Container>
    )
}

export default CardExpirationPeriodInputs