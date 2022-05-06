import { Link } from 'react-router-dom'

import Card from 'components/common/Card'
import Input from 'components/common/Input'
import Button from 'components/common/Button'

import { CompleteText } from 'pages/CardAddCompletePage/style'
import { FooterWrapper, CenterItem, PageWrapper } from 'pages/style'
import { BottomBorderInputWrapper } from 'components/common/Input/style'

function CardAddCompletePage() {
  return (
    <PageWrapper>
      <CompleteText>카드등록이 완료되었습니다.</CompleteText>
      <CenterItem>
        <Card />
        <BottomBorderInputWrapper>
          <Input color="black" />
        </BottomBorderInputWrapper>
      </CenterItem>
      <FooterWrapper>
        {
          // 확인을 누르면 카드가 저장됨. 어디에?
          // onClick => localStorage.setItem()
          <Button type="submit">
            <Link to="/">확인</Link>
          </Button>
        }
      </FooterWrapper>
    </PageWrapper>
  )
}

export default CardAddCompletePage
