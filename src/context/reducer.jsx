import {
  initialCardInfo,
  CHANGE_CARD_COMPANY,
  CHANGE_CARD_INFO,
  CLEAR_CARD_INFO,
} from 'context/cardInfo-context'

const reducer = (state, action) => {
  const { type, name, key, value } = action

  switch (type) {
    case CHANGE_CARD_COMPANY:
      return {
        ...state,
        [name]: value,
      }
    case CHANGE_CARD_INFO:
      if (key) {
        return {
          ...state,
          [name]: {
            ...state[name],
            [key]: value,
          },
        }
      }
      return { ...state, [name]: value }
    case CLEAR_CARD_INFO:
      return initialCardInfo
    default:
      return state
  }
}

export default reducer
