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
    display: flex;
    height: 32px;
    padding: 8px;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;    
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
