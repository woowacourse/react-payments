import Input from "../input/Input"
import styled from "styled-components"
import { CardCVCNumberSectionProps } from "../../\btypes/index.types"
import { useState } from "react"
import { isValidLength, isValidNumber } from "../../util/validation"
import { NO_ERROR } from "../../constants/constant"

const CVC_NUMBER_LENGTH = 3;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
`

const StyledInputWrap = styled.div`
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

      const [error, setError] = useState(NO_ERROR);
    
     function checkValidation(length : number, CVCNumber: string) {
        if (CVCNumber === NO_ERROR) {
            setError(NO_ERROR)
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

        setError(NO_ERROR)
    }


    return (
        <StyledContainer>
            <label htmlFor="">CVC</label>
           <StyledInputWrap>
                <Input
                    value={CVCNumber}
                    onChange={(e) => {
                    changeCVCNumber(e.target.value);
                    checkValidation(CVC_NUMBER_LENGTH, e.target.value);
                    }}
                    isError={error !== NO_ERROR}
                    width='100%'
                    maxLength={CVC_NUMBER_LENGTH}
                    placeholder="123" ></Input>
            </StyledInputWrap>
            {error !== NO_ERROR ? <StyledErrorMessage>{error}</StyledErrorMessage> : null}
        </StyledContainer>
    )
}

export default CardCVCNumberInputs