import { useContext } from 'react'
import { Link } from 'react-router-dom'

import Card from 'components/common/Card'
import Input from 'components/common/Input'
import Button from 'components/common/Button'

import CardInfoContext from 'store/cardInfo-context'

import { CompleteText } from 'pages/CardAddCompletePage/style'
import { FooterWrapper, CenterItem, PageWrapper } from 'pages/style'
import { BottomBorderInputWrapper } from 'components/common/Input/style'

function CardAddCompletePage() {
  const { cardInfo, isFieldFulfilled, handleCardNickNameChange, clearContext } =
    useContext(CardInfoContext)

  const saveCardInfo = () => {
    // cardNumber를 id로 가지는 객체
    const cardId = Object.values(cardInfo.cardNumber)
      .map((value) => value)
      .join('')
    const prevCardList = JSON.parse(localStorage.getItem('cardList'))
    localStorage.setItem(
      'cardList',
      JSON.stringify({ ...prevCardList, [cardId]: cardInfo })
    )

    // state 비우기
    clearContext()
  }
  return isFieldFulfilled ? (
    <PageWrapper>
      <CompleteText>카드등록이 완료되었습니다.</CompleteText>
      <CenterItem>
        <Card cardInfo={cardInfo} />
        <BottomBorderInputWrapper>
          <Input color="black" onChange={handleCardNickNameChange} />
        </BottomBorderInputWrapper>
      </CenterItem>
      <FooterWrapper>
        {cardInfo.cardNickName && (
          <Button onClick={saveCardInfo}>
            <Link to="/react-payments">확인</Link>
          </Button>
        )}
      </FooterWrapper>
    </PageWrapper>
  ) : (
    <div>접근금지</div>
  )
}

export default CardAddCompletePage
