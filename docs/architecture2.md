# 현재 구조 기준 아키텍처 정리

이 문서는 `src/pages/AddCardPage.tsx`와 연결된 field 컴포넌트들의 **현재 구현**을 기준으로 정리한 문서다.

---

## 핵심 흐름

### 1. step 기반 progressive form

- `AddCardPage`는 `step` 상태를 기준으로 필드를 순서대로 연다.
- 순서:
  1. `CardNumbersField`
  2. `CardCompanySelect`
  3. `ExpirationPeriodField`
  4. `CVCField`
  5. `PasswordField`
- 각 field는 자신의 입력/blur 시점에 검증 요청을 올리고,
  **최종 step 오픈 여부는 `AddCardPage`가 결정**한다.

### 2. field 내부 책임

- 값 입력/수정
- input/select focus UX
- onChange / onBlur 시점의 1차 validation
- 에러 스타일 / 에러 메시지 표시

### 3. AddCardPage 책임

- form 전체 상태 관리
- field별 에러 상태 저장
- 카드 브랜드 파생
- 카드번호 총 길이 / CVC 길이 / 유효기간 조합 검증 같은 **page-level 최종 validation**
- step 오픈
- submit 시 전체 검증 및 완료 페이지 이동

---

## 비즈니스 규칙

### 자동 포커스 이동

- `CardNumbersField`
  - 각 칸이 4자리가 되면 다음 칸으로 focus 이동
  - 빈 칸에서 backspace를 누르면 이전 칸으로 focus 이동
  - mount 시 첫 번째 input으로 focus 이동
- `ExpirationPeriodField`
  - `MM` 2자리가 채워지면 `YY`로 focus 이동
  - `YY`가 비어 있을 때 backspace를 누르면 `MM`으로 focus 이동
  - mount 시 첫 번째 input으로 focus 이동
- `CardCompanySelect`, `CVCField`, `PasswordField`
  - mount 시 자기 첫 control로 focus 이동

### step 오픈 규칙

- **카드 번호**
  - 앞의 3칸이 모두 4자리이고,
  - 마지막 칸이 2자리 이상이 되면
  - `AddCardPage`에 총 길이 검증을 요청
  - 총 길이까지 통과해야 다음 step 오픈
- **카드사**
  - value는 `change`에서 업데이트
  - 최종 검증과 step 오픈은 `blur`에서 수행
- **유효기간**
  - `MM` / `YY`가 모두 2자리가 되면 마지막으로 입력한 칸이 무엇이든 `AddCardPage`에 최종 검증 요청
  - 월/년 개별 검증 + 조합 검증을 모두 통과해야 다음 step 오픈
- **CVC**
  - 입력 길이가 `minLength` 이상이면 `AddCardPage`에 최종 검증 요청
  - `AddCardPage`는 현재 카드 브랜드 기준 `cvcRules`로 최종 판정
  - 일반 카드는 기본 3자리, amex는 4자리
- **비밀번호**
  - 다음 step이 없으므로 field 내부 검증만 수행

### 카드번호가 다른 필드에 주는 영향

- `cardNumbers` → `cardBrand` 파생
- `cardBrand`는 아래 값에 영향을 준다.
  - 카드 미리보기 로고
  - 카드 미리보기 배경색은 `cardCompany` 기준
  - 카드번호 총 길이 검증
  - CVC 길이 검증

### 카드 브랜드 규칙

- `visa`: 16자리, CVC 3자리, `4`로 시작
- `mastercard`: 16자리, CVC 3자리, `51~55`로 시작
- `amex`: 15자리, CVC 4자리, `34`, `37`로 시작
- `diners`: 14자리, CVC 3자리, `36`으로 시작
- `unionpay`: 16자리, CVC 3자리, `622126~622925`, `624~626`, `6282~6288`
- `local`: 그 외, 16자리, CVC 3자리

---

## validation rule 구조

```ts
type ValidationRule = {
  name: ErrorStatus | ExpirationPeriodErrorStatus;
  fn: (value: string) => boolean;
  on: ('onChange' | 'onBlur')[];
};
```

### 공통 RULES

```ts
const RULES = {
  required: { name: 'required', fn: (v) => v.length > 0, on: ['onBlur'] },
  numberOnly: { name: 'numberOnly', fn: (v) => v === '' || isNumber(v), on: ['onChange'] },
  validMonth: { name: 'invalidMonth', fn: isValidMonth, on: ['onBlur'] },
  validYear: { name: 'invalidYear', fn: isValidYear, on: ['onBlur'] },
  exactLength: (length) => ({ name: 'invalidLength', fn: (v) => v.length === length, on: ['onBlur'] }),
  validMonthAndYear: {
    name: 'invalidYear',
    fn: (v) => isValidMonthAndYear(v.slice(0, 2), v.slice(2, 4)),
    on: ['onBlur'],
  },
};
```

### validation 유틸

```ts
validate(rules, 'onChange', value); // trigger에 해당하는 rules만 실행
validate(rules, 'onBlur', value); // trigger에 해당하는 rules만 실행
validateAll(rules, value); // trigger 무시, 모든 rules 실행
```

---

## Routing

```txt
/ (MobileLayout)
├── index -> AddCardPage
└── complete -> AddCardCompletePage
```

- basename: `/react-payments`
- 완료 페이지는 `location.state`가 없으면 `/`로 redirect

---

## AddCardPage

`AddCardPage`는 이 form의 orchestration layer다.

### state

```ts
formValue = {
  cardNumbers: { value: ['', '', '', ''], errorStatuses: [null, null, null, null, null] },
  cardCompany: { value: '', errorStatuses: [null] },
  expirationPeriod: { value: ['', ''], errorStatuses: [null, null] },
  cvc: { value: '', errorStatuses: [null] },
  password: { value: '', errorStatuses: [null] },
};

step: number;
```

### 핵심 함수

- `handleUpdate` — field value 공통 업데이트
- `handleErrorUpdated` — field errorStatuses 공통 업데이트
- `handleCardNumbersValid` — 카드번호 총 길이 최종 검증
- `getExpirationPeriodErrorStatuses` — 유효기간 개별/조합 검증 결과 계산
- `handleExpirationPeriodValid` — 유효기간 최종 검증 + 다음 step 오픈
- `handleCvcValid` — CVC 최종 검증 + 다음 step 오픈
- `handleCardCompanyValid` — 카드사 최종 검증 + 다음 step 오픈
- `handleValidateForm` — submit 직전 전체 검증
- `handleSubmitForm` — 검증 통과 시 `/complete`로 이동

### 파생 값

- `cardBrand`
- `cvcLength = CARD_CVC_MAX_LENGTH[cardBrand] ?? DEFAULT_CVC_LENGTH`
- `cardNumbersTotalLength = CARD_TOTAL_LENGTH[cardBrand] ?? DEFAULT_CARD_TOTAL_LENGTH`
- `isFormValid`

### validation 규칙 / 설정값

- `cardNumbersRules`
- `expirationPeriodRules` (월/년 2중 배열)
- `cvcRules`
- `cardCompanyRules`
- `passwordRules`

### view 구조

```jsx
<main>
  <Card />
  <form>
    {step >= password && <PasswordField />}
    {step >= cvc && <CVCField />}
    {step >= expirationPeriod && <ExpirationPeriodField />}
    {step >= cardCompany && <CardCompanySelect />}
    <CardNumbersField />
  </form>
  {isFormValid && <Button>확인</Button>}
</main>
```

---

## AddCardCompletePage

- `location.state`에서
  - `firstFourDigits`
  - `cardCompany`
  를 받아 완료 메시지 렌더링
- state가 없으면 `/`로 redirect

---

## Card

카드 미리보기 컴포넌트.

### props

- `cardNumber: [string, string, string, string]`
- `expirationPeriod: [string, string]`
- `cardBrand: CardBrand`
- `cardCompany: CardCompany`

### 현재 동작

- 카드사별 배경색 적용
- 브랜드별 로고 렌더링
  - `visa`
  - `mastercard`
  - `amex`
  - `diners`
  - `unionpay`
- 카드번호는 앞 2칸만 그대로 보여주고, 뒤 2칸은 `∙` 처리

---

## CardNumbersField

카드번호 4칸 입력과 1차 검증, field 내부 focus UX를 담당한다.

### props

- `value`
- `errorStatuses`
- `onUpdated`
- `onErrorUpdated`
- `onValid`
- `validationRules`

### 내부 역할

- 숫자 입력 방어
- 각 칸 blur 검증
- 칸 간 focus 이동
- 마지막 칸 입력 중 `[4,4,4,2+]` 조건이 되면 page에 총 길이 최종 검증 요청

---

## ExpirationPeriodField

유효기간 2칸 입력과 1차 검증, field 내부 focus UX를 담당한다.

### props

- `value: [string, string]`
- `errorStatuses: [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus]`
- `onUpdated`
- `onErrorUpdated`
- `onValid`
- `validationRules: [ValidationRule[], ValidationRule[]]`

### 내부 역할

- 월/년 input 값을 개별 관리
- 월은 `validMonth`, 년은 `validYear`를 포함한 개별 blur 검증
- `MM` / `YY`가 모두 2자리면 page에 최종 조합 검증 요청

---

## CVCField

CVC 입력과 1차 검증을 담당한다.

### props

- `value`
- `errorStatuses`
- `minLength`
- `maxLength`
- `onUpdated`
- `onErrorUpdated`
- `onValid`
- `validationRules`

### 내부 역할

- 숫자 입력 방어
- blur 시 required / invalidLength 반영
- 길이가 `minLength` 이상이 되면 page에 최종 검증 요청
- 실제 step 오픈 여부는 page의 `cvcRules`가 결정

---

## CardCompanySelect

카드사 선택과 1차 검증을 담당한다.

### props

- `value`
- `errorStatuses`
- `onUpdated`
- `onErrorUpdated`
- `onValid`
- `validationRules`

### 내부 역할

- `change`에서 value 업데이트
- `blur`에서 required 최종 검증
- blur 검증 통과 시 page에 step 오픈 요청

---

## PasswordField

비밀번호 앞 2자리 입력과 1차 검증을 담당한다.

### props

- `value`
- `errorStatuses`
- `onUpdated`
- `onErrorUpdated`
- `validationRules`

### 내부 역할

- 숫자 입력 방어
- blur 시 required / invalidLength 반영
- mount 시 첫 input focus

---

## FormField

공통 field 레이아웃.

- title
- caption
- children
- error / errorMessage

---

## Select

- `options`
- `variant`
- native `<select>` wrapper

---

## Input

- `variant`
- native `<input>` wrapper

---

## useInputFocus

다중 input field에서 ref를 배열로 관리하는 공통 hook.

### 제공 기능

- `setRef(index)`
- `focusNext(index)`
- `focusPrev(index)`
- `focusFirst()`
