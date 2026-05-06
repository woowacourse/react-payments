# 카드 등록 페이지 (Card Register Page)

결제 카드 정보를 입력받는 페이지로, 사용자의 입력에 따라 실시간으로 카드 프리뷰를 업데이트하고 유효성을 검사하는 기능을 제공합니다.

## 구현 사항 체크리스트

### 1. UI 및 컴포넌트 (Reusability)
- [x] 공통 컴포넌트: 라벨(Label), 설명 텍스트(Description), 입력창(Input), 타이틀(Title) 분리
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
- [x] 카드 번호의 9~16번째 자리는 마스킹 처리 (예: `1234 5678 **** ****`)
- [x] 초기 상태에서는 placeholder 텍스트 표시

#### 만료일 표시 (Card Expiry Date Display)
- [x] 사용자 입력에 따라 실시간으로 만료일 표시
- [x] 월 또는 년도 둘 중 하나가 올바르게 입력됐을 때만 `/` 기호 표시 (예: `MM/YY`)
- [x] 입력이 없을 때는 placeholder 텍스트 표시

#### 카드 브랜드 로고 (Card Brand Logo)
- [x] 카드 번호 입력 조건 충족 시 해당 카드사 로고 표시
  - **Visa:** `4`로 시작하는 16자리 숫자
  - **MasterCard:** `51`~`55`로 시작하는 16자리 숫자
- [x] 위 조건을 만족하지 않으면 로고 미표시
- [x] 실시간으로 브랜드 로고 업데이트

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
  - onBlur: 숫자 1개만 입력했을 때 자동으로 0 앞에 붙여서 2자리로 완성 (예: `2` → `02`)
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

#### 에러 메시지
- [x] 입력 예외 발생 시에만 에러 텍스트 표시
- [x] 에러 텍스트 색상: `#FF3D3D`

### 4. 기능 및 유효성 검사 (State Management & Readability)
- [x] 폼 라이브러리 미사용 (커스텀 훅으로 폼 상태 중앙 관리)
- [x] 에러 로직을 뷰 컴포넌트와 분리하여 명확한 가독성 확보
- [x] 각 입력 필드별 독립적인 상태 관리 및 실시간 유효성 검사
- [x] styled-components를 활용한 동적 스타일링 적용

## 기능 요구 사항

### 카드 번호 입력 및 식별
- 사용자가 입력하는 카드 번호를 실시간으로 파악하여 카드 프리뷰 영역에 표시
- 입력은 숫자만 가능하며, 유효하지 않은 입력 시 에러 피드백(에러 텍스트 및 빨간 테두리) 제공
- "결제할 카드 번호를 입력해 주세요" 안내 텍스트 표시
- "본인 명의의 카드만 결제 가능합니다." 설명 텍스트 표시

### 카드 브랜드 구분 로직
- **Visa:** `4`로 시작하는 16자리 숫자
- **MasterCard:** `51`~`55`로 시작하는 16자리 숫자
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

### 실시간 프리뷰 업데이트
- 사용자의 카드 정보 입력에 따라 카드 프리뷰 화면이 실시간으로 동기화
- 각 입력 필드의 변화가 즉시 카드 이미지에 반영

## 폴더 구조

```
src/
├── common/
│   ├── components/
│   │   ├── Title/
│   │   │   └── Title.tsx
│   │   ├── Description/
│   │   │   └── Description.tsx
│   │   ├── Label/
│   │   │   └── Label.tsx
│   │   └── Input/
│   │       └── Input.tsx
│   ├── types/
│   │   └── CardInfoType.ts
│   └── styles/
│       └── reset.css
├── feature/
│   └── CardRegister/
│       ├── CardRegisterPage.tsx
│       └── components/
│           ├── CardPreviewSection/
│           │   ├── CardPreviewSection.tsx
│           │   ├── CardPreviewContainer/
│           │   │   └── CardPreviewContainer.tsx
│           │   ├── CardNumberDisplay/
│           │   │   └── CardNumberDisplay.tsx
│           │   ├── CardExpiryDateDisplay/
│           │   │   └── CardExpiryDateDisplay.tsx
│           │   └── CardBrandLogo/
│           │       └── CardBrandLogo.tsx
│           └── InfoInputSection/
│               ├── InfoInputSection.tsx
│               ├── NumberField/
│               │   └── NumberField.tsx
│               ├── ExpiryField/
│               │   └── ExpiryField.tsx
│               ├── CvcField/
│               │   └── CvCField.tsx
│               └── InputContainer/
│                   └── InputContainer.tsx
├── App.tsx
└── main.tsx
```

## 주요 컴포넌트 설명

### Common Components
- **Title**: 섹션 제목 텍스트 표시
- **Description**: 섹션 설명 텍스트 표시
- **Label**: 입력 필드 라벨 표시
- **Input**: 기본 입력 필드 (에러 상태, 포커스 상태 지원)

### Card Preview Section
- **CardPreviewSection**: 카드 프리뷰 영역 전체 컴포넌트
- **CardPreviewContainer**: 카드 이미지 및 정보를 렌더링하는 카드 컨테이너
- **CardNumberDisplay**: 마스킹 처리된 카드 번호 표시 (4자리씩 묶음)
- **CardExpiryDateDisplay**: 유효기간 표시 (올바른 입력 시에만 `/` 표시)
- **CardBrandLogo**: 카드 브랜드 로고 표시 (조건 충족 시에만)

### Info Input Section
- **InfoInputSection**: 카드 정보 입력 영역 전체 컴포넌트
- **NumberField**: 카드 번호 입력 (4자리씩 4개 입력칸)
- **ExpiryField**: 유효기간 입력 (2자리씩 2개 입력칸 - 월, 년)
- **CvcField**: CVC 번호 입력 (3자리 입력칸)
- **InputContainer**: 입력 필드를 위한 컨테이너 컴포넌트
