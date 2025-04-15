const CardNumbersInput = () => {
    return (
        <div>
            <label>카드 번호</label>
            <input placeholder="1234" name="card1"></input>
            <input placeholder="1234" name="card2"></input>
            <input placeholder="1234" name="card3"></input>
            <input placeholder="1234" name="card4"></input>
            <p>helper text</p>
        </div>
    )
}

export default CardNumbersInput;