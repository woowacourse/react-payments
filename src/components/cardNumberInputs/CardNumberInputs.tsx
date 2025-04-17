import Input from "../input/Input"
import styled from "styled-components"
import { CardNumberProps, Position } from "../../\btypes/index.types"
import { useState } from "react"
import { isValidLength, isValidNumber } from "../../util/validation"


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

const StyledErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin: 0;
    `

const errorMessage = {
    length: '4자리만 입력 가능합니다.',
    number : '숫자만 입력 가능합니다.'
}

function CardNumberInputs({cardNumber, changeCardNumber} : CardNumberProps) {
    const [error, setError] = useState({
        first: "",
        second: "",
        third: "",
        fourth : "",
    });

    function checkValidation(position: Position, length: number, number: string) {
        if (number === "") {
            setError((prev) => {
                prev[position] = ""
                return {...prev}
            })
            return;
        }

        if (!isValidLength(number, length)) {
            setError((prev) => {
                prev[position] = errorMessage.length
                return {...prev}
            })
            return;
        } else if (!isValidNumber(number)) {
            setError((prev) => {
                prev[position] = errorMessage.number
                return {...prev}
            })
            return;
        }

        setError((prev) => {
                prev[position] = ""
                return {...prev}
            })
    }

    function printError() {
        for (const key in error) {
            const typedKey = key as keyof typeof error;
            if (error[typedKey] !== "") {
                return error[typedKey]
            }
        }
    }
   

    return (
        <Container>
            <label htmlFor="">카드 번호</label>
           <InputWrap>
                <Input
                    value={cardNumber['first']}
                    onChange={(e) =>
                    {
                        checkValidation('first', 4, e.target.value);
                        changeCardNumber('first', e.target?.value)
                    }}
                    width='25%'
                    maxLength={4}
                    placeholder="1234" 
                    isError={error['first'] !== ""} >
                    </Input>
                <Input 
                    value={cardNumber['second']} 
                    onChange={(e) =>
                    {
                        checkValidation('second', 4, e.target.value);
                        changeCardNumber('second', e.target?.value)
                    }} 
                    width='25%' 
                    maxLength={4} 
                    placeholder="1234" 
                    isError={error['second'] !== ""}></Input>
                <Input 
                    value={cardNumber['third']} 
                    onChange={(e) =>
                    {
                        checkValidation('third', 4, e.target.value);
                        changeCardNumber('third', e.target?.value)
                    }} 
                    width='25%' 
                    maxLength={4} 
                    placeholder="1234" 
                    isError={error['third'] !== ""}></Input>
                <Input 
                    value={cardNumber['fourth']} 
                    onChange={(e) =>
                    {
                        checkValidation('fourth', 4, e.target.value);
                        changeCardNumber('fourth', e.target?.value)
                    }} 
                    width='25%' 
                    maxLength={4} 
                    placeholder="1234" 
                    isError={error['fourth'] !== ""}></Input>
            </InputWrap>
           {printError() ? <StyledErrorMessage>{printError()}</StyledErrorMessage> : null}  
        </Container>
    )
}

export default CardNumberInputs