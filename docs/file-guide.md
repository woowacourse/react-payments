# 파일별 코드 가이드

---

## 계층 구조 한눈에 보기

```
CardRegisterPage
    └── useCardRegisterForm          ← 폼 전체 오케스트레이션
            ├── useCardNumbers       ┐
            ├── useCompanySelect     ├── 필드별 상태 훅
            ├── useExpiryDate        │
            └── useCvcNumber         ┘
                    └── fieldState.ts ← 순수 함수 유틸리티

CardRegisterPage
    ├── CardPreviewSection
    │       └── CardPreviewContainer
    └── InfoInputSection
            ├── NumberField
            ├── BrandSelectField
            ├── ExpiryField
            └── CvcField

domain/
    ├── cardBrand.ts         ← CARD_BRANDS, getBrandName
    ├── cardBrandMatchers.ts ← match 함수들
    ├── cardCompany.ts       ← CARD_COMPANIES
    └── cardNumberMask.ts    ← maskCardNumbers
```

---

## 1. Domain 계층

### cardCompany.ts

```ts
export const CARD_COMPANIES = {
  bc: {name: 'BC카드', color: '#F04651'},
  shinhan: {name: '신한카드', color: '#0046FF'},
  ...
} as const;

export type CardCompanyType = keyof typeof CARD_COMPANIES;
```

사용자가 **직접 선택**하는 국내 카드사 데이터. 이름과 배경색만 갖는다.

`as const`로 값을 리터럴 타입으로 고정하고, `keyof typeof`로 `CardCompanyType`을 자동 파생시킨다. 카드사를 추가하면 `CARD_COMPANIES`에만 항목을 넣으면 되고, 타입은 자동으로 따라온다.

---

### cardBrand.ts

```ts
export const CARD_BRANDS = {
  visa:       {format: [4, 4, 4, 4], imageUrl: '/images/Visa.svg'},
  masterCard: {format: [4, 4, 4, 4], imageUrl: '/images/mastercard-logo.svg'},
  amex:       {format: [4, 6, 5],    imageUrl: '/images/amex-logo.svg'},
  diners:     {format: [4, 6, 4],    imageUrl: '/images/diners-logo.svg'},
  unionPay:   {format: [4, 4, 4, 4], imageUrl: '/images/unionpay-logo.svg'},
} as const;

export const DEFAULT_CARD_NUMBER_FORMAT = [4, 4, 4, 4];
export type CardBrandType = keyof typeof CARD_BRANDS;

const MAX_BRAND_PREFIX_LENGTH = 6;

const BRAND_MATCHERS = [
  {brand: 'visa',       match: matchVisa},
  {brand: 'masterCard', match: matchMasterCard},
  ...
];

export const getBrandName = (cardNumbers: string[]): CardBrandType | null => {
  const prefix = cardNumbers.join('').slice(0, MAX_BRAND_PREFIX_LENGTH);
  if (!prefix) return null;
  return BRAND_MATCHERS.find(({match}) => match(prefix))?.brand ?? null;
};
```

카드 번호로 **자동 감지**되는 국제 브랜드 데이터와 감지 로직.

`CARD_BRANDS`는 브랜드별 번호 포맷과 로고 경로를 한 객체에 묶은 SSOT다. 브랜드를 추가할 때 이 객체 하나만 수정하면 포맷, 이미지, 타입이 모두 갱신된다.

`BRAND_MATCHERS`는 감지 순서가 명시적인 배열이다. `Object.entries(CARD_BRANDS)`로 순서를 맡기지 않은 이유는 UnionPay처럼 Visa(첫 자리 '4')와 겹치는 구간이 있는 브랜드가 있기 때문이다. 배열이 순서를 코드로 직접 표현한다.

`getBrandName`은 입력 중인 번호 배열을 받아 앞 최대 6자리 prefix를 추출하고, BRAND_MATCHERS를 순서대로 순회해 첫 번째 매칭 브랜드를 반환한다. 매칭이 없으면 `null`.

---

### cardBrandMatchers.ts

```ts
const inRange = (prefix: string, length: number, min: number, max: number) => {
  if (prefix.length < length) return false;
  const n = Number(prefix.slice(0, length));
  return n >= min && n <= max;
};

export const matchVisa       = (prefix: string) => prefix.startsWith('4');
export const matchMasterCard = (prefix: string) => inRange(prefix, 2, 51, 55);
export const matchAmex       = (prefix: string) => prefix.startsWith('34') || prefix.startsWith('37');
export const matchDiners     = (prefix: string) => prefix.startsWith('36');
export const matchUnionPay   = (prefix: string) =>
  inRange(prefix, 6, 622126, 622925) ||
  inRange(prefix, 4, 6282, 6288)     ||
  inRange(prefix, 3, 624, 626);
```

각 브랜드의 prefix 감지 함수 모음.

`inRange(prefix, length, min, max)`는 "prefix의 앞 N자리가 [min, max] 범위에 있는가"를 하나의 표현식으로 읽을 수 있게 만든 헬퍼다. `matchUnionPay`처럼 같은 패턴이 여러 번 반복될 때 중복 없이 선언적으로 표현된다.

이 파일이 `cardBrand.ts`와 분리된 이유는 관심사가 다르기 때문이다. `cardBrand.ts`는 브랜드의 **정적 데이터**(포맷, 이미지)를, `cardBrandMatchers.ts`는 브랜드를 **식별하는 로직**(동작)을 담는다.

---

### cardNumberMask.ts

```ts
export const MASK_FROM_INDEX = 2;

export const maskCardNumbers = (chunks: string[]) =>
  chunks.map((chunk, i) => (i >= MASK_FROM_INDEX ? '·'.repeat(chunk.length) : chunk));
```

카드 번호 표시용 마스킹 유틸리티. 인덱스 2 이상의 그룹(3번째 칸부터)을 글자 수만큼 `·`으로 대체한다. `'1234 5678 9012 3456'` → `'1234 5678 ···· ····'`.

---

## 2. 공유 유틸리티

### hooks/fieldState.ts

```ts
export const createFlags = (count: number): boolean[] =>
  Array.from({length: count}, () => false);

export const computeNextTouched = (prev: boolean[], index: number) =>
  prev.map((touched, i) => (i === index ? true : touched));

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

세 필드 훅(`useCardNumbers`, `useExpiryDate`, `useCvcNumber`)이 공통으로 사용하는 검증 상태 유틸리티.

- `createFlags(n)` — 길이 n의 `false` 배열. 초기 `isTouched`와 에러 `flag`를 만들 때 사용.
- `computeNextTouched(prev, index)` — index 위치만 `true`로 바꾼 새 배열 반환. blur 시 호출해 "이 칸을 건드렸다"를 기록.
- `computeNextErrorInfo(...)` — 특정 index의 에러 상태를 갱신하고, 갱신된 배열 전체 + 파생값(`firstErrorIdx`, `hasAnyError`, `currentErrorMsg`)을 한 번에 반환. 훅들은 이 한 번의 호출로 상태와 표시값을 동시에 얻는다.

세 함수 모두 순수 함수다. React 상태나 side effect가 없으므로 setter 안에서든 이벤트 핸들러에서든 자유롭게 호출할 수 있다.

---

## 3. 필드 훅

네 훅은 공통 인터페이스를 따른다: 상태 값 + `isComplete` + 에러 정보 + 이벤트 핸들러.

---

### hooks/useCardNumbers.ts

```ts
const getFormatByBrand = (brand: CardBrandType | null) =>
  brand ? [...CARD_BRANDS[brand].format] : DEFAULT_CARD_NUMBER_FORMAT;

const buildErrorMsg = (digits: number) => `카드 번호 ${digits}자리를 입력해 주세요`;

export function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [errorInfo, setErrorInfo] = useState({...});
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(4));

  const brand = getBrandName(cardNumbers);
  const format = getFormatByBrand(brand);

  const isComplete = cardNumbers.length === format.length
    && cardNumbers.every((chunk, i) => chunk.length === format[i]);

  const applyResize = (nextChunks, nextFormat) => { ... };

  const handleChange = (index, eValue) => { ... };
  const handleBlur = (index, eValue) => { ... };

  return {cardNumbers, format, brand, isComplete, hasAnyError, firstErrorIdx, errorMsg, handleChange, handleBlur};
}
```

카드 번호 필드의 상태를 관리한다. 이 훅만 가진 특수성:

**동적 format.** AMEX(4-6-5), Diners(4-6-4)는 일반 카드(4-4-4-4)와 그룹 수가 다르다. 번호를 입력하는 도중 브랜드가 감지되면 input 개수 자체가 바뀌어야 한다. 이를 위해 `cardNumbers`를 고정 튜플이 아닌 `string[]`으로 관리하고, 매 렌더마다 `brand → format`을 파생시킨다.

`getFormatByBrand`는 `brand`를 인자로 받는다. 훅 본체에서 이미 `getBrandName`을 한 번 호출해 `brand`를 구했으므로, 함수 내부에서 다시 호출하지 않고 결과를 재사용한다.

**`applyResize`.** format 길이가 바뀔 때 `cardNumbers`, `errorInfo`, `isTouched` 세 배열을 동시에 새 길이로 맞춘다. 단순히 길이만 조정하는 것이 아니라, 기존 값이 새 `maxLength`를 초과하면 잘라내기도 한다(maxLength=4인 칸에 6자리가 남으면 수정 불가 상태가 되기 때문).

**에러 노출 타이밍.** blur 전까지는 에러를 표시하지 않는다(`isTouched`). blur 이후 값이 올바르게 완성되면 onChange 시점에 즉시 에러를 해제한다 — blur를 기다리지 않는다.

---

### hooks/useCompanySelect.ts

```ts
export function useCompanySelect() {
  const [selectedCompany, setSelectedCompany] = useState<CardCompanyType | null>(null);

  return {
    selectedCompany,
    isComplete: selectedCompany !== null,
    handleChange: setSelectedCompany,
  };
}
```

카드사 선택 상태를 관리한다. 내부는 `useState` 하나가 전부지만, `isComplete: selectedCompany !== null`을 노출함으로써 나머지 세 필드 훅과 동일한 인터페이스를 갖는다.

이 통일 덕분에 `useCardRegisterForm`에서 모든 필드를 `field.isComplete`로 균일하게 다룰 수 있다.

---

### hooks/useExpiryDate.ts

```ts
const isValidMonth = (value: string) => {
  const month = Number(value);
  return month >= 1 && month <= 12;
};

const isValidExpiry = (value: string, type: 'month' | 'year') => {
  if (type === 'month') return value.length === 2 && isValidMonth(value);
  return value.length === 2;
};

const fillZero = (value: string, type: 'month' | 'year') => {
  if (type === 'month' && value.length === 1 && value !== '0') return `0${value}`;
  if (type === 'year'  && value.length === 1) return `0${value}`;
  return undefined;
};

export function useExpiryDate() {
  ...
  const handleBlur = (index, value, type) => {
    setIsTouched(prev => computeNextTouched(prev, index));
    const finalValue = fillZero(value, type) ?? value;  // 0 패딩 먼저
    // finalValue로 setState 및 검증
  };
  ...
}
```

유효기간(월/연) 상태를 관리한다. 특이점 두 가지:

**월 범위 검증.** 카드 번호와 달리 단순 길이 검증이 아닌 `01~12` 범위 검증이 추가된다. `isValidMonth`가 이를 담당하고, blur 시 에러 메시지가 달라진다(`INVALID_MONTH_MSG`).

**blur 시 0 패딩.** `"1"`을 입력하고 blur하면 `fillZero`가 `"01"`로 변환한 뒤 검증을 수행한다. 사용자가 한 자리만 입력해도 유효한 값으로 처리되는 UX 배려다.

---

### hooks/useCvcNumber.ts

```ts
const CVC_LENGTH = 3;

export function useCvcNumber() {
  ...
  const handleChange = (value) => {
    ...
    if (isTouched[0] && trimmed.length === CVC_LENGTH) updateErrorInfo(false);
  };

  const handleBlur = (value) => {
    setIsTouched(prev => computeNextTouched(prev, 0));
    updateErrorInfo(value.length !== CVC_LENGTH);
  };
  ...
}
```

CVC 번호(3자리) 상태를 관리한다. 세 필드 훅 중 가장 단순하다. 입력 칸이 하나뿐이어서 `index` 개념 없이 `flag[0]`만 다룬다. `CVC_LENGTH = 3`이 상수로 추출되어 길이 비교와 에러 메시지 생성에 일관되게 쓰인다.

---

## 4. 오케스트레이션 훅

### hooks/useCardRegisterForm.ts

```ts
export function useCardRegisterForm() {
  const numberField  = useCardNumbers();
  const companyField = useCompanySelect();
  const expiryField  = useExpiryDate();
  const cvcField     = useCvcNumber();
  const navigate     = useNavigate();

  const showCompanySelect = numberField.isComplete;
  const showExpiry        = showCompanySelect && companyField.isComplete;
  const showCvc           = showExpiry && expiryField.isComplete;
  const isFormComplete    = showCvc && cvcField.isComplete;

  const handleSubmit = () => {
    navigate('/complete', {
      state: {
        cardPrefix: numberField.cardNumbers[0],
        companyName: companyField.selectedCompany
          ? CARD_COMPANIES[companyField.selectedCompany].name : '',
      },
    });
  };

  return {numberField, companyField, expiryField, cvcField,
          showCompanySelect, showExpiry, showCvc, isFormComplete, handleSubmit};
}
```

카드 등록 폼 전체의 로직을 한 곳에 모은다.

**단계 노출 플래그.** `showCompanySelect → showExpiry → showCvc` 체인이 비즈니스 규칙 자체다. "카드 번호가 완성돼야 카드사 선택이 열리고, 카드사를 선택해야 유효기간이 열린다"는 규칙이 코드 한 줄씩으로 표현된다. `useState`가 아닌 파생값이므로 동기화 코드가 필요 없고, 카드 번호를 지워 `isComplete`가 `false`가 되는 순간 자동으로 하위 단계들도 닫힌다.

**`handleSubmit`.** navigate와 전송 데이터 구성을 담당한다. `useNavigate`는 훅이므로 커스텀 훅 안에서 호출할 수 있다. 제출 로직을 여기에 두면 페이지 컴포넌트에 navigate 의존이 없어지고, 렌더링과 무관한 로직이 완전히 분리된다.

---

## 5. 페이지 컴포넌트

### CardRegisterPage.tsx

```tsx
const CardRegisterPage = () => {
  const {
    numberField, companyField, expiryField, cvcField,
    showCompanySelect, showExpiry, showCvc,
    isFormComplete, handleSubmit,
  } = useCardRegisterForm();

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection
          cardNumbers={numberField.cardNumbers}
          brand={numberField.brand}
          expiryMonth={expiryField.expiryMonth}
          expiryYear={expiryField.expiryYear}
          selectedCompany={companyField.selectedCompany}
        />
        <InfoInputSection
          numberField={numberField}
          expiryField={expiryField}
          cvcField={cvcField}
          selectedCompany={companyField.selectedCompany}
          onCompanyChange={companyField.handleChange}
          showCompanySelect={showCompanySelect}
          showExpiry={showExpiry}
          showCvc={showCvc}
        />
      </Container>
      {isFormComplete && <SubmitButton onClick={handleSubmit}>확인</SubmitButton>}
    </Wrapper>
  );
};
```

`useCardRegisterForm`에서 필요한 값을 꺼내 두 자식 컴포넌트에 분배하는 것이 전부다. 폼 상태가 어떻게 관리되는지, 어떤 조건에서 단계가 열리는지, 제출 시 어디로 이동하는지는 이 파일이 알지 않는다.

`{isFormComplete && <SubmitButton>}` — 폼이 완성됐을 때만 확인 버튼이 렌더링된다. 조건이 단순해 인라인이 적합하다. `SubmitButton`은 `position: fixed`로 하단에 고정되고, `max-width: 376px + margin: 0 auto`로 `Container`와 동일한 너비·중앙 정렬을 유지한다.

---

## 6. 입력 섹션

### InfoInputSection.tsx

```tsx
const InfoInputSection = ({numberField, expiryField, cvcField,
                           selectedCompany, onCompanyChange,
                           showCompanySelect, showExpiry, showCvc}) => {
  const infoInputFields = [
    {id: 'cvc',     show: showCvc,           title: '...', label: 'CVC',    node: <CvcField {...cvcField} />},
    {id: 'expiry',  show: showExpiry,         title: '...', label: '유효기간', node: <ExpiryField {...expiryField} />},
    {id: 'company', show: showCompanySelect,  title: '...', node: <BrandSelectField ... />},
    {id: 'number',  show: true,              title: '...', label: '카드 번호', node: <NumberField ... />},
  ];

  return (
    <Container>
      {infoInputFields
        .filter(field => field.show)
        .map(field => (
          <InputContainer key={field.id} title={field.title} label={field.label}>
            {field.node}
          </InputContainer>
        ))}
    </Container>
  );
};
```

조건에 따라 필드를 순서대로 쌓는 컨테이너다.

배열이 역순(CVC → 유효기간 → 카드사 → 카드 번호)으로 선언된 이유는 **새 단계가 위에 쌓이는 방식** 때문이다. filter 후 렌더링되는 순서가 곧 화면 순서이고, 배열 아래에 있을수록 화면 아래에 그려진다. 카드 번호가 항상 최하단에 고정되고, 이후 단계가 그 위에 순서대로 추가된다.

`key={field.id}`는 안정적인 문자열 id를 사용한다. `key={index}`로 했을 때 showCompanySelect가 false → true로 바뀌면 카드 번호 컴포넌트의 key가 변경되어 리마운트가 발생하고 포커스가 날아간다. 안정 id는 이 문제를 방지한다.

---

### NumberField.tsx

```tsx
const NumberField = ({cardNumbers, format, firstErrorIdx, errorMsg, onChange, onBlur}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index, value) => {
    onChange(index, value);
    // 현재 칸이 꽉 차면 다음 칸으로 자동 포커스
    if (value.length === format[index] && /^\d+$/.test(value) && index < format.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // 현재 칸이 비어있을 때 Backspace → 이전 칸으로 포커스
    if (e.key === 'Backspace' && cardNumbers[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <InputWrapper $columns={format.map(n => `${n}fr`).join(' ')}>
      {format.map((maxLen, index) => (
        <CardNumberInput
          key={index}
          ref={el => { inputRefs.current[index] = el; }}
          value={cardNumbers[index] ?? ''}
          maxLength={maxLen}
          strokeMode={index === firstErrorIdx ? 'error' : 'default'}
          onChange={e => handleChange(index, e.target.value)}
          onBlur={e => onBlur(index, e.target.value)}
          onKeyDown={e => handleKeyDown(index, e)}
        />
      ))}
    </InputWrapper>
  );
};
```

카드 번호 입력 UI를 담당한다. 훅(`useCardNumbers`)이 넘겨준 `format` 배열 길이만큼 input을 렌더링한다. format이 [4,4,4,4]이면 4개, [4,6,5]이면 3개가 그려진다. `grid-template-columns`가 `format.map(n => '${n}fr')`으로 구성되어 각 칸의 너비가 자릿수에 비례한다.

포커스 자동 이동 두 방향:
- **앞으로(입력 시)**: 현재 칸이 `maxLength`만큼 숫자로 채워지면 다음 칸에 focus.
- **뒤로(Backspace 시)**: 현재 칸이 이미 비어있을 때 Backspace → 이전 칸에 focus.

ref 배열(`inputRefs`)은 이 컴포넌트가 직접 관리한다. DOM 조작은 훅이 아닌 컴포넌트의 책임이기 때문에 ref를 훅으로 넘기지 않는다.

`generatePlaceholder(length)`: `Array.from({length}, (_, i) => (i + 1) % 10).join('')`로 순차 숫자(1234, 123456 등)를 생성해 자릿수를 시각적으로 보여준다.

---

### ExpiryField.tsx

```tsx
const ExpiryField = ({expiryMonth, expiryYear, firstErrorIdx, errorMsg,
                      handleMonthChange, handleYearChange, handleBlur}) => {
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef  = useRef<HTMLInputElement | null>(null);

  const onMonthChange = (value) => {
    handleMonthChange(value);
    // 월 2자리 완성 시 연도로 자동 포커스
    if (value.length === 2 && /^\d+$/.test(value)) yearRef.current?.focus();
  };

  const onYearKeyDown = (e) => {
    // 연도 칸이 빌 때 Backspace → 월 칸으로 포커스
    if (e.key === 'Backspace' && expiryYear === '') monthRef.current?.focus();
  };

  return (
    <>
      <ExpiryInput ref={monthRef} value={expiryMonth} maxLength={2} placeholder='MM'
                   strokeMode={firstErrorIdx === 0 ? 'error' : 'default'}
                   onChange={e => onMonthChange(e.target.value)}
                   onBlur={e => handleBlur(0, e.target.value, 'month')} />
      <ExpiryInput ref={yearRef} value={expiryYear} maxLength={2} placeholder='YY'
                   strokeMode={firstErrorIdx === 1 ? 'error' : 'default'}
                   onChange={e => handleYearChange(e.target.value)}
                   onBlur={e => handleBlur(1, e.target.value, 'year')}
                   onKeyDown={onYearKeyDown} />
    </>
  );
};
```

유효기간 입력 UI. 월/연 두 개의 input이 있다. NumberField와 동일한 포커스 이동 패턴을 두 칸 버전으로 구현한다.

월 입력이 2자리로 완성되면 연도 input으로 자동 포커스. 연도 input이 비어있을 때 Backspace를 누르면 월 input으로 돌아간다.

`firstErrorIdx === 0`이면 월 input을, `=== 1`이면 연도 input을 에러 스타일로 표시한다.

---

### CvcField.tsx

```tsx
const CvcField = ({cvcNumber, firstErrorIdx, errorMsg, handleChange, handleBlur}) => (
  <StyledField>
    <CvcInput
      value={cvcNumber}
      maxLength={3}
      inputMode='numeric'
      placeholder='123'
      strokeMode={firstErrorIdx === 0 ? 'error' : 'default'}
      onChange={e => handleChange(e.target.value)}
      onBlur={e => handleBlur(e.target.value)}
    />
    <ErrorMessage>{errorMsg}</ErrorMessage>
  </StyledField>
);
```

CVC 입력 UI. 세 필드 컴포넌트 중 가장 단순하다. input 하나, 에러 메시지 하나. 자동 포커스 이동이 없다(마지막 필드이기 때문).

---

### BrandSelectField.tsx

```tsx
const BrandSelectField = ({selectedCompany, onChange}) => (
  <Select
    value={selectedCompany ?? ''}
    onChange={e => {
      const value = e.target.value;
      onChange(value ? (value as CardCompanyType) : null);
    }}
  >
    <option value=''>선택해 주세요</option>
    {(Object.entries(CARD_COMPANIES) as [CardCompanyType, {...}][]).map(([key, {name}]) => (
      <option key={key} value={key}>{name}</option>
    ))}
  </Select>
);
```

카드사 선택 드롭다운. `CARD_COMPANIES` 객체를 `Object.entries`로 순회해 option을 동적으로 생성한다. 새 카드사가 추가되면 `CARD_COMPANIES`에만 항목을 넣으면 이 컴포넌트는 자동으로 반영된다.

빈 option(`value=''`)을 선택하면 `onChange(null)`로 선택을 초기화한다. `selectedCompany ?? ''`는 `null`을 빈 문자열로 변환해 빈 option이 선택된 상태로 보이게 한다.

---

## 7. 미리보기 섹션

### CardPreviewSection.tsx

```tsx
const CardPreviewSection = ({cardNumbers, brand, expiryMonth, expiryYear, selectedCompany}) => (
  <Container>
    <CardPreviewContainer
      cardNumbers={cardNumbers}
      brand={brand}
      expiryMonth={expiryMonth}
      expiryYear={expiryYear}
      selectedCompany={selectedCompany}
    />
  </Container>
);
```

`CardPreviewContainer`를 감싸는 레이아웃 레이어. 패딩과 중앙 정렬만 담당한다.

---

### CardPreviewContainer.tsx

```tsx
const DEFAULT_CARD_COLOR = '#333333';

const CardPreviewContainer = ({cardNumbers, brand, expiryMonth, expiryYear, selectedCompany}) => {
  const bgColor = selectedCompany ? CARD_COMPANIES[selectedCompany].color : DEFAULT_CARD_COLOR;

  return (
    <Container $bgColor={bgColor}>
      <CardHeader>
        <IcChip />
        <CardBrandLogo brandName={brand} />
      </CardHeader>
      <CardBody>
        <CardNumberDisplay cardNumbers={cardNumbers} />
        <CardExpiryDateDisplay expiryMonth={expiryMonth} expiryYear={expiryYear} />
      </CardBody>
    </Container>
  );
};
```

카드 실물 모양의 미리보기 UI.

`bgColor`는 카드사가 선택됐을 때 해당 카드사 컬러를, 미선택 상태엔 `DEFAULT_CARD_COLOR('#333333')`을 사용한다.

`brand`는 prop으로 받는다. 이 컴포넌트 내부에서 `getBrandName(cardNumbers)`를 다시 호출하지 않는다. `useCardNumbers`가 이미 계산한 값이 페이지를 통해 prop으로 내려온다. 컴포넌트가 도메인 감지 로직에 의존하지 않고 받은 값을 표시하는 역할만 한다.

`CardNumberDisplay`는 `maskCardNumbers`를 사용해 3~4번째 그룹을 `·`으로 마스킹해 표시한다. `CardBrandLogo`는 `brand` 값에 따라 `CARD_BRANDS[brand].imageUrl`에서 로고 이미지를 가져온다.
