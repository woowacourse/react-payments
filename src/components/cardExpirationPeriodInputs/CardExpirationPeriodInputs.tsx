import { useState } from "react"
import Input from "../input/Input"
import styled from "styled-components"
import { ExpirationPeriod, ExpirationPeriodProps } from "../../\btypes/index.types"
import { isValidLength, isValidMonthRange, isValidNumber, isValidYearRange } from "../../util/validation"

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

const errorMessage = {
    length: '2자리만 입력 가능합니다.',
    number : '숫자만 입력 가능합니다.',
    monthRange: '유효기간은 1~12월 사이여야 합니다.',
    yearRange: '유효기간은 25~99년 사이여야 합니다.'
}

const StyledErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin: 0;
    `

function CardExpirationPeriodInputs({expirationPeriod ,changeExpirationPeriod}: ExpirationPeriodProps) {
    const [error, setError] = useState({
        month: "",
        year: "",
    });

    function checkCommonValidation(expirationPeriod: ExpirationPeriod, length: number, number: string) {
       

        if (!isValidLength(number, length)) {
            setError((prev) => {
                prev[expirationPeriod] = errorMessage.length
                return {...prev}
            })
            return;
        } 
        if (!isValidNumber(number)) {
            setError((prev) => {
                prev[expirationPeriod] = errorMessage.number
                return {...prev}
            })
            return;
        }
        setError((prev) => {
            prev[expirationPeriod] = ""
            return {...prev}
        })
    }
    function checkMonthValidation(length: number, number: string) {
  if (number === "") {
            setError((prev) => {
                prev["month"] = ""
                return {...prev}
            })
            return;
        }
        if (!isValidMonthRange(number)) {
            setError((prev) => {
                prev["month"] = errorMessage.monthRange
                return {...prev}
            })
              return;
        } 
        checkCommonValidation("month", length, number);

    }
    function checkYearValidation(length: number, number: string) {
         if (number === "") {
            setError((prev) => {
                prev["year"] = ""
                return {...prev}
            })
            return;
        }
        if (!isValidYearRange(number)) {
            setError((prev) => {
                prev["year"] = errorMessage.yearRange
                return {...prev}
            })
              return;
        } 
        checkCommonValidation("year", length, number);
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
            <label htmlFor="">유효 기간</label>
           <InputWrap>
                <Input 
                value={expirationPeriod['month']} 
                onChange={(e) => {
                    checkMonthValidation(2, e.target.value)
                    changeExpirationPeriod("month", e.target.value)
                    }}
                width='50%' 
                maxLength={2} 
                placeholder="MM" 
                isError={error['month'] !== ""}></Input>
                <Input 
                value={expirationPeriod['year']} 
                onChange={(e) => {
                    checkYearValidation(2, e.target.value)
                    changeExpirationPeriod("year", e.target.value)
                    }}
                width='50%' 
                maxLength={2} 
                placeholder="YY" 
                isError={error['year'] !== ""}></Input>
            </InputWrap>
            {printError() ? <StyledErrorMessage>{printError()}</StyledErrorMessage> : null}
        </Container>
    )
}

export default CardExpirationPeriodInputs