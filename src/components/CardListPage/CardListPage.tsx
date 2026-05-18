import { useEffect, useState } from 'react';

type State = 'idle' | 'loading' | 'success' | 'error';

type Card = {
  id: string;
  cardNumber: string;
  cardBrand: string;
  expireDate: string;
  cvc: string;
  cardPassword: string;
};

export function CardListPage() {
  const [state, setState] = useState<State>('idle');
  const [savedCard, setSavedCard] = useState<Card[]>([]);

  //idle -> loading -> fetch가 정상적으로 들어왔을때 200 -> success
  //idel -> loading -> fetch가 정상적으로 들어왔지만 빈 값일때 => success지만 다른 컴포넌트
  //idel -> loading -> fetch가 종상적으로 들어오지 못했을때 -> error
  useEffect(() => {
    const load = async () => {
      setState('loading');
      try {
        const response = await fetch('/cards');
        if (!response.ok) throw new Error('카드 목록을 불러오지 못했습니다');
        const data = await response.json();
        setSavedCard(data);
        setState('success');
      } catch {
        setState('error');
      }
    };
    load();
  }, []);

  if (state === 'idle') return <></>;
  if (state === 'loading') return <div>로딩</div>;
  if (state === 'success') return <div>확인</div>;
  if (state === 'error') return <div>에러</div>;
}
