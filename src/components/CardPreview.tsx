import React from 'react';
import styled from "styled-components";

import IcChip from "../asset/IcChip.svg";
import Visa from "../asset/Visa.svg";
import MasterCard from "../asset/Mastercard.svg";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;
  width: 246px;
  height: 154px;
  padding: 16px;
  
  border-radius: 8px;
  background-color: #333333;

  box-shadow: rgba(0, 0, 0, 0.35) 8px 12px 16px;
`

const CardHeader = styled.div`
  display:flex;
  justify-content: space-between;
`

const CardNumbers = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardNumber = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: white;
`

const CardNameAndExpiration = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const NameLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 9.5px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: white;
`

const Name = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: white;
`

const CardExpirationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const ExpirationLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 9.5px;
  font-weight: 500;
  line-height: 15px;
  text-align: right;
  color: white;
`

const Expiration = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: right;
  color: white;
`

const Image = styled.img`
  width: 36px;
  height: 28px;
`
const CardPreview = () => {

  return (
    <Card>
      <CardHeader>
        <Image src={IcChip} />
        <Image src={Visa} />
      </CardHeader>
      <CardNumbers>
        <CardNumber>3456</CardNumber>
        <CardNumber>3456</CardNumber>
        <CardNumber>3456</CardNumber>
        <CardNumber>3456</CardNumber>
      </CardNumbers>
      <CardNameAndExpiration>
        <CardNameContainer>
          <NameLabel>NAME</NameLabel>
          <Name>KIM A.</Name>
        </CardNameContainer>
        <CardExpirationContainer>
          <ExpirationLabel>EXPIRATION</ExpirationLabel>
          <Expiration>04/21</Expiration>
        </CardExpirationContainer>
      </CardNameAndExpiration>
    </Card>)
}

export default CardPreview;