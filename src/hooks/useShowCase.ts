import { useState } from 'react';
import { FORM_ITEM_NAME_LIST, FormItem } from '../constants/addNewCardFormItemNameList';

// 쇼케이스에 보여질 것인지 아닌지를 다루는 훅

// TODO: 지나치게 도메인 의존인 부분 제거해 범용성 확보
const useShowCase = () => {
  const [showCase, setShowCase] = useState<Record<FormItem, boolean>>({
    [FORM_ITEM_NAME_LIST.CARD_NUMBERS]: true,
    [FORM_ITEM_NAME_LIST.CARD_COMPANY]: false,
    [FORM_ITEM_NAME_LIST.EXPIRATION_DATE]: false,
    [FORM_ITEM_NAME_LIST.OWNER_NAME]: false,
    [FORM_ITEM_NAME_LIST.CVC_NUMBERS]: false,
    [FORM_ITEM_NAME_LIST.PASSWORD]: false,
  });

  const addItemToShowCase = (item: FormItem) => {
    setShowCase({ ...showCase, [item]: true });
  };

  return { showCase, addItemToShowCase };
};

export default useShowCase;
