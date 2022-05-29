import { useContext, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'

import Card from 'components/common/Card'
import Input from 'components/common/Input'
import Button from 'components/common/Button'

import CardInfoContext from 'context/cardInfo-context'

import useLocalStorage from 'hooks/useLocalStorage'

import { CompleteText } from 'pages/NickNamePage/style'
import { FooterWrapper, CenterItem, PageWrapper } from 'pages/style'
import { BottomBorderInputWrapper } from 'components/common/Input/style'
import { PATH } from 'constants'

function NickNamePage() {
  const { cardInfo, isFormFulfilled, clearCardInfo } =
    useContext(CardInfoContext)
  const { id: paramId } = useParams()
  const nickname = useRef()

  const [cardList, setCardList] = useLocalStorage('cardList')
  const isEditing = Object.keys(cardList).includes(paramId)

  const saveCardInfo = () => {
    if (isEditing) {
      const editedCard = cardList[paramId]
      setCardList(paramId, {
        ...editedCard,
        cardNickName: nickname.current.value,
      })
      return
    }

    const cardId = Object.values(cardInfo.cardNumber).join('')
    setCardList(cardId, { ...cardInfo, cardNickName: nickname.current.value })

    clearCardInfo()
  }

  return isFormFulfilled || isEditing ? (
    <PageWrapper>
      <CompleteText>
        {isEditing ? '카드 닉네임 수정' : '카드등록이 완료되었습니다.'}
      </CompleteText>
      <CenterItem>
        <Card
          size="large"
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
          <Link to={PATH.MAIN}>확인</Link>
        </Button>
      </FooterWrapper>
    </PageWrapper>
  ) : (
    <div>접근 금지</div>
  )
}

export default NickNamePage
