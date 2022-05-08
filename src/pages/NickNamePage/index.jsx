import { useContext, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'

import Card from 'components/common/Card'
import Input from 'components/common/Input'
import Button from 'components/common/Button'

import CardInfoContext from 'context/cardInfo-context'

import { CompleteText } from 'pages/NickNamePage/style'
import { FooterWrapper, CenterItem, PageWrapper } from 'pages/style'
import { BottomBorderInputWrapper } from 'components/common/Input/style'

function NickNamePage() {
  const { cardInfo, isFormFulfilled, clearContext } =
    useContext(CardInfoContext)
  const { id: paramId } = useParams()
  const nickname = useRef()

  const isEditing = Object.keys(
    JSON.parse(localStorage.getItem('cardList')) || {}
  ).includes(paramId)

  const saveCardInfo = () => {
    if (isEditing) {
      const prevCardList = JSON.parse(localStorage.getItem('cardList'))
      const editedCard = prevCardList[paramId]
      localStorage.setItem(
        'cardList',
        JSON.stringify({
          ...prevCardList,
          [paramId]: { ...editedCard, cardNickName: nickname.current.value },
        })
      )
      return
    }

    // cardNumber를 id로 가지는 객체
    const cardId = Object.values(cardInfo.cardNumber).join('')
    const prevCardList = JSON.parse(localStorage.getItem('cardList'))
    localStorage.setItem(
      'cardList',
      JSON.stringify({
        ...prevCardList,
        [cardId]: { ...cardInfo, cardNickName: nickname.current.value },
      })
    )

    // state 비우기🤔
    clearContext()
  }

  return isFormFulfilled || isEditing ? (
    <PageWrapper>
      <CompleteText>
        {isEditing ? '카드 닉네임 수정' : '카드등록이 완료되었습니다.'}
      </CompleteText>
      <CenterItem>
        <Card
          cardInfo={
            isEditing
              ? JSON.parse(localStorage.getItem('cardList'))[paramId]
              : cardInfo
          }
        />
        <BottomBorderInputWrapper>
          <Input color="black" ref={nickname} />
        </BottomBorderInputWrapper>
      </CenterItem>
      <FooterWrapper>
        <Button onClick={saveCardInfo}>
          <Link to="/react-payments">확인</Link>
        </Button>
      </FooterWrapper>
    </PageWrapper>
  ) : (
    <div>접근 금지</div>
  )
}

export default NickNamePage
