import styled from "styled-components"

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


function CardPreview() {
    return (
        <StyledContainer>
            <StyledIconWrap>
                <StyledMagnetic>
                </StyledMagnetic>
                <StyledLogoWrap>
                    <img src="/images/Mastercard.svg" alt="logo" style={{width: "100%", height: "100%"}}/>
                </StyledLogoWrap>
            </StyledIconWrap>
            <StyledCardNumberWrap>
                <StyledCardNumber>1111</StyledCardNumber>
                <StyledCardNumber>1234</StyledCardNumber>
                <StyledCardNumber>1231</StyledCardNumber>
                <StyledCardNumber>1233</StyledCardNumber>
            </StyledCardNumberWrap>
            <StyledExpirationPeriod>
                04/21
            </StyledExpirationPeriod>
        </StyledContainer>
    )
}

export default CardPreview