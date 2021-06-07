import { PAGE, throwError } from "../@shared/utils";

export const movePage = page => {
  if (!Object.values(PAGE).includes(page)) {
    throwError(`Invalid page: ${String(page)}`);
  }

  return { type: "page/move", payload: page };
};

let index = 0;
export const addNewCardInfo = newCardInfo => {
  index += 1;

  return { type: "cardInfo/add", payload: { id: index, ...newCardInfo } };
};

export const editCardInfo = ({ id, cardInfo }) => ({ type: "cardInfo/edit", payload: { id, cardInfo } });

const reducer = (state, action) => {
  switch (action.type) {
    case "page/move":
      return { ...state, page: action.payload };
    case "cardInfo/add":
      return {
        ...state,
        cardInfos: [...state.cardInfos, action.payload],
      };
    case "cardInfo/edit":
      return {
        ...state,
        cardInfos: state.cardInfos.map(info => (info.id === action.payload.id ? action.payload.cardInfo : info)),
      };
    default:
      return throwError(`Invalid action type: ${action.type}`);
  }
};

export default reducer;
