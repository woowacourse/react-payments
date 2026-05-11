# 추가되어야 하는 비즈니스 로직

## input 자동 포커스 이동

- input.value === "" 일때 backspace를 누르면 input focus를 앞 input으로 옮김. (input[1] 이상)
- 4칸이 다 채워지면 다음 input으로 포커스 자동 이동

## 필드 validation 통과 후 다음 step 열림

- 새롭게 열린 field 내로 focus 이동

## cardNumbers에 따라 다른 필드에 영향을 주는 경우

- cardNumbers 값에 따라 분기 처리
- cardBrand, cvc 자릿수 validation, cardNumbers 총 길이 validation에 영향을 줌.

### 카드 브랜드

- visa: 16자리(xxxx-xxxx-xxxx-xxxx). cvc 3자리. 4로 시작.
- master: 16자리(xxxx-xxxx-xxxx-xxxx). cvc 3자리. 51~55로 시작.
- amex: 15자리(xxxx-xxxxxx-xxxxx). cvc 4자리. 34, 37로 시작.
- diners: 14자리(xxxx-xxxxxx-xxxx). cvc 3자리. 36으로 시작.
- unionpay: 16자리(xxxx-xxxx-xxxx-xxxx). cvc 3자리. 622126~622925, 624~626, 6282~6288로 시작.
- local: 16자리(xxxx-xxxx-xxxx-xxxx). cvc 3자리. 그외.

## 모든 필드가 validation을 통과하고 submit 할 준비가 되었다면 "제출 버튼" 뜨게 하기

- `isFormValid`가 truthy 하면 '제출 버튼' 뜨게 하기

## field 정보를 담는 객체가 필요함

- value
- errorStatuses: ErrorStatus[]

## AddCardPage에서 하고자 하는 것.

- 각 필드 정의/상태관리
- form 전체 validation
  - 각 field에서 validation 후 만약 에러가 있다면 에러 메시지와 보더 표시.
- form 제출

## 각 필드 컴포넌트에서 하고자 하는 것.

- 값 입력/수정
- validation
- 에러 표시

## rule 타입

```ts
// src/utils.ts
type ValidationRule = {
  name: ErrorStatus | ExpirationPeriodErrorStatus;
  fn: (value: string) => boolean;
  on: ('onChange' | 'onBlur')[];
};
```

## 공통 rule 상수

```ts
// src/constants.ts
const RULES = {
  required:    { name: 'required',      fn: (v) => v.length > 0,          on: ['onBlur'] },
  numberOnly:  { name: 'numberOnly',    fn: (v) => /^\d+$/.test(v),       on: ['onChange'] },
  validMonth:  { name: 'invalidMonth',  fn: isValidMonth,                  on: ['onBlur'] },
  validYear:   { name: 'invalidYear',   fn: isValidYear,                   on: ['onBlur'] },
  exactLength: (length) => ({ name: 'invalidLength', fn: (v) => v.length === length, on: ['onBlur'] }),
};
```

## validation 유틸 함수

```ts
// src/utils.ts
validate(rules, 'onChange', value);  // onChange에 등록된 rules만 실행 → ErrorStatus 반환
validate(rules, 'onBlur', value);    // onBlur에 등록된 rules만 실행 → ErrorStatus 반환
validateAll(rules, value);           // 모든 rules 실행 (form submit 시) → ErrorStatus 반환
```

---

# Routing

```
/ (MobileLayout)
├── index → AddCardPage
└── complete → AddCardCompletePage (state 없으면 "/" 로 redirect)
```

basename: `/react-payments`

---

# AddCardPage

> formValue를 관리함.

## states

- formValue: {
  cardNumbers: { value: ["","","",""], errorStatuses: [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus] }, // 4개 input별 + 1개 총 길이
  cardCompany: { value: "", errorStatuses: [ErrorStatus] },
  expirationPeriod: { value: ["",""], errorStatuses: [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus] },
  cvc: { value: "", errorStatuses: [ErrorStatus] },
  password: { value: "", errorStatuses: [ErrorStatus] },
  }
- step: number;

## functions

- handleUpdate: (key, value) => void — 공통 필드 업데이트
- handleSubmit — form 제출
- handleValidateForm — submit 시점에 모든 필드의 rules 실행 → formValue의 errorStatuses 업데이트
- handleOpenNextStep — step 증가 및 다음 필드 열기

## variables

- cardBrand: cardNumbers에서 파생 ('local' | 'visa' | 'mastercard' | 'amex' | 'diners' | 'unionpay')
- cvcValidationRules: cardBrand에서 파생 (amex이면 cvc 4자리, 그외 3자리)
- cardNumbersValidationRules: cardBrand에서 파생 — 4칸 고정 입력, join한 string 길이로 검증 (amex 15자리, diners 14자리, 그외 16자리)
- isFormValid: 모든 필드의 errorStatuses가 전부 null인지 여부

## view

```jsx
<main>
  <Card />
  <form>
    <PasswordField />
    <CVCField />
    <ExpirationPeriodField />
    <CardCompanySelect />
    <CardNumbersField />
  </form>
  <Button disabled={!isFormValid}>확인</Button>
</main>
```

---

# AddCardCompletePage

> 카드 추가 완료 화면. location.state로 카드 정보를 받음. state 없으면 "/" 로 Navigate.

## view

```jsx
<main>
  <CheckIcon />
  <p>
    {firstFourDigits}로 시작하는 {cardCompany}가 등록되었어요.
  </p>
  <Button>확인</Button>
</main>
```

---

# Card

> formValue(카드 번호, 유효기간, 카드 브랜드)를 시각적으로 보여줌.

## props

- cardNumbers: [string, string, string, string]
- expirationPeriod: [string, string]
- cardBrand: CardBrand

## view

```jsx
<div>
  <div>
    <div></div>
    <img src="..." alt="카드 브랜드 로고" /> {/* visa | mastercard */}
  </div>
  <div>
    <span>{}</span> * 4
  </div>
  <div>
    <span>{}</span> * 2 (사이에 슬래쉬로)
  </div>
</div>
```

---

# CardNumbersField

> 카드 번호 도메인 로직을 포함한 input 입력, 유효성 검사, formValue 업데이트를 진행함.

## props

- value: [string, string, string, string]
- onUpdated: (value) => void
- validationRules: ValidationRule[]
- errorStatuses: [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus] // 4개 input별 + 1개 총 길이
- onErrorUpdated: (errorStatuses) => void

## functions

- handleChange: 숫자 입력 외 방어, onUpdated 호출
- handleBlur: input별 required/numberOnly 검사, 총 길이 검사 후 onErrorUpdated 호출

## view

```jsx
<FormField>
  <fieldset>
    <Input /> * 4
  </fieldset>
</FormField>
```

---

# ExpirationPeriodField

> 유효기간 도메인 로직을 포함한 input 입력, 유효성 검사, formValue 업데이트를 진행함.

## props

- value: [string, string]
- onUpdated: (value) => void
- validationRules: ValidationRule[]
- errorStatuses: [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus]
- onErrorUpdated: (errorStatuses) => void

## functions

- handleChange: 숫자 입력 외 방어, onUpdated 호출
- handleBlur: required, invalidLength, invalidMonth, invalidYear 검사 후 onErrorUpdated 호출

## view

```jsx
<FormField>
  <Input /> * 2
</FormField>
```

---

# CVCField

> CVC 도메인 로직을 포함한 input 입력, 유효성 검사, formValue 업데이트를 진행함.

## props

- value: string
- onUpdated: (value) => void
- validationRules: ValidationRule[]
- errorStatuses: [ErrorStatus]
- onErrorUpdated: (errorStatuses) => void

## functions

- handleChange: 숫자 입력 외 방어, onUpdated 호출
- handleBlur: required, invalidLength 검사 후 onErrorUpdated 호출

## view

```jsx
<FormField>
  <Input type="text" inputMode="numeric" maxLength={3} />
</FormField>
```

---

# CardCompanySelect

> 카드사 선택 도메인 로직을 포함한 select 입력, 유효성 검사, formValue 업데이트를 진행함.

## props

- value: CardCompany
- onUpdated: (value) => void
- validationRules: ValidationRule[]
- errorStatuses: [ErrorStatus]
- onErrorUpdated: (errorStatuses) => void

## functions

- handleChange: onUpdated 호출
- handleBlur: required 검사 후 onErrorUpdated 호출

## view

```jsx
<FormField>
  <Select options={CARD_COMPANY_OPTIONS} variant="default" | "error" />
</FormField>
```

---

# PasswordField

> 비밀번호 앞 2자리 도메인 로직을 포함한 input 입력, 유효성 검사, formValue 업데이트를 진행함.

## props

- value: string
- onUpdated: (value) => void
- validationRules: ValidationRule[]
- errorStatuses: [ErrorStatus]
- onErrorUpdated: (errorStatuses) => void

## functions

- handleChange: 숫자 입력 외 방어, onUpdated 호출
- handleBlur: required, invalidLength 검사 후 onErrorUpdated 호출

## view

```jsx
<FormField>
  <Input type="password" inputMode="numeric" maxLength={2} />
</FormField>
```

---

# FormField (공통)

> 라벨, 에러메시지 레이아웃

## props

- { title: string; caption: string; error: boolean; errorMessage: string; children: ReactNode; }

## view

```jsx
<>
  <FieldTitle />
  <FieldCaption />
  {children}
  <FieldCaption variant="error">{errorMessage}</FieldCaption>
</>
```

---

# Button (공통)

> 스타일 위주 구현. variant로 스타일 분기.

## props

- extends ButtonHTMLAttributes\<HTMLButtonElement\>
- variant?: 'primary' (default)

## view

```jsx
<button data-variant={variant} />
```

---

# Select (공통)

> 스타일 위주 구현. variant로 에러 스타일 분기.

## props

- extends SelectHTMLAttributes\<HTMLSelectElement\>
- options: readonly { label: string; value: string }[]
- variant?: 'default' | 'error'

## view

```jsx
<select className="select select--{variant}">
  <option /> * n
</select>
```

---

# Input (공통)

> 스타일 위주 구현. variant로 에러 스타일 분기.

## props

- extends InputHTMLAttributes\<HTMLInputElement\>
- variant?: 'default' | 'error'

## view

```jsx
<input />
```

---

# CheckIcon (공통)

> 체크 애니메이션 아이콘. stroke-dashoffset으로 드로잉 애니메이션.

## view

```jsx
<div>
  {' '}
  {/* 원형 배경 */}
  <svg>
    <path /> {/* stroke-dashoffset 애니메이션 */}
  </svg>
</div>
```

---

# FieldTitle (공통)

> FormField의 Title 컴포넌트. 스타일만 담당함.

## props

- { children }

## view

```jsx
<h3>{children}</h3>
```

---

# FieldCaption (공통)

> FormField의 Caption 컴포넌트. variant로 에러 스타일 분기.

## props

- { children; variant?: 'default' | 'error' }

## view

```jsx
<span>{children}</span>
```
