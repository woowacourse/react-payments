import React from 'react'
import {
  CompanyWrapper,
  CompanyCircle,
  CompanyName,
} from 'components/common/CardCompany/style'

function CardCompany({ color, company, handleClick }) {
  return (
    <CompanyWrapper onClick={handleClick}>
      <CompanyCircle color={color} />
      <CompanyName>{company} 카드</CompanyName>
    </CompanyWrapper>
  )
}

export default CardCompany
