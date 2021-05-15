import { CONFIRM_MESSAGE } from "../constants";

const appConfirm = {
  confirmNickNameRegistration() {
    return window.confirm(CONFIRM_MESSAGE.OMIT_NICKNAME_REGISTRATION);
  },
};

export default appConfirm;
