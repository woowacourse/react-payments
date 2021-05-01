import { PAGE } from "./constants";

const router = {
  [PAGE.HOME.ID]: {
    id: PAGE.HOME.ID,
    headerText: PAGE.HOME.HEADER_TEXT,
    prevPage: "",
  },
  [PAGE.CARD_ADDITION.ID]: {
    id: PAGE.CARD_ADDITION.ID,
    headerText: PAGE.CARD_ADDITION.HEADER_TEXT,
    prevPage: PAGE.HOME.ID,
  },
  [PAGE.COMPLETE_CARD_ADDITION.ID]: {
    id: PAGE.COMPLETE_CARD_ADDITION.ID,
    headerText: PAGE.COMPLETE_CARD_ADDITION.HEADER_TEXT,
    prevPage: "",
  },
};

export default router;
