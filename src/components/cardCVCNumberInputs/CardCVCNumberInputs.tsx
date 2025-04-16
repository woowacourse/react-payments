import Input from "../input/Input"
import styled from "styled-components"
import { CardCVCNumberSectionProps } from "../../\btypes/index.types"
import { useState } from "react"
import { isValidLength, isValidNumber } from "../../util/validation"

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

const StyledErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin: 0;
    `

const errorMessage = {
    length: '3자리만 입력 가능합니다.',
    number : '숫자만 입력 가능합니다.'
}



function CardCVCNumberInputs({ CVCNumber, changeCVCNumber }: CardCVCNumberSectionProps) {

      const [error, setError] = useState("");
    
     function checkValidation(length : number, CVCNumber: string) {
        if (CVCNumber === "") {
            setError("")
            return;
        }

        if (!isValidLength(CVCNumber, length)) {
            setError(errorMessage.length)
            return;
         }
         if (!isValidNumber(CVCNumber)) {
               setError(errorMessage.number)
            return;
        }

        setError("")
    }


    return (
        <Container>
            <label htmlFor="">CVC</label>
           <InputWrap>
                <Input
                    value={CVCNumber}
                    onChange={(e) => {
                    changeCVCNumber(e.target.value);
                    checkValidation(3, e.target.value);
                    }}
                    isError={error !== ""}
                    width='100%'
                    maxLength={3}
                    placeholder="123" ></Input>
            </InputWrap>
            {error !== "" ? <StyledErrorMessage>{error}</StyledErrorMessage> : null}
        </Container>
    )
}

export default CardCVCNumberInputs