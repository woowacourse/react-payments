import InputContainer from "../InputContainer/InputContainer";

const CVCInput = () => {
    return (
        <InputContainer title="CVC 번호를 입력해 주세요">
            <label>CVC</label>
            <input name="cvc" placeholder="123"/>
            <p>helper text</p>
        </InputContainer>
    );
}

export default CVCInput;