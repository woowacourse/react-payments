"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGE = exports.MAX_LENGTH = exports.CARD_SIZE = exports.DEFAULT_ROUTE_INFO = exports.DEFAULT_CARD_INFO = void 0;
exports.DEFAULT_CARD_INFO = {
    cardNumber: {
        firstColumn: '',
        secondColumn: '',
        thirdColumn: '',
        forthColumn: '',
    },
    expirationDate: {
        month: '',
        year: '',
    },
    ownerName: '',
    securityCode: '',
    password: {
        firstNumber: '',
        secondNumber: '',
    },
    cardNickName: '',
};
exports.DEFAULT_ROUTE_INFO = {
    addCard: 'app',
    completeAddCard: 'app hide',
    cardList: 'app hide',
};
exports.CARD_SIZE = {
    SMALL: 'small',
    BIG: 'big',
};
exports.MAX_LENGTH = {
    CARD_NUMBER: 4,
    CARD_EXPIRATION_DATE: 2,
    CARD_OWNER_NAME: 30,
    CARD_SECURITY_CODE: 3,
    CARD_PASSWORD: 1,
    CARD_NICK_NAME: 15,
};
exports.PAGE = {
    ADD_CARD: 'addCardPage',
    COMPLETE_ADD_CARD: 'completeAddCardPage',
    CARD_LIST: 'cardListPage',
};
