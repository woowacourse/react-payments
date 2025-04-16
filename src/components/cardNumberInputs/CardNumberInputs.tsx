import Input from "../input/Input"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`

const InputWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`

function CardNumberInputs() {
    return (
        <Container>
            <label htmlFor="">카드 번호</label>
           <InputWrap>
                <Input width='25%' maxLength={4} placeholder="1234" ></Input>
                <Input width='25%' maxLength={4} placeholder="1234" ></Input>
                <Input width='25%' maxLength={4} placeholder="1234" ></Input>
                <Input width='25%' maxLength={4} placeholder="1234" ></Input>
            </InputWrap>
        </Container>
    )
}

export default CardNumberInputs