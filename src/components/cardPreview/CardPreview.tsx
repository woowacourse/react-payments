import styled from "styled-components"
import { CardNumber, ExpirationPeriod } from "../../\btypes/index.types"
import { useState } from "react"
import { useEffect } from "react"
import { INITIALIZE_VALUE } from "../../constants/constant"


const StyledContainer = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
width: 100%;
height: 250px;
max-width: 400px;
background-color: #333333;
border-radius: 8px;
box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
box-sizing: border-box;
padding: 15px 20px;
` 

const StyledIconWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: 30px;`


const StyledMagnetic = styled.div`
width: 100%;
max-width: 50px;
height: 30px;
border-radius: 6px;
background-color: #DDCD78;`

const StyledLogoWrap = styled.div`
width: 100%;
max-width: 50px;
height: 30px;
border-radius: 6px;
background-color: #FFFFFF;
`

const StyledCardNumberWrap = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
gap: 10px;
`
const StyledCardNumber = styled.div`
width: 100%;
font-size: 25px;
font-weight: 500;
text-align: left;
letter-spacing: 16%;
color: #FFFFFF;`

const StyledExpirationPeriod = styled.div`
width: 100%;
font-size: 25px;
font-weight: 500;
letter-spacing: 16%;
color: #FFFFFF;`

type CardPreviewProps = {
    cardNumber: CardNumber
    expirationPeriod: ExpirationPeriod
}

const CARD_IDENTIFYING_NUMBER = {
    VISA: 4,
    MASTERCARD: {
        MIN: 51,
        MAX: 55
    }
}

function CardPreview({ cardNumber, expirationPeriod }: CardPreviewProps) {
    const [logoSrc, setLogoSrc] = useState(INITIALIZE_VALUE);

    useEffect(() => {
        function identifyLogo() {
            const id = cardNumber['first'].slice(0, 2);
            if (Number(id[0]) === CARD_IDENTIFYING_NUMBER.VISA) setLogoSrc('/images/Visa.svg')
            else if (Number(id) >= CARD_IDENTIFYING_NUMBER.MASTERCARD.MIN && Number(id) <= CARD_IDENTIFYING_NUMBER.MASTERCARD.MAX) setLogoSrc('/images/Mastercard.svg')
            else { setLogoSrc(INITIALIZE_VALUE) }
        }
         identifyLogo();
    },[cardNumber])

    return (
        <StyledContainer>
            <StyledIconWrap>
                <StyledMagnetic>
                </StyledMagnetic>
                {logoSrc !== INITIALIZE_VALUE ?
                    <StyledLogoWrap>
                        <img src={logoSrc} alt='logo' style={{width: '100%', height: '100%'}}/>
                    </StyledLogoWrap>
                    : null}
            </StyledIconWrap>
            <StyledCardNumberWrap>
                <StyledCardNumber>{cardNumber['first']}</StyledCardNumber>
                <StyledCardNumber>{cardNumber['second']}</StyledCardNumber>
                <StyledCardNumber>{"*".repeat(cardNumber['third'].length)}</StyledCardNumber>
                <StyledCardNumber>{"*".repeat(cardNumber['fourth'].length)}</StyledCardNumber>
            </StyledCardNumberWrap>
            <StyledExpirationPeriod>
                {expirationPeriod['month']}/{expirationPeriod['year']}
            </StyledExpirationPeriod>
        </StyledContainer>
    )
}

export default CardPreview