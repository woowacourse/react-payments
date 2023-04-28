import { renderHook, act } from '@testing-library/react';
import useCreditCard from './useCreditCard';
import CreditCardInfo from '../@types/creditCardInfo';
import { CardCompanyEng } from '../@types/cardCompany';

const initialCreditCardInfo: CreditCardInfo = {
  cardNumber: ['', '', '', ''],
  expirationDate: ['', ''],
  ownerName: '',
  securityCode: '',
  password: ['', ''],
  cardCompany: 'hyundai' as CardCompanyEng,
  cardAlias: '',
};
describe('useCreditCard 훅 테스트', () => {
  it('초기값이 잘 적용되었는지 확인', () => {
    const { result } = renderHook(() => useCreditCard(initialCreditCardInfo));

    expect(result.current.creditCard).toEqual(initialCreditCardInfo);
  });

  it('카드번호를 변경했을 때 잘 적용되었는지 확인', () => {
    const { result } = renderHook(() => useCreditCard(initialCreditCardInfo));

    act(() => {
      result.current.setCreditCard('cardNumber', ['1111', '2222', '3333', '4444']);
    });

    expect(result.current.creditCard.cardNumber).toEqual(['1111', '2222', '3333', '4444']);
  });

  it('카드 정보 초기화가 잘 적용되었는지 확인', () => {
    const { result } = renderHook(() => useCreditCard(initialCreditCardInfo));

    act(() => {
      result.current.setCreditCard('cardNumber', ['1111', '2222', '3333', '4444']);
    });

    act(() => {
      result.current.initCreditCard();
    });

    expect(result.current.creditCard).toEqual(initialCreditCardInfo);
  });
});
