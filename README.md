# 💸 react-payments

## 📌 `Step1` 기능 요구사항

### UI

- [x] 카드 프리뷰 UI 구현
- [x] 카드 번호 입력 UI 구현
- [x] 카드 유효기간 입력 UI 구현
- [x] 카드 CVC 번호 입력 UI 구현
- [x] 에러 메시지 UI 구현

### 유효성 처리

- [x] 숫자 유효성 검증 구현

### 기능

- [x] 카드 식별 로직 구현
- [x] 입력 값에 따라 카드 프리뷰에 동적으로 추가

## 📌 `Step2` 기능 요구사항

### UI

- [x] 카드사 선택 Select UI 구현
- [x] 비밀번호 Input UI 구현

### 동적 입력 UI 구현

- [x] 사용자는 카드 번호를 입력할 때 동적으로 제공되는 입력 UI를 통해 집중적으로 하나의 입력 필드에만 집중할 수 있다.
- [x] 입력 필드는 사용자의 입력이 완료되면 다음 필드로 자동으로 이동한다.

### 카드사 선택

- [x] 사용자는 카드사를 선택할 수 있고, 카드사에 따라 미리보기 카드의 색상을 변경한다.

### 유효성 처리

- [x] 입력은 숫자만 가능하며, 유효하지 않은 값을 입력 시 피드백을 제공한다.
  - 음수나 1e 같은 값 에러 처리
  - 올바른 유효기간인지 검증 (연도, 월)
  - 선택 값 필수로 누르지 않은 경우 에러 처리

### 폼 제출 및 상태 관리

- [x] 모든 카드 정보가 정확하게 입력되고 검증되었을 때 확인 버튼이 활성화된다.
- [x] 사용자가 입력한 정보 중 하나라도 지우거나 수정하여 유효하지 않게 되면, 확인 버튼은 보이지 않는다.

### 카드 등록 완료 및 네비게이션

- [x] 확인 버튼을 클릭하면 사용자는 카드 등록 완료 페이지로 이동한다.
- [x] 카드 등록 완료 페이지에서는 카드 등록이 성공적으로 완료되었다는 메시지와 함께, 다시 카드 등록 페이지로 돌아갈 수 있는 확인 버튼을 제공한다.

## 📌 CSS Library

- styled-components

## 📌 UI Test

- Storybook

## 📌 컴포넌트 관계도

### ✔️ CardForm 페이지 (path: "/")

```
├── <CardPreview> (카드 프리뷰)
├── <CardFormScrollStyles> (하위 컴포넌트는 조건부 렌더링)
│   ├── <CardFormSection type="password"> (비밀번호)
│   │   ├── <Title>
│   │   ├── <Description>
│   │   ├── <Subtitle>
│   │   ├── <CardPasswordInput autoFocus/>
│   │   └── <Error>
│   │
│   ├── <CardFormSection type="cvcNumber"> (CVC 번호)
│   │   ├── <Title>
│   │   ├── <Description>
│   │   ├── <Subtitle>
│   │   ├── <CardCvcInput autoFocus/>
│   │   └── <Error>
│   │
│   ├── <CardFormSection type="expirationPeriod"> (유효 기간)
│   │   ├── <Title>
│   │   ├── <Description>
│   │   ├── <Subtitle>
│   │   ├── <CardExpirationPeriodInput autoFocus/>
│   │   └── <Error>
│   │
│   ├── <CardFormSection type="cardCompany"> (카드사)
│   │   ├── <Title>
│   │   ├── <Description>
│   │   ├── <Subtitle>
│   │   ├── <CardCompanySelect autoFocus/>
│   │   └── <Error>
│   │
│   └── <CardFormSection type="cardNumber"> (카드 번호)
│       ├── <Title>
│       ├── <Description>
│       ├── <Subtitle>
│       ├── <CardNumberInput autoFocus/>
│       └── <Error>
│
└── <Button type="submit"> (카드 등록 버튼: 조건부 렌더링 - isFormComplete일 때만)
```

### ✔️ RegisterComplete 페이지 (path: "/register-complete")

```
├── <CheckImgStyles>
├── <CompletionMessageStyles>
│   ├── <CompletionTitleStyles> (카드번호 첫 부분)
│   └── <CompletionTitleStyles> (카드사 이름)
└── <Button onClick={handleConfirm}> (초기 화면 이동 버튼)
```
