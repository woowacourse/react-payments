const cardInfoReducer = (state: CardInfo, action: CardInfoAction) => {
  switch (action.type) {
    case 'SET_CARD_NUMBERS_VALUE':
      return {
        ...state, cardNumbers: {
          ...state.cardNumbers, value: action.value
        }
      }

    case 'SET_CARD_NUMBERS_COMPLETED':
      return {
        ...state, cardNumbers: {
          ...state.cardNumbers, isComplete: action.value
        }
      }

    case 'SET_CARD_NUMBERS_ERROR_MESSAGE':
      return {
        ...state, cardNumbers: {
          ...state.cardNumbers, errorMessage: action.value
        }
      }

    case 'SET_CARD_BRAND_VALUE':
      return {
        ...state, cardBrand: {
          ...state.cardBrand, value: action.value
        }
      }

    case 'SET_CARD_BRAND_COMPLETED':
      return {
        ...state, cardBrand: {
          ...state.cardBrand, isComplete: action.value
        }
      }

    case 'SET_CARD_BRAND_ERROR_MESSAGE':
      return {
        ...state, cardBrand: {
          ...state.cardBrand, errorMessage: action.value
        }
      }

    case 'SET_CARD_COMPANY_VALUE':
      return {
        ...state, cardCompany: {
          ...state.cardCompany, value: action.value
        }
      }

    case 'SET_CARD_COMPANY_COMPLETED':
      return {
        ...state, cardCompany: {
          ...state.cardCompany, isComplete: action.value
        }
      }

    case 'SET_CARD_COMPANY_ERROR_MESSAGE':
      return {
        ...state, cardCompany: {
          ...state.cardCompany, errorMessage: action.value
        }
      }

    case 'SET_CARD_EXPIRATION_VALUE':
      return {
        ...state, expiration: {
          ...state.expiration, value: action.value
        }
      }

    case 'SET_CARD_EXPIRATION_COMPLETED':
      return {
        ...state, expiration: {
          ...state.expiration, isComplete: action.value
        }
      }

    case 'SET_CARD_EXPIRATION_ERROR_MESSAGE':
      return {
        ...state, expiration: {
          ...state.expiration, errorMessage: action.value
        }
      }

    case 'SET_CARD_NAME_VALUE':
      return {
        ...state, name: {
          ...state.name, value: action.value
        }
      }

    case 'SET_CARD_NAME_COMPLETED':
      return {
        ...state, name: {
          ...state.name, isComplete: action.value
        }
      }

    case 'SET_CARD_NAME_ERROR_MESSAGE':
      return {
        ...state, name: {
          ...state.name, errorMessage: action.value
        }
      }

    case 'SET_CARD_CVC_VALUE':
      return {
        ...state, cvc: {
          ...state.cvc, value: action.value
        }
      }

    case 'SET_CARD_CVC_COMPLETED':
      return {
        ...state, cvc: {
          ...state.cvc, isComplete: action.value
        }
      }

    case 'SET_CARD_CVC_ERROR_MESSAGE':
      return {
        ...state, cvc: {
          ...state.cvc, errorMessage: action.value
        }
      }

    case 'SET_CARD_PASSWORD_VALUE':
      return {
        ...state, password: {
          ...state.password, value: action.value
        }
      }

    case 'SET_CARD_PASSWORD_COMPLETED':
      return {
        ...state, password: {
          ...state.password, isComplete: action.value
        }
      }

    case 'SET_CARD_PASSWORD_ERROR_MESSAGE':
      return {
        ...state, password: {
          ...state.password, errorMessage: action.value
        }
      }

    default:
      return (
        state
      )
  }
}

export default cardInfoReducer;