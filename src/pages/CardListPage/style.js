import styled from 'styled-components'

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 400px;
  width: 250px;
  overflow: scroll;
  margin-top: 65px;
  margin-bottom: 20px;
  gap: 25px;
`

const CardNickname = styled.div`
  margin-top: 5px;
  font-weight: 700;
  color: #575757;
`
const PossessedCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export { CardListWrapper, CardNickname, PossessedCard }
