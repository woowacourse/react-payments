import { useState } from "react"
import Input from "../input/Input"
import { ExpirationPeriod, ExpirationPeriodProps } from "../../\btypes/index.types"
import { isValidLength, isValidMonthRange, isValidNumber, isValidYearRange } from "../../util/validation"
import { NO_ERROR } from "../../constants/constant"
import { StyledContainer, StyledInputWrap, StyledErrorMessage } from "../../styled-component/inputs"


const EXPIRATION_PERIOD_LENGTH = 3;


const errorMessage = {
    length: '2자리만 입력 가능합니다.',
    number : '숫자만 입력 가능합니다.',
    monthRange: '유효기간은 1~12월 사이여야 합니다.',
    yearRange: '유효기간은 25~99년 사이여야 합니다.'
}



function CardExpirationPeriodInputs({expirationPeriod ,changeExpirationPeriod}: ExpirationPeriodProps) {
    const [error, setError] = useState({
        month: NO_ERROR,
        year: NO_ERROR,
    });

    function checkCommonValidation(expirationPeriod: keyof ExpirationPeriod, length: number, number: string) {
       

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
            prev[expirationPeriod] = NO_ERROR
            return {...prev}
        })
    }
    function checkMonthValidation(length: number, number: string) {
  if (number === NO_ERROR) {
            setError((prev) => {
                prev["month"] = NO_ERROR
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
         if (number === NO_ERROR) {
            setError((prev) => {
                prev["year"] = NO_ERROR
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

    function getErrorMessage() {
        for (const key in error) {
            const typedKey = key as keyof typeof error;
            if (error[typedKey] !== NO_ERROR) {
                return error[typedKey]
            }
        }
    }

    return (
        <StyledContainer>
            <label htmlFor="">유효 기간</label>
           <StyledInputWrap>
                <Input 
                value={expirationPeriod['month']} 
                onChange={(e) => {
                    checkMonthValidation(EXPIRATION_PERIOD_LENGTH, e.target.value)
                    changeExpirationPeriod("month", e.target.value)
                    }}
                width='50%' 
                maxLength={EXPIRATION_PERIOD_LENGTH} 
                placeholder="MM" 
                isError={error['month'] !== NO_ERROR}></Input>
                <Input 
                value={expirationPeriod['year']} 
                onChange={(e) => {
                    checkYearValidation(EXPIRATION_PERIOD_LENGTH, e.target.value)
                    changeExpirationPeriod("year", e.target.value)
                    }}
                width='50%' 
                maxLength={EXPIRATION_PERIOD_LENGTH} 
                placeholder="YY" 
                isError={error['year'] !== NO_ERROR}></Input>
            </StyledInputWrap>
            {getErrorMessage() ? <StyledErrorMessage>{getErrorMessage()}</StyledErrorMessage> : null}
        </StyledContainer>
    )
}

export default CardExpirationPeriodInputs