import axios from "axios";

import cardType from "./cardType";
import cardList from "./cardList";

axios.defaults.baseURL = "http://woowa-payments-api.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";


const apiRequest = {
  cardType,
  cardList,
};

export default apiRequest;