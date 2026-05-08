# 페이먼츠

## 카드 등록 페이지

결제 카드 정보를 입력받는 페이지로, 사용자의 입력에 따라 실시간으로 카드 프리뷰를 업데이트하고 유효성을 검사하는 기능을 제공합니다.

### 1. UI 및 컴포넌트 (Reusability)

- [x] 공통 컴포넌트: 라벨(Label), 설명 텍스트(Description), 입력창(Input), 타이틀(Title), 버튼(Button) 분리
- [x] 컴포넌트별 전용 스타일과 글로벌 테마(Theme) 분리 적용
- [x] 모든 입력 폼의 에러 발생 시 테두리 빨간색(`#FF3D3D`) 처리
- [x] 모든 입력 폼의 포커스 시 테두리 검은색(`#000000`) 강조 처리
- [x] Storybook을 활용한 컴포넌트 시각적 테스트 및 상태 관리

### 2. 카드 프리뷰 영역 (Card Preview Section)

#### 카드 이미지

- [x] 카드 모양 이미지를 배경으로 렌더링

#### 카드 번호 표시 (Card Number Display)

- [x] 사용자 입력에 따라 실시간으로 카드 번호 표시
- [x] 카드 번호는 4자리씩 묶어서 표시 (예: `1234 5678 9012 3456`)
  - [ ] 카드번호가 16자리보다 적은 경우도 묶어서 표시 (예: `1234 5678 9012 34`)
- [x] 카드 번호의 9~16번째 자리는 마스킹 처리 (예: `1234 5678 **** ****`)
  - [ ] 카드번호가 16자리보다 적은 경우도 마스킹 처리 (예: `1234 5678 **** **`)
- [x] 초기 상태에서는 placeholder 텍스트 표시

#### 만료일 표시 (Card Expiry Date Display)

- [x] 사용자 입력에 따라 실시간으로 만료일 표시
- [x] 월 또는 년도 둘 중 하나가 올바르게 입력됐을 때만 `/` 기호 표시 (예: `MM/YY`)
- [x] 입력이 없을 때는 placeholder 텍스트 표시

#### 카드 타입 로고 (Card Type Logo)

- [x] 카드 번호 입력 조건 충족 시 해당 카드사 로고 표시
  - **Visa:** `4`로 시작하는 16자리 숫자
  - **MasterCard:** `51`~`55`로 시작하는 16자리 숫자
  - **Diners:** `36`로 시작하는 14자리 숫자
  - **AMEX:** `34`, `35`로 시작하는 15자리 숫자
  - **유니온페이:** `622126`~`622925`, `624~626`, `6282~6288`로 시작하는 16자리 숫자
- [x] 위 조건을 만족하지 않으면 로고 미표시
- [x] 실시간으로 브랜드 로고 업데이트

#### 카드 브랜드 색상 (Card Brand Color)

- [x] 카드 브랜드 선택 시 카드 색을 해당하는 색으로 표시 (기본값: `#333333`)
  - **BC카드:** `#f64655`
  - **신한카드:** `#0046ff`
  - **카카오뱅크:** `#ffe100`
  - **현대카드:** `#000000`
  - **우리카드:** `#1388c9`
  - **롯데카드:** `#f7192a`
  - **하나카드:** `#0b9992`
  - **국민카드:** `#6f665b`
- [x] 실시간으로 색상 업데이트

### 3. 카드 정보 입력 영역 (Info Input Section)

#### 카드 번호 입력 (Card Number Input)

- [x] 입력 형식: 4자리씩 4개 입력칸 (총 16자리)
- [x] 숫자만 입력 가능하며, 숫자 외 입력은 자동 차단
- [x] 각 입력칸의 placeholder: `1234`
- [x] 입력 중인 칸의 테두리를 검은색(`#000000`)으로 강조
- [x] 에러 발생 시 테두리를 빨간색(`#FF3D3D`)으로 표시
- [x] 입력 때마다 실시간으로 카드 프리뷰 업데이트
- [x] 순차적 에러 유효성 검사:
  - **실시간 검증:** 숫자 하나 입력할 때마다 숫자인지 확인
  - **필드 검증:** 필드 입력 완료 후마다 자릿수(4자리) 확인

#### 카드 유효기간 입력 (Card Expiry Date Input)

- [x] 입력 형식: 2자리씩 2개 입력칸 (월 MM, 년 YY)
- [x] 숫자만 입력 가능하며, 숫자 외 입력은 자동 차단
- [x] 각 입력칸의 placeholder: `MM`, `YY`
- [x] 입력 중인 칸의 테두리를 검은색(`#000000`)으로 강조
- [x] 에러 발생 시 테두리를 빨간색(`#FF3D3D`)으로 표시
- [x] 입력 때마다 실시간으로 카드 프리뷰 업데이트
- [x] **월(MM) 입력 예외 처리:**
  - onBlur: 0을 제외한 숫자 1개만 입력했을 때 자동으로 0 앞에 붙여서 2자리로 완성 (예: `5` → `05`)
  - onBlur: 자릿수 검증 (2자리 확인)
  - onChange: 숫자가 아닌 입력값 차단
  - onChange: isTouched가 false일 때는 숫자 입력만 허용
  - onChange: isTouched가 true이고 length === 2일 때 에러 자동 해제
- [x] **년(YY) 입력 예외 처리:**
  - onBlur: 자릿수 검증 (2자리 확인)
  - onChange: 숫자가 아닌 입력값 차단
  - onChange: isTouched가 false일 때는 숫자 입력만 허용
  - onChange: isTouched가 true이고 length === 2일 때 에러 자동 해제

#### CVC 번호 입력 (CVC Input)

- [x] 입력 형식: 3자리 입력칸 (세 자리 숫자)
- [x] 숫자만 입력 가능하며, 숫자 외 입력은 자동 차단
- [x] 입력칸의 placeholder: `123`
- [x] 입력 중인 칸의 테두리를 검은색(`#000000`)으로 강조
- [x] 에러 발생 시 테두리를 빨간색(`#FF3D3D`)으로 표시
- [x] 순차적 에러 유효성 검사:
  - **실시간 검증:** 숫자 하나 입력할 때마다 숫자인지 확인
  - **필드 검증:** 필드 입력 완료 후마다 자릿수(3자리) 확인

#### 카드사 선택 (Card Brand Select)

- [x] 제공되는 카드사 중 하나 선택
- [x] 선택창의 placeholder: `카드사를 선택해주세요`
- [x] 입력 중인 칸의 테두리를 검은색(`#000000`)으로 강조
- [x] 에러 발생 시 테두리를 빨간색(`#FF3D3D`)으로 표시
- [x] 포커스 시 테두리를 회색(`#ACACAC`)으로 강조

#### 비밀번호 입력 (Password Input)

- [x] 입력 형식: 2자리 입력칸 (두 자리 숫자)
- [x] 숫자만 입력 가능하며, 숫자 외 입력은 자동 차단
- [x] 비밀번호 마스킹 처리 (예: `**`)
- [x] 입력칸의 placeholder: `**`
- [x] 입력 중인 칸의 테두리를 검은색(`#000000`)으로 강조
- [x] 에러 발생 시 테두리를 빨간색(`#FF3D3D`)으로 표시
- [x] 순차적 에러 유효성 검사:
  - **실시간 검증:** 숫자 하나 입력할 때마다 숫자인지 확인
  - **필드 검증:** 필드 입력 완료 후마다 자릿수(2자리) 확인

#### 에러 메시지

- [x] 입력 예외 발생 시에만 에러 텍스트 표시
- [x] 에러 텍스트 색상: `#FF3D3D`

### 4. 기능 및 유효성 검사 (State Management & Readability)

- [x] 폼 라이브러리 미사용 (커스텀 훅으로 폼 상태 중앙 관리)
- [x] 에러 로직을 뷰 컴포넌트와 분리하여 명확한 가독성 확보
- [x] 각 입력 필드별 독립적인 상태 관리 및 실시간 유효성 검사
- [x] styled-components를 활용한 동적 스타일링 적용

### 5. 동적 UI 기능

- [x] 입력창을 모두 채우면 다음 입력창에 자동으로 이동한다.
  - [x] 다음 입력창이 없다면, 다음 필드로 이동한다.
- [x] 모든 필드에 유효한 값이 입력되면 제출 버튼이 생성된다.

### 6. 폼 제출 기능

- [ ] '확인' 버튼을 누르면 사용자가 입력한 데이터(카드 번호 앞 4자리, 카드사)를 카드 등록 완료 페이지에 전달한다.

## 카드 등록 완료 페이지

카드가 성공적으로 등록되었음을 보여주는 페이지로, 사용자가 입력한 카드 번호와 카드사를 메세지로 보여주며 카드 등록 페이지로 되돌아갈 수 있다.

### 1. 등록 완료 페이지 영역

- [ ] 등록 페이지로부터 전달받은 데이터를 표시한다.

### 2. 초기 화면 이동 기능

- [ ] '확인' 버튼을 누르면 카드 등록 페이지로 이동한다.

---

## 기능 요구 사항

### 카드 번호 입력 및 식별

- 사용자가 입력하는 카드 번호를 실시간으로 파악하여 카드 프리뷰 영역에 표시
- 입력은 숫자만 가능하며, 유효하지 않은 입력 시 에러 피드백(에러 텍스트 및 빨간 테두리) 제공
- "결제할 카드 번호를 입력해 주세요" 안내 텍스트 표시
- "본인 명의의 카드만 결제 가능합니다." 설명 텍스트 표시

### 카드 브랜드 구분 로직

- **Visa:** `4`로 시작하는 16자리 숫자
- **MasterCard:** `51`~`55`로 시작하는 16자리 숫자
- **Diners:** `36`로 시작하는 14자리 숫자
- **AMEX:** `34`, `35`로 시작하는 15자리 숫자
- **유니온페이:** `622126`~`622925`, `624~626`, `6282~6288`로 시작하는 16자리 숫자
- 위 조건을 만족하지 않으면 로고 미표시

### 카드 유효기간 입력

- "카드 유효기간을 입력해 주세요" 안내 텍스트 표시
- "월/년도(MMYY)를 순서대로 입력해 주세요." 설명 텍스트 표시
- 월과 년도를 범위 내에서만 입력 가능하도록 제한
- 숫자만 입력하도록 제한
- 부분 입력 시 자동으로 앞에 0을 붙여서 2자리로 완성

### CVC 번호 입력

- "CVC 번호를 입력해 주세요" 안내 텍스트 표시
- 숫자 3자리만 입력 가능
- 숫자 외 입력은 자동 차단

### 카드 브랜드 선택

- 제공되는 카드 브랜드 중 하나 선택

### 비밀번호 입력

- "비밀번호를 입력해 주세요" 안내 텍스트 표시
- 숫자 2자리만 입력 가능
- 숫자 외 입력은 자동 차단
- 비밀번호는 보이지 않음

### 실시간 프리뷰 업데이트

- 사용자의 카드 정보 입력에 따라 카드 프리뷰 화면이 실시간으로 동기화
- 각 입력 필드의 변화가 즉시 카드 이미지에 반영

### 동적 UI

- 입력 필드는 사용자의 입력이 완료되면 다음 필드로 자동으로 이동한다.

## 폴더 구조

```
src/
├── common/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Description.tsx
│   │   ├── Input.tsx
│   │   ├── Label.tsx
│   │   └── Title.tsx
│   ├── hooks/
│   │   └── useFieldValidation.ts
│   └── types/
│       ├── CardPreview.ts
│       └── CardPreviewInfoType.ts
├── feature/
│   └── CardRegister/
│       ├── CardRegisterPage.tsx
│       ├── constant/
│       │   └── CARD_BRANDS.ts
│       ├── components/
│       │   ├── CardPreviewSection/
│       │   │   ├── CardPreviewSection.tsx
│       │   │   ├── CardPreviewContainer.tsx
│       │   │   ├── CardNumberDisplay.tsx
│       │   │   ├── CardExpiryDateDisplay.tsx
│       │   │   └── CardBrandLogo.tsx
│       │   └── InfoInputSection/
│       │       ├── InfoInputSection.tsx
│       │       ├── FieldSection.tsx
│       │       ├── NumberField.tsx
│       │       ├── SelectCardBrandField.tsx
│       │       ├── ExpiryField.tsx
│       │       ├── CvCField.tsx
│       │       └── PasswordField.tsx
│       └── utils/
│           ├── cardDisplay.ts
│           ├── cardFormValidator.ts
│           └── validator.ts
├── stories/
│   ├── common/
│   │   └── components/
│   │       ├── Description.stories.tsx
│   │       ├── Input.stories.tsx
│   │       ├── Label.stories.tsx
│   │       └── Title.stories.tsx
│   └── feature/
│       └── CardRegister/
│           ├── CardRegisterPage.stories.tsx
│           └── components/
│               ├── CardPreviewSection/
│               │   ├── CardBrandLogo.stories.tsx
│               │   ├── CardExpiryDateDisplay.stories.tsx
│               │   ├── CardNumberDisplay.stories.tsx
│               │   ├── CardPreviewContainer.stories.tsx
│               │   └── CardPreviewSection.stories.tsx
│               └── InfoInputSection/
│                   ├── CvCField.stories.tsx
│                   ├── ExpiryField.stories.tsx
│                   ├── FieldSection.stories.tsx
│                   ├── InfoInputSection.stories.tsx
│                   └── NumberField.stories.tsx
├── styles/
│   └── reset.css
└── main.tsx
```

## 주요 컴포넌트 설명

### Common Components

- **Title**: 섹션 제목 텍스트 표시
- **Description**: 섹션 설명 텍스트 표시
- **Label**: 입력 필드 라벨 표시
- **Input**: 기본 입력 필드 (native input props, 에러 상태, 포커스 상태, ref 전달 지원)
- **Button**: 기본 버튼 컴포넌트 (native button props 지원)

### Card Preview Section

- **CardPreviewSection**: 카드 프리뷰 영역 전체 컴포넌트
- **CardPreviewContainer**: 카드 이미지 및 정보를 렌더링하는 카드 컨테이너
- **CardNumberDisplay**: 마스킹 처리된 카드 번호 표시 (4자리씩 묶음)
- **CardExpiryDateDisplay**: 유효기간 표시 (올바른 입력 시에만 `/` 표시)
- **CardBrandLogo**: 카드 번호 기반 카드 타입 로고 표시 (Visa, Mastercard 조건 충족 시)

### Info Input Section

- **InfoInputSection**: 카드 정보 입력 영역 전체 컴포넌트. 단계별 필드 노출과 제출 흐름 관리
- **FieldSection**: 입력 필드의 제목, 설명, children을 묶는 섹션 레이아웃 컴포넌트
- **NumberField**: 카드 번호 입력 (4자리씩 4개 입력칸, 입력 완료 시 다음 칸 포커스 이동)
- **SelectCardBrandField**: 카드사 선택 입력 (선택한 카드사 id를 상위 form 상태로 전달)
- **ExpiryField**: 유효기간 입력 (2자리씩 2개 입력칸 - 월, 년)
- **CvcField**: CVC 번호 입력 (3자리 입력칸)
- **PasswordField**: 카드 비밀번호 앞 2자리 입력
