import styled from "styled-components"

const InputStyled = styled.input`
    border-radius: 2px;
    border: 1.015px solid #ACACAC;
    &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
    }
`

type InputProps = {
    type: "text" | "number"
    maxLength: number;
    placeholder: string;
}

function Input({type, maxLength, placeholder}: InputProps) {
    return (
        <>
            <InputStyled type={type} placeholder={placeholder} maxLength={maxLength}></InputStyled>
        </>
    )
}

export default Input
