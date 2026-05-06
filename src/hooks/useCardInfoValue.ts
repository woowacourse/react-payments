import { useState } from 'react';
import { isMonthMatch } from '../utils/isMonthMatch';

export const useCardInfoValue = () => {
    const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
    const [cardBrand, setCardBrand] = useState('');
    const [EXPNumbers, setEXPNumbers] = useState(['', '']);
    const [cvc, setCVC] = useState('');
    const [password, setPassword] = useState('');

    // TODO 뭐가 더 좋을지 나중에 고민해보자, 사용하는 곳에서는 지금이 더 명시적일 것 같은데 메서드끼리 의존이도가 높은 것 같네
    // TODO 그리고 isSatisfy.. 들의 뒷부분을 유틸화할지도?
    // const getStepByState = () => {
    //     // isCardNumber
    //     // isCardBrand
    //     // isEXPNumbers
    //     // isCVC
    //     // isPassword
    //     // 이렇게해서 단계를 return할까 아니면
    //     // isCardNumberSection
    //     // isCardBrandSection
    //     // ...
    //     // 이렇게 만들고 이 각각의 Section render해도 될지 여부를 나타내는 함수를 Wrapper에 전달해서 그거를 기반으로 렌더링시키게 할까
    // };

    const isSatisfyCardNumber = () => {
        return cardNumbers.every((n) => n.length === 4);
    };

    const isSatisfyCardBrand = () => {
        return isSatisfyCardNumber() && cardBrand;
    };

    const isSatisfyEXP = () => {
        return isSatisfyCardBrand() && !isMonthMatch(EXPNumbers[0]) && EXPNumbers[1].length === 2;
    };

    const isSatisfyCVC = () => {
        return isSatisfyEXP() && cvc.length === 3;
    };

    const isSatisfyPassword = () => {
        return isSatisfyCVC() && password.length === 2;
    };

    const setCardNumber = (index: number) => (value: string) => {
        setCardNumbers((prev) => prev.with(index, value));
    };

    const setEXPNumber = (index: number) => (value: string) => {
        setEXPNumbers((prev) => prev.with(index, value));
    };

    return {
        cardNumbers,
        setCardNumber,
        cardBrand,
        setCardBrand,
        EXPNumbers,
        setEXPNumber,
        cvc,
        setCVC,
        password,
        setPassword,
        isSatisfyCardNumber,
        isSatisfyCardBrand,
        isSatisfyEXP,
        isSatisfyCVC,
        isSatisfyPassword,
    };
};
