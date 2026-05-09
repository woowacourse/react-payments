# 아키텍처 설계 결정 기록

react-payments 2단계 구현 과정에서 고민했던 설계 결정들과 그 근거를 정리한 문서.

---

## 1. 도메인 파일 분리 — cardPolicy.ts의 해체

### 최초 상태

`cardPolicy.ts` 하나에 카드사(company) 데이터, 카드 브랜드(brand) 데이터, 번호 형식, 이미지 경로, 마스킹 로직, 감지 로직이 모두 들어 있었다.

### 고민 지점

"cardPolicy.ts가 너무 많은 역할을 담당하고 있지 않은가?"

SRP 관점에서 분석했을 때 이 파일에 존재하는 코드의 **성격**이 최소 세 가지로 구분됐다:

- **카드사(Company)** : 사용자가 직접 선택하는 국내 카드사 — 이름, 배경색 (UI 선택 도구)
- **카드 브랜드(Brand)** : 카드 번호로 자동 감지되는 국제 브랜드 — 번호 형식, 로고 이미지 (감지 로직)
- **번호 마스킹** : 카드 번호를 표시할 때 일부를 가리는 유틸리티 (표시 가공)

카드사와 카드 브랜드는 서로 **의존하지 않는다**. 카드사 목록이 바뀌어도 브랜드 감지 로직은 영향을 받지 않고, 반대도 마찬가지다. 이처럼 서로 무관한 두 개념이 한 파일에 있으면, 한쪽을 수정할 때 다른 쪽까지 파일을 열어야 한다는 불필요한 부담이 생긴다.

### 결정

```
cardPolicy.ts (삭제)
├── cardCompany.ts    — CARD_COMPANIES, CardCompanyType
├── cardBrand.ts      — CARD_BRANDS, CardBrandType, getBrandName, DEFAULT_CARD_NUMBER_FORMAT
├── cardBrandMatchers.ts — matchVisa, matchMasterCard, matchAmex, matchDiners, matchUnionPay
└── cardNumberMask.ts — MASK_FROM_INDEX, maskCardNumbers
```

### 기준

**변경 이유가 같은 것끼리 묶고, 다른 것은 분리한다.** 카드사를 추가할 때 건드리는 파일(cardCompany.ts)과 새 브랜드를 추가할 때 건드리는 파일(cardBrand.ts + cardBrandMatchers.ts)이 달라야 각 파일이 단일 책임을 갖는다.

---

## 2. CARD_BRANDS 통합 — CardBrandType, CARD_FORMAT, BRAND_IMAGES를 하나로

### 최초 상태

```ts
export type CardBrandType = 'visa' | 'masterCard' | 'amex' | 'diners' | 'unionPay';
export const CARD_FORMAT: Record<CardBrandType, number[]> = { ... };
export const BRAND_IMAGES: Record<CardBrandType, string> = { ... };
```

새 브랜드를 추가하려면 세 곳을 모두 수정해야 했다.

### 고민 지점

이미지(BRAND_IMAGES)를 같이 넣는 것이 "도메인 파일에 UI 자원이 섞이는 것" 아닌가?

처음에는 "이미지는 presentation 관심사이니 컴포넌트에 두어야 한다"는 방향으로 생각했다. 그런데 BRAND_IMAGES가 이미 cardPolicy.ts(domain 파일)에 있다는 사실을 확인하고 나서 판단이 바뀌었다. 이미 domain 파일에 들어가 있다면, 같은 파일 안에서 분산시키는 것보다 하나의 객체로 묶는 것이 더 응집도가 높다.

### 결정

```ts
export const CARD_BRANDS = {
  visa:       { format: [4, 4, 4, 4], imageUrl: '/images/Visa.svg' },
  masterCard: { format: [4, 4, 4, 4], imageUrl: '/images/mastercard-logo.svg' },
  amex:       { format: [4, 6, 5],    imageUrl: '/images/amex-logo.svg' },
  diners:     { format: [4, 6, 4],    imageUrl: '/images/diners-logo.svg' },
  unionPay:   { format: [4, 4, 4, 4], imageUrl: '/images/unionpay-logo.svg' },
} as const;

export type CardBrandType = keyof typeof CARD_BRANDS;
```

`as const`를 사용해 객체의 모든 값을 리터럴 타입으로 좁히고, `keyof typeof`로 CardBrandType을 자동 파생시켰다. 새 브랜드 추가 시 CARD_BRANDS 하나만 수정하면 나머지가 자동으로 따라온다.

### 기준

**SSOT(Single Source of Truth)** : 같은 개념(브랜드)에 관한 데이터가 여러 곳에 분산되어 있으면 하나가 빠지거나 어긋날 위험이 있다. 한 객체로 관리하면 "이 브랜드에 대한 모든 정보는 여기 있다"는 명확한 기준점이 생긴다.

---

## 3. BRAND_MATCHERS를 CARD_BRANDS에 합치지 않은 이유

### 고민 지점

"CARD_BRANDS의 각 브랜드 항목에 `match` 함수를 추가하면 완전한 SSOT가 되지 않을까?"

```ts
// 논의했지만 채택하지 않은 방식
const CARD_BRANDS = {
  visa: { format: [...], imageUrl: '...', match: matchVisa },
  ...
};
```

### 결정 — 분리 유지

세 가지 이유로 합치지 않았다.

**첫째, 관심사 혼재.** `format`과 `imageUrl`은 브랜드의 **데이터**(정적 속성)이고, `match`는 브랜드를 **식별하는 로직**(동작)이다. 성격이 다른 것을 같은 객체에 담으면 객체가 갖는 의미가 흐려진다.

**둘째, 감지 순서 의존성.** 현재 BRAND_MATCHERS 배열은 순서가 명시적이다. UnionPay 감지 조건이 Visa(첫 자리 '4')보다 먼저 매칭될 수도 있는 상황에서, 배열은 순서를 코드로 표현하는 가장 명확한 방법이다. `Object.entries(CARD_BRANDS)`로 순서를 맡기면 이 의도가 묵시적이 된다.

**셋째, `as const`와 함수 혼용 시 타입 복잡도 증가.** 함수가 포함된 객체에 `as const`를 적용하면 함수 타입이 `readonly`로 추론되고, `getBrandName`의 구현도 `Object.entries` 순회 방식으로 바뀌어야 한다.

---

## 4. fieldState.ts 위치 — hooks 폴더로 이동

### 최초 상태

```ts
// useCardNumbers.ts, useExpiryDate.ts, useCvcNumber.ts 모두
import {createFlags, computeNextErrorInfo} from '../components/InfoInputSection/fieldState';
```

hooks 폴더가 components 폴더를 import하고 있었다.

### 문제

의존성 방향이 역전되어 있었다. 일반적으로 hooks는 UI에 무관한 순수 로직이고, components는 hooks를 사용하는 소비자다. 그런데 hooks가 components 폴더 안의 파일을 참조하면, 이 hooks를 다른 컴포넌트에서 재사용할 때 InfoInputSection 폴더까지 함께 따라다닌다는 의존성이 생긴다.

### 결정

`fieldState.ts`를 `hooks/` 폴더로 이동. 세 훅 모두 `'./fieldState'`로 경로 수정.

### 기준

**의존 방향은 단방향이어야 한다.** `components → hooks`는 자연스럽지만 `hooks → components`는 역방향이다. 공유 유틸리티는 사용자보다 낮은 계층(또는 공통 위치)에 있어야 한다.

---

## 5. 커스텀 훅 설계 — useCardNumbers, useCompanySelect, useExpiryDate, useCvcNumber

### 공통 인터페이스 패턴

네 훅 모두 동일한 반환 구조를 갖는다:

```ts
return {
  // 상태 값
  [fieldValue],
  // 완료/에러 여부
  isComplete,
  hasAnyError,
  firstErrorIdx,
  errorMsg,
  // 이벤트 핸들러
  handleChange,
  handleBlur,
};
```

이 패턴은 **컴포넌트가 훅을 어떻게 쓸지**를 먼저 설계한 결과다. 컴포넌트는 "이 필드가 완료됐는가", "어떤 에러를 보여줄까", "입력 이벤트를 어떻게 처리할까"만 알면 된다. 내부적으로 touched 상태를 어떻게 추적하는지, 에러 우선순위를 어떻게 계산하는지는 훅 안에 캡슐화했다.

`useCompanySelect`도 같은 인터페이스를 따른다. 내부적으로는 `useState<CardCompanyType | null>(null)` 하나지만, `isComplete: selectedCompany !== null`을 노출함으로써 나머지 세 훅과 동일한 방식으로 사용할 수 있다.

### useCardNumbers의 특수성 — 동적 format

AMEX(4-6-5)와 Diners(4-6-4)는 다른 카드들(4-4-4-4)과 그룹 수 자체가 다르다. 카드 번호 입력 중간에 브랜드가 감지되면 input 개수가 바뀌어야 한다.

이 문제를 해결하기 위해 두 가지 설계 결정이 필요했다:

**첫째, `cardNumbers`를 고정 튜플이 아닌 `string[]`로 관리.**
처음에는 `[string, string, string, string]` 튜플을 사용했지만, AMEX는 3개 그룹이라 튜플로 표현할 수 없다. `string[]`으로 바꾸고 `format` 배열의 길이에 맞춰 동적으로 관리한다.

**둘째, `applyResize` 함수.**
format이 바뀔 때 단순히 배열 길이만 조정하면 안 된다. 기존에 입력된 값이 새 format의 `maxLength`를 초과할 경우 잘라내야 하고(그렇지 않으면 maxLength=4인 칸에 6자리가 남아 수정 불가), `errorInfo`와 `isTouched` 배열도 같은 길이로 맞춰야 한다.

```ts
const applyResize = (nextChunks: string[], nextFormat: number[]) => {
  const len = nextFormat.length;
  const trimmed = Array.from({length: len}, (_, i) => (nextChunks[i] ?? '').slice(0, nextFormat[i]));
  // ...
};
```

### getBrandName 중복 호출 제거

초기에는 `getCardNumberFormat(cardNumbers)`라는 함수 안에서 `getBrandName`을 호출하고, 훅 본체에서도 `brand = getBrandName(cardNumbers)`를 다시 호출했다. 같은 입력으로 같은 계산을 두 번 했다.

```ts
// Before: getBrandName이 2번 호출됨
const getCardNumberFormat = (cardNumbers: string[]) => {
  const brand = getBrandName(cardNumbers);
  return brand ? [...CARD_BRANDS[brand].format] : DEFAULT_CARD_NUMBER_FORMAT;
};
const brand = getBrandName(cardNumbers);

// After: brand를 인자로 받아 재사용
const getFormatByBrand = (brand: CardBrandType | null) =>
  brand ? [...CARD_BRANDS[brand].format] : DEFAULT_CARD_NUMBER_FORMAT;

const brand = getBrandName(cardNumbers);
const format = getFormatByBrand(brand);
```

---

## 6. ExpiryField·CvcField Props 설계 — ReturnType vs 명시적 인터페이스

### 초기 방식 — ReturnType 사용

```ts
type Props = ReturnType<typeof useExpiryDate>;
```

이 방식은 편리하다. 훅의 반환 타입을 그대로 Props로 쓰기 때문에 타입을 중복 선언하지 않아도 된다.

### 문제

컴포넌트가 훅에 **구조적으로 종속**된다. `useExpiryDate`의 반환값에 새로운 속성이 추가되면 ExpiryField의 Props 타입도 자동으로 넓어진다. 반대로 훅의 반환값 중 하나를 삭제하거나 이름을 바꾸면 컴포넌트가 바로 깨진다.

컴포넌트는 "내가 필요한 것만 받겠다"고 선언해야 독립적으로 재사용·테스트할 수 있다. NumberField가 명시적 Props를 갖고 있어서 다른 맥락에서도 쉽게 쓸 수 있는 것처럼.

### 결정 — 명시적 인터페이스

```ts
type Props = {
  expiryMonth: string;
  expiryYear: string;
  firstErrorIdx: number;
  errorMsg: string;
  handleMonthChange: (value: string) => void;
  handleYearChange: (value: string) => void;
  handleBlur: (index: number, value: string, type: 'month' | 'year') => void;
};
```

### 기준

**컴포넌트는 훅을 모른다.** 컴포넌트는 자신이 렌더링에 필요한 값과 이벤트 핸들러를 Props로 선언하고, 그 Props를 어디서 채워주는지는 관심이 없어야 한다.

---

## 7. InfoInputSection의 fields 배열 패턴

### 초기 방식 — 조건부 렌더링

```tsx
return (
  <>
    <NumberField ... />
    {showCompanySelect && <BrandSelectField ... />}
    {showExpiry && <ExpiryField ... />}
    {showCvc && <CvcField ... />}
  </>
);
```

### 고민 지점

필드가 늘어날수록 조건부 렌더링이 JSX 안에 분산된다. 각 필드마다 제목, 설명, 레이블이 있는데, 이를 반복 구조로 표현하지 않으면 새 필드를 추가할 때 서로 다른 패턴으로 작성될 위험이 있다.

### 결정 — 선언적 배열

```ts
const fields = [
  { show: showCvc,           title: 'CVC 번호를 입력해 주세요',         label: 'CVC',    node: <CvcField {...cvcField} /> },
  { show: showExpiry,        title: '카드 유효기간을 입력해 주세요',      label: '유효기간', node: <ExpiryField {...expiryField} /> },
  { show: showCompanySelect, title: '카드사를 선택해 주세요',             node: <BrandSelectField ... /> },
  { show: true,              title: '결제할 카드 번호를 입력해 주세요',   label: '카드 번호', node: <NumberField ... /> },
];

return fields.filter(f => f.show).map((f, i) => (
  <InputContainer key={i} title={f.title} label={f.label}>{f.node}</InputContainer>
));
```

### 기준

**데이터와 렌더링을 분리한다.** "어떤 필드를 보여줄까"(데이터)와 "어떻게 보여줄까"(렌더링)를 분리하면, 새 필드를 추가할 때 배열에 항목 하나를 추가하는 것으로 끝난다. 렌더링 로직은 건드리지 않아도 된다.

배열의 순서가 곧 렌더 순서(역순 누적 방식 — 새 필드가 위에 쌓임)이므로, 순서 변경도 배열 내 위치만 바꾸면 된다.

---

## 8. CardPreviewContainer에서 getBrandName 직접 호출 제거

### 최초 상태

```tsx
// CardPreviewContainer.tsx
import {getBrandName} from '../../../domain/cardBrand';

<CardBrandLogo brandName={getBrandName(cardNumbers)} />
```

### 문제

`useCardNumbers` 훅이 이미 `brand`를 반환한다. CardRegisterPage가 이 훅을 사용하고 있으므로 `brand`는 이미 계산된 값이다. CardPreviewContainer가 동일한 `cardNumbers`로 `getBrandName`을 다시 호출하는 것은 중복 계산이다.

더 큰 문제는 **컴포넌트가 불필요한 도메인 의존성을 갖는다**는 것이다. CardPreviewContainer는 카드 브랜드를 **표시**하는 역할인데, 브랜드를 **감지**하는 로직에도 의존하게 된다.

### 결정

`brand`를 prop으로 내려보낸다. CardRegisterPage → CardPreviewSection → CardPreviewContainer 경로로 `numberField.brand`를 전달.

```tsx
// CardRegisterPage
<CardPreviewSection brand={numberField.brand} ... />

// CardPreviewContainer: getBrandName import 제거
<CardBrandLogo brandName={brand} />
```

### 기준

**데이터의 흐름은 단방향이어야 한다.** 이미 계산된 값을 같은 레벨의 다른 컴포넌트가 다시 계산하는 것은 상태 관리의 책임 경계가 불분명하다는 신호다. 계산 책임은 훅에, 전달 책임은 페이지 컴포넌트에 둔다.

---

## 9. CardNumbersType 삭제 — string[] 직접 사용

### 최초 상태

```ts
// src/common/types/CardInfoType.ts
export type CardNumbersType = string[];
```

이 타입이 7개 파일에서 import되고 있었다.

### 고민 지점

`CardNumbersType = string[]`은 `string[]`에 이름만 붙인 것이다. 타입 별칭이 의미를 추가하려면 그 이름이 "이것이 단순 string 배열이 아닌 카드 번호 배열임"을 알아야 할 때 가치가 있다. 그러나 파라미터 이름(`cardNumbers`)이 이미 그 의미를 전달한다.

반면 이 타입을 위한 별도 파일을 유지하면:
- 변경 시 7개 파일을 모두 수정해야 하는 간접 계층이 생긴다
- `string[]`으로 충분한 곳에서 불필요한 import가 붙는다

### 결정

파일 삭제. 모든 사용처를 `string[]`으로 직접 교체.

### 기준

**추상화는 복잡성을 숨길 때만 가치가 있다.** `string[]`의 별칭은 복잡성을 숨기지 않는다. 추상화 비용(파일, import, 간접 계층)이 추상화 이익(명확성)보다 크면 추상화를 제거하는 것이 낫다.

---

## 10. 단계별 노출 플래그 — 상태가 아닌 파생값으로 관리

### 설계

```ts
// useCardRegisterForm 내부
const showCompanySelect = numberField.isComplete;
const showExpiry = showCompanySelect && companyField.isComplete;
const showCvc = showExpiry && expiryField.isComplete;
const isFormComplete = showCvc && cvcField.isComplete;
```

각 단계의 표시 여부를 `useState`로 관리하지 않고, 기존 상태에서 **파생**했다.

### 이유

각 단계가 별도 상태라면 훅 상태가 바뀔 때 단계 상태도 동기화해야 한다. 동기화 코드가 필요하면 두 상태가 어긋날 가능성이 생긴다. 파생값은 동기화가 필요 없다 — 항상 최신 상태를 반영한다.

체이닝 구조(`showExpiry = showCompanySelect && ...`)는 "카드사를 선택하지 않으면 유효기간 단계가 열리지 않는다"는 **비즈니스 규칙을 코드가 직접 표현**한다.

네 필드 훅 모두 `isComplete`를 반환하는 통일된 인터페이스 덕분에 파생 조건이 `companyField.isComplete`처럼 일관된 형태로 표현된다. `selectedCompany !== null`이라는 원시 조건이 노출되지 않는다.

---

## 11. CardBrandMatchers — inRange 헬퍼 추출

### 최초 상태 — matchUnionPay

```ts
const matchUnionPay = (prefix: string) => {
  if (prefix.length >= 6) {
    const n6 = Number(prefix.slice(0, 6));
    if (n6 >= 622126 && n6 <= 622925) return true;
  }
  if (prefix.length >= 4) {
    const n4 = Number(prefix.slice(0, 4));
    if (n4 >= 6282 && n4 <= 6288) return true;
  }
  if (prefix.length >= 3) {
    const n3 = Number(prefix.slice(0, 3));
    if (n3 >= 624 && n3 <= 626) return true;
  }
  return false;
};
```

### 문제

"길이 확인 → 앞 N자리 추출 → 범위 비교" 패턴이 세 번 반복된다. 반복 패턴은 헬퍼로 추출해야 한다는 신호다.

또한 `matchMasterCard`에서도 같은 패턴이 있었는데, `Number(prefix.slice(0, 2))`의 `2`가 의미 없는 숫자처럼 보였다.

### 결정

```ts
const inRange = (prefix: string, length: number, min: number, max: number) => {
  if (prefix.length < length) return false;
  const n = Number(prefix.slice(0, length));
  return n >= min && n <= max;
};

const matchMasterCard = (prefix: string) => inRange(prefix, 2, 51, 55);

const matchUnionPay = (prefix: string) =>
  inRange(prefix, 6, 622126, 622925) ||
  inRange(prefix, 4, 6282, 6288) ||
  inRange(prefix, 3, 624, 626);
```

`inRange(prefix, 2, 51, 55)`은 "prefix의 앞 2자리가 51~55 사이인가"를 선언적으로 읽을 수 있다.

---

## 12. handleSubmit 추출 — JSX에서 로직 분리

### 최초 상태

```tsx
<SubmitButton
  onClick={() =>
    navigate('/complete', {
      state: {
        cardPrefix: numberField.cardNumbers[0],
        companyName: selectedCompany ? CARD_COMPANIES[selectedCompany].name : '',
      },
    })
  }
>
  확인
</SubmitButton>
```

### 문제

JSX의 이벤트 핸들러에 navigate 경로, state 구성 로직이 직접 들어가 있다. JSX는 "무엇을 렌더링하는가"를 표현해야 하는데, "확인을 누르면 어떤 데이터를 어디로 보내는가"라는 비즈니스 로직이 섞여 있다.

### 결정

```ts
// useCardRegisterForm 내부
const handleSubmit = () => {
  navigate('/complete', {
    state: {
      cardPrefix: numberField.cardNumbers[0],
      companyName: companyField.selectedCompany
        ? CARD_COMPANIES[companyField.selectedCompany].name
        : '',
    },
  });
};
```

```tsx
// CardRegisterPage JSX
{isFormComplete && <SubmitButton onClick={handleSubmit}>확인</SubmitButton>}
```

### 기준

**JSX는 선언적이어야 한다.** JSX를 읽을 때 "이 버튼은 확인 버튼이고, 폼이 완성됐을 때 보인다"는 것만 알면 충분하다. 클릭 시 어떤 일이 일어나는지는 함수 이름(`handleSubmit`)이 대신 전달한다.

`handleSubmit`은 navigate 경로와 state 구성을 담당하는 폼 제출 로직이다. 렌더링과 무관하므로 `useCardRegisterForm` 안에 있는 것이 자연스럽다 (섹션 18 참고).

---

## 13. as const와 keyof typeof 패턴

### 핵심 개념

```ts
export const CARD_COMPANIES = {
  bc: { name: 'BC카드', color: '#F04651' },
  ...
} as const;

export type CardCompanyType = keyof typeof CARD_COMPANIES;
```

`as const` 없이는 `keyof typeof`가 `string`을 반환한다. TypeScript가 객체를 `{ bc: { name: string, color: string }, ... }`로 추론하기 때문에 키 타입도 그냥 `string`이 된다.

`as const`를 붙이면 모든 값이 리터럴 타입으로 좁혀지고, 키도 `'bc' | 'shinhan' | ...`으로 정확하게 추론된다.

이 패턴의 장점은 **타입이 값에서 자동 파생**된다는 것이다. CARD_COMPANIES에 새 카드사를 추가하면 CardCompanyType에 자동으로 포함된다. 타입을 별도로 유지·관리할 필요가 없다.

---

## 14. fieldState.ts 유틸리티 — 순수 함수로 공유

### 배경

세 훅(useCardNumbers, useExpiryDate, useCvcNumber)은 모두 동일한 검증 상태 구조를 갖는다:

- `flag: boolean[]` — 각 입력 칸에 에러가 있는지
- `messages: string[]` — 각 입력 칸의 에러 메시지
- `isTouched: boolean[]` — 각 입력 칸을 사용자가 한 번이라도 건드렸는지

이 세 배열을 매번 독립적으로 구현하면 패턴이 분산되고 수정 시 세 곳을 모두 바꿔야 한다.

### 결정 — 순수 함수 추출

```ts
// flag / isTouched 초기값 생성
export const createFlags = (count: number): boolean[] =>
  Array.from({length: count}, () => false);

// index 위치를 touched로 표시 (나머지는 유지)
export const computeNextTouched = (prev: boolean[], index: number) =>
  prev.map((touched, i) => (i === index ? true : touched));

// 한 인덱스의 에러 상태를 갱신하고, 파생값(firstErrorIdx, hasAnyError, currentErrorMsg)까지 함께 반환
export const computeNextErrorInfo = (
  prevFlag: boolean[],
  prevMessages: string[],
  index: number,
  hasError: boolean,
  errorMsg: string,
) => {
  const flag = prevFlag.map((f, i) => (i === index ? hasError : f));
  const messages = prevMessages.map((m, i) => (i === index ? (hasError ? errorMsg : '') : m));
  const firstErrorIdx = flag.indexOf(true);
  const hasAnyError = firstErrorIdx !== -1;
  return {flag, messages, currentErrorMsg: hasAnyError ? messages[firstErrorIdx] : '', hasAnyError};
};
```

### 기준

**순수 함수는 React 상태 바깥에서 살아야 한다.** 이 세 함수는 React에 의존하지 않는다. `prev` 배열을 받아 새 배열을 반환할 뿐이다. 덕분에:

- 훅의 `useState setter` 안에서도, 이벤트 핸들러 안에서도 자유롭게 호출할 수 있다.
- 로직 자체를 독립적으로 테스트할 수 있다.
- 세 훅의 검증 갱신 패턴이 완전히 동일해진다.

`computeNextErrorInfo`가 `flag`, `messages` 갱신과 `firstErrorIdx`, `hasAnyError`, `currentErrorMsg` 도출을 한 번에 처리하는 것도 이 이유에서다. 세 훅 모두 이 한 번의 호출로 상태와 파생값을 동시에 얻는다.

---

## 15. 에러 노출 전략 — touched 기반 지연과 즉시 해제

### 문제

카드 번호 입력 필드가 처음 렌더링되는 시점에 에러를 보여주면 안 된다. 사용자가 아무것도 입력하지 않았는데 "카드 번호를 입력해 주세요"가 뜨는 것은 나쁜 UX다.

그렇다고 blur 시에만 에러를 갱신하면, 이미 에러가 표시된 상태에서 값을 올바르게 고쳐도 에러가 사라지지 않는 문제가 생긴다.

### 결정 — 두 가지 규칙

**규칙 1: 에러는 blur 이후에만 표시된다.**

`isTouched[index]`가 `false`인 동안은 검증 결과를 계산하지 않는다. 처음 blur가 발생하면 `computeNextTouched`로 해당 인덱스를 `true`로 표시하고, 그때부터 에러를 노출한다.

**규칙 2: 에러는 정확한 값이 입력되는 순간 즉시 해제된다.**

```ts
// useCardNumbers — handleChange 내부
if (isTouched[index] && value.length === nextFormat[index]) {
  setErrorInfo(computeNextErrorInfo(..., false, ...)); // 에러 없음으로 즉시 갱신
}
```

touched 상태이고 값이 완성되면 blur를 기다리지 않고 onChange 시점에 에러를 해제한다. "이미 틀렸다고 표시된 칸을 고쳤을 때 즉각 피드백"이 목표다.

### useExpiryDate의 추가 결정 — blur 시 0 패딩

유효기간의 월(MM) 필드에 "1"을 입력하고 blur하면 "01"로 자동 채워진다. `fillZero` 함수가 이를 담당한다.

```ts
const fillZero = (value: string, type: 'month' | 'year') => {
  if (type === 'month' && value.length === 1 && value !== '0') return `0${value}`;
  if (type === 'year' && value.length === 1) return `0${value}`;
  return undefined;
};
```

blur 시점에 `fillZero`를 적용한 뒤 검증을 수행한다. 사용자가 "1"만 입력해도 유효한 "01"로 처리되므로 입력 부담이 줄어든다.

---

## 16. 자동 포커스 이동 — 컴포넌트 책임

### 문제

카드 번호 필드는 4개(또는 3개)의 input으로 나뉜다. 첫 번째 칸을 다 채우면 다음 칸으로 커서가 자동으로 넘어가야 한다. 이 로직을 어디에 둘 것인가?

### 고민

훅에 두면 훅이 DOM 참조를 알아야 한다. 훅은 원래 UI에 무관한 순수 로직을 담는 곳이다. DOM 조작을 훅에 넣으면 훅이 특정 렌더링 구조에 의존하게 된다.

### 결정 — 컴포넌트(NumberField, ExpiryField)에서 처리

```tsx
// NumberField.tsx
const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

const handleChange = (index: number, value: string) => {
  onChange(index, value);
  if (value.length === format[index] && /^\d+$/.test(value) && index < format.length - 1) {
    inputRefs.current[index + 1]?.focus();
  }
};
```

컴포넌트가 ref 배열을 관리하고, 현재 칸이 꽉 찼을 때 다음 ref에 focus를 준다. 훅의 `onChange`는 값 갱신만 담당한다.

ExpiryField도 동일하다. 월 입력이 2자리로 완성되면 연도 input으로 포커스가 이동한다.

### 기준

**DOM 조작은 컴포넌트의 책임이다.** 자동 포커스 이동은 "어떤 입력이 들어왔을 때 어느 DOM 요소를 focus할 것인가"라는 UI 동작이다. 이 결정을 훅이 아닌 컴포넌트에 두면, 훅을 다른 UI에서 재사용할 때 포커스 전략을 바꾸기 쉽다.

---

## 17. 훅 내부 추가 분리 여부 — 적절한 수준 판단

### 고민 지점

세 훅 각각의 내부에서 더 분리가 필요한지 검토했다.

**useCardNumbers (90줄)** 내부에는:
- `getFormatByBrand` — 1줄 순수 함수 (모듈 레벨)
- `buildErrorMsg` — 1줄 문자열 생성 (모듈 레벨)
- `applyResize` — format 변경 시 세 state setter를 동시에 조정하는 로컬 함수

**useExpiryDate (84줄)** 내부에는:
- `isValidMonth`, `isValidExpiry`, `fillZero` — 2~4줄 순수 함수 (모듈 레벨)
- `updateErrorInfo`, `clearErrorWhenComplete` — 로컬 헬퍼

### 결정 — 현 수준 유지

각 분리 후보를 개별적으로 판단했다.

**모듈 레벨 순수 함수들 (`isValidMonth`, `isValidExpiry`, `fillZero`, `getFormatByBrand`, `buildErrorMsg`) → 분리 불필요.**

2~4줄짜리 함수들이고, 각각 해당 훅에서만 사용된다. 별도 파일로 빼면 파일 수는 늘지만 응집도는 오히려 떨어진다. 이 함수들은 훅의 검증 로직이 바뀔 때 함께 바뀌어야 하는 것들 — 변경 이유가 같으므로 같은 파일에 있어야 한다.

**`applyResize` → 분리 불가.**

```ts
const applyResize = (nextChunks: string[], nextFormat: number[]) => {
  setCardNumbers(trimmed);        // state setter 직접 호출
  setErrorInfo(prev => ...);     // state setter 직접 호출
  setIsTouched(prev => ...);     // state setter 직접 호출
};
```

`setCardNumbers`, `setErrorInfo`, `setIsTouched` 세 setter에 직접 의존한다. 외부로 추출하려면 세 setter를 인자로 받아야 하는데, 그러면 호출부가 오히려 복잡해지고 결합도가 증가한다. 함수가 조작하는 상태와 같은 스코프에 있는 것이 자연스럽다.

### 기준

**분리의 기준은 크기가 아니라 변경 이유다.** 45~90줄은 읽기 부담 없는 크기이고, 각 훅의 책임은 "해당 필드의 상태 관리" 하나로 명확하다. 추상화는 복잡성을 숨기거나 재사용성을 높일 때만 가치가 있다 — 파일 수를 늘리는 것 자체가 목적이 되어선 안 된다.

---

## 18. useCardRegisterForm — 페이지 컴포넌트는 렌더링만 한다

### 최초 상태

```tsx
// CardRegisterPage
const numberField = useCardNumbers();
const companyField = useCompanySelect();
const expiryField = useExpiryDate();
const cvcField = useCvcNumber();
const navigate = useNavigate();

const showCompanySelect = numberField.isComplete;
const showExpiry = ...;
const showCvc = ...;
const isFormComplete = ...;

const handleSubmit = () => { navigate(...) };

return <JSX />;
```

페이지 컴포넌트가 4개의 훅 호출, step 가시성 계산, 제출 로직, JSX 렌더링을 모두 담당하고 있었다.

### 고민 지점

"페이지 컴포넌트가 폼 상태 로직을 직접 알아야 하는가?"

step 계산(`showExpiry = showCompanySelect && ...`)은 비즈니스 규칙이다. `handleSubmit`은 navigate 경로와 전송 데이터를 구성하는 로직이다. 이것들은 렌더링과 무관하다. 페이지 컴포넌트가 이를 직접 담으면 "어디에 무엇을 입력하면 어떤 화면이 나오는가"라는 UI 구조를 파악하기 위해 상태 로직까지 함께 읽어야 한다.

### 결정 — useCardRegisterForm으로 위임

```ts
// useCardRegisterForm.ts
export function useCardRegisterForm() {
  const numberField = useCardNumbers();
  const companyField = useCompanySelect();
  const expiryField = useExpiryDate();
  const cvcField = useCvcNumber();
  const navigate = useNavigate();

  const showCompanySelect = numberField.isComplete;
  const showExpiry = showCompanySelect && companyField.isComplete;
  const showCvc = showExpiry && expiryField.isComplete;
  const isFormComplete = showCvc && cvcField.isComplete;

  const handleSubmit = () => {
    navigate('/complete', {
      state: {
        cardPrefix: numberField.cardNumbers[0],
        companyName: companyField.selectedCompany
          ? CARD_COMPANIES[companyField.selectedCompany].name
          : '',
      },
    });
  };

  return { numberField, companyField, expiryField, cvcField,
           showCompanySelect, showExpiry, showCvc, isFormComplete, handleSubmit };
}
```

```tsx
// CardRegisterPage.tsx — 렌더링만 남는다
const CardRegisterPage = () => {
  const { numberField, companyField, expiryField, cvcField,
          showCompanySelect, showExpiry, showCvc, isFormComplete, handleSubmit } = useCardRegisterForm();

  return (
    <Wrapper>
      <CardPreviewSection ... />
      <InfoInputSection ... />
      {isFormComplete && <SubmitButton onClick={handleSubmit}>확인</SubmitButton>}
    </Wrapper>
  );
};
```

### 기준

**페이지 컴포넌트는 "무엇을 어떻게 보여주는가"만 담당한다.** "어떤 조건일 때 다음 단계가 열리는가", "제출 시 어떤 데이터를 어디로 보내는가"는 폼 로직이지 렌더링 로직이 아니다. 이 구분이 명확할수록 페이지 컴포넌트는 UI 구조를 한눈에 파악할 수 있는 문서가 된다.

`useNavigate`가 훅이기 때문에 커스텀 훅 안에서 호출할 수 있다. `handleSubmit`을 페이지에 남기지 않아도 되는 이유다.

---

## 설계 원칙 요약

| 원칙 | 적용 사례 |
|---|---|
| **변경 이유가 같은 것끼리 묶는다** | cardPolicy.ts 분리, CARD_BRANDS 통합 |
| **의존 방향은 단방향** | fieldState.ts를 hooks 폴더로 이동 |
| **컴포넌트는 훅을 모른다** | ExpiryField·CvcField 명시적 Props |
| **이미 계산된 값을 다시 계산하지 않는다** | brand를 prop으로 전달 |
| **파생값은 상태로 관리하지 않는다** | showCompanySelect, showExpiry 등 |
| **JSX는 선언적이어야 한다** | handleSubmit 추출, fields 배열 패턴 |
| **추상화 비용 > 추상화 이익이면 제거한다** | CardNumbersType 삭제 |
| **SSOT — 같은 개념의 데이터는 한 곳에** | CARD_BRANDS 통합, keyof typeof 파생 |
| **공유 로직은 순수 함수로 추출한다** | fieldState.ts 유틸리티 (createFlags 등) |
| **에러는 사용자가 건드린 뒤에만 노출한다** | touched 기반 지연 + 완성 시 즉시 해제 |
| **DOM 조작은 컴포넌트의 책임이다** | 자동 포커스 이동을 훅이 아닌 컴포넌트에서 처리 |
| **페이지 컴포넌트는 렌더링만 한다** | useCardRegisterForm으로 폼 로직·step 계산·제출 로직 위임 |
