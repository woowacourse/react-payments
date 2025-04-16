import Input from "../input/Input"
import styled from "styled-components"
import { CardNumberProps } from "../../\btypes/index.types"

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

function CardNumberInputs({cardNumber, changeCardNumber} : CardNumberProps) {
    return (
        <Container>
            <label htmlFor="">카드 번호</label>
           <InputWrap>
                <Input value={cardNumber['first']} onChange={(e) => changeCardNumber('first', e.target?.value)} width='25%' maxLength={4} placeholder="1234" ></Input>
                <Input value={cardNumber['second']} onChange={(e) => changeCardNumber('second', e.target?.value)} width='25%' maxLength={4} placeholder="1234" ></Input>
                <Input value={cardNumber['third']} onChange={(e) => changeCardNumber('third', e.target?.value)} width='25%' maxLength={4} placeholder="1234" ></Input>
                <Input value={cardNumber['forth']} onChange={(e)=>changeCardNumber('forth', e.target?.value)} width='25%' maxLength={4} placeholder="1234" ></Input>
            </InputWrap>
        </Container>
    )
}

export default CardNumberInputs