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

function CardCVCNumberInputs() {
    return (
        <Container>
            <label htmlFor="">CVC</label>
           <InputWrap>
                <Input width='100%' maxLength={3} placeholder="123" ></Input>
            </InputWrap>
        </Container>
    )
}

export default CardCVCNumberInputs