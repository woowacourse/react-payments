import axios from "axios";

axios.defaults.baseURL = "https://woowa-payments-api.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

export { getCardType } from "./cardType";
export { getCardList, postCardList, putCardDescription, deleteCardList } from "./cardList";
