import styled from "styled-components"

const InputStyled = styled.input`
    width: ${(props) => props.width ? props.width : "100%"};
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
    width?: string;
}

function Input({width ,type, maxLength, placeholder}: InputProps) {
    return (
        <>
            <InputStyled width={width} type={type} placeholder={placeholder} maxLength={maxLength}></InputStyled>
        </>
    )
}

export default Input
