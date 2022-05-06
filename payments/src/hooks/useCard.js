import { useReducer } from "react";

const validateCardNum = ({ cardNumber }) => {
  if (cardNumber.join("").length !== 16) {
    throw new Error("카드 번호를 16자리 모두 입력해주세요");
  }
};
const validateExpireDate = ({ expiredDate }) => {
  if (expiredDate[0] > 12) {
    throw new Error("월은 12월까지입니다.");
  }
  if (expiredDate.join("").length !== 4) {
    throw new Error("만료일을 정확히 입력해 주세요");
  }
};

const validateSecureCode = ({ secureCode }) => {
  if (secureCode.length < 3) {
    throw new Error("카드 뒷면의 보안코드 3자리를 입력해주세요");
  }
};
const validatePassword = ({ password }) => {
  if (password.join("").length !== 2) {
    throw new Error("비밀번호 앞 두자리를 입력해 주세요");
  }
};

const validateCardName = ({ cardName }) => {
  if (cardName === "") {
    throw new Error("카드 종류를 선택해주세요");
  }
};

const validateArray = [
  validateCardName,
  validateCardNum,
  validateExpireDate,
  validateSecureCode,
  validatePassword,
];

const updateCard = (state, action) => {
  switch (action.type) {
    case "cardNumber":
      return {
        ...state,
        cardNumber: [
          ...state.cardNumber.slice(0, action.payload.index),
          action.payload.value,
          ...state.cardNumber.slice(action.payload.index + 1),
        ],
      };
    case "expiredDate":
      return {
        ...state,
        expiredDate: [
          ...state.expiredDate.slice(0, action.payload.index),
          action.payload.value,
          ...state.expiredDate.slice(action.payload.index + 1),
        ],
      };
    case "ownerName":
      return {
        ...state,
        ownerName: action.payload.value,
      };
    case "secureCode":
      return {
        ...state,
        secureCode: action.payload.value,
      };
    case "password":
      return {
        ...state,
        password: [
          ...state.password.slice(0, action.payload.index),
          action.payload.value,
          ...state.password.slice(action.payload.index + 1),
        ],
      };
    case "pickColor":
      return {
        ...state,
        color: action.payload.color,
        cardName: action.payload.cardName,
      };
    case "nickname":
      return {
        ...state,
        nickname: action.payload.value,
      };
    default:
      return state;
  }
};

const useCard = () => {
  const initState = {
    cardNumber: ["", "", "", ""],
    expiredDate: ["", ""],
    ownerName: "",
    secureCode: "",
    password: ["", ""],
    cardName: "",
    color: "#d2d2d2",
    nickname: "",
  };

  const [cardInfo, dispatch] = useReducer(updateCard, initState);

  const validateCardInfo = () => {
    validateArray.forEach((validateFunc) => {
      validateFunc(cardInfo);
    });
  };

  return { cardInfo, dispatch, validateCardInfo };
};

export default useCard;
