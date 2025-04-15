import InputContainer from "../InputContainer/InputContainer";

const CardNumbersInput = () => {
    return (
        <InputContainer title="결제할 카드 번호를 입력해 주세요" subTitle="본인 명의의 카드만 결제 가능합니다.">
            <label>카드 번호</label>
            <input placeholder="1234" name="card1"/>
            <input placeholder="1234" name="card2"/>
            <input placeholder="1234" name="card3"/>
            <input placeholder="1234" name="card4"/>
            <p>helper text</p>
        </InputContainer>
    )
}

export default CardNumbersInput;