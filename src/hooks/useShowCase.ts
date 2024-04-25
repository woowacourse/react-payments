import { useState } from 'react';
import { FORM_ITEM_NAME_LIST, FormItem } from '../constants/addNewCardFormItemNameList';

// 쇼케이스에 보여질 것인지 아닌지를 다루는 훅

// TODO: 지나치게 도메인 의존인 부분 제거해 범용성 확보
const useShowCase = (initialShowCaseValue: Record<string, boolean>) => {
  const [showCase, setShowCase] = useState(initialShowCaseValue);

  const addItemToShowCase = (item: FormItem) => {
    setShowCase({ ...showCase, [item]: true });
  };

  const resetShowCase = () => {
    setShowCase(initialShowCaseValue);
  };

  return { showCase, addItemToShowCase, resetShowCase };
};

export default useShowCase;
