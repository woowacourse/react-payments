import React from 'react'
import {
  CompanyWrapper,
  CompanyCircle,
  CompanyName,
} from 'components/common/CardCompany/style'

interface CardCompanyType {
  color: string
  company: string
  handleClick: React.MouseEventHandler<HTMLDivElement>
}

function CardCompany({ color, company, handleClick }: CardCompanyType) {
  return (
    <CompanyWrapper onClick={handleClick}>
      <CompanyCircle color={color} />
      <CompanyName>{company} 카드</CompanyName>
    </CompanyWrapper>
  )
}

export default CardCompany
