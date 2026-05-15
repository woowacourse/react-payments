# 카드 결제 관리 페이지 (React Payments)

카드 등록과 카드 목록 관리를 제공하는 결제 카드 관리 애플리케이션입니다.

사용자는 카드 정보를 단계적으로 입력해 카드를 등록할 수 있고, 등록된 카드는 `/cards` 목록 페이지에서 조회·삭제할 수 있습니다. 서버 연동은 MSW로 모킹하며, 비동기 상태는 `idle | loading | success | error` 네 가지로 명시적으로 관리합니다.

## 구현 사항 체크리스트

### 1. UI 및 컴포넌트 (Reusability)
- [x] 공통 컴포넌트: 라벨(Label), 설명 텍스트(Description), 입력창(Input), 타이틀(Title) 분리
- [x] 카드 등록 화면과 카드 목록 화면을 Feature 단위로 분리
- [x] 모든 입력 폼의 에러 발생 시 테두리 빨간색(`#FF3D3D`) 처리
- [x] 모든 입력 폼의 포커스 시 테두리 검은색(`#000000`) 강조 처리
- [x] Storybook을 활용한 컴포넌트 시각적 테스트 및 상태 관리
- [x] 카드 목록 loading / empty / success / error 상태별 화면 구성

### 2. 카드 프리뷰 영역 (Card Preview Section)

#### 카드 이미지
- [x] 카드 모양 이미지를 배경으로 렌더링
- [x] 선택한 카드사에 따라 카드 배경색 변경

#### 카드 번호 표시 (Card Number Display)
- [x] 사용자 입력에 따라 실시간으로 카드 번호 표시
- [x] 브랜드별 카드 번호 포맷 지원
  - Visa / Mastercard / UnionPay: `4-4-4-4`
  - AMEX: `4-6-5`
  - Diners: `4-6-4`
- [x] 카드 번호 일부 마스킹 표시
- [x] 초기 상태에서는 placeholder 텍스트 표시

#### 만료일 표시 (Card Expiry Date Display)
- [x] 사용자 입력에 따라 실시간으로 만료일 표시
- [x] 월 또는 년도 둘 중 하나가 올바르게 입력됐을 때만 `/` 기호 표시
- [x] 입력이 없을 때는 placeholder 텍스트 표시

#### 카드 브랜드 로고 (Card Brand Logo)
- [x] 카드 번호 BIN 조건 충족 시 해당 카드 브랜드 로고 표시
  - Visa
  - Mastercard
  - AMEX
  - Diners
  - UnionPay
- [x] 위 조건을 만족하지 않으면 로고 미표시
- [x] 실시간으로 브랜드 로고 업데이트

### 3. 카드 정보 입력 영역 (Info Input Section)

#### 카드 번호 입력 (Card Number Input)
- [x] 숫자만 입력 가능하며, 숫자 외 입력은 자동 차단
- [x] 브랜드에 따라 입력칸 포맷 동적 변경
- [x] 각 입력칸의 placeholder 자동 생성
- [x] 입력 중인 칸의 테두리를 검은색(`#000000`)으로 강조
- [x] 에러 발생 시 테두리를 빨간색(`#FF3D3D`)으로 표시
- [x] 입력 때마다 실시간으로 카드 프리뷰 업데이트
- [x] 순차적 에러 유효성 검사

#### 카드사 선택 (Company Select)
- [x] 국내 카드사 8종 선택 지원
  - BC카드, 신한카드, 카카오뱅크, 현대카드, 우리카드, 롯데카드, 하나카드, 국민카드
- [x] 카드사별 `issuerCode`를 서버 요청에 포함
- [x] 카드사별 색상 정보를 카드 프리뷰와 목록 프리뷰에 활용

#### 카드 유효기간 입력 (Card Expiry Date Input)
- [x] 입력 형식: 2자리씩 2개 입력칸 (월 MM, 년 YY)
- [x] 숫자만 입력 가능하며, 숫자 외 입력은 자동 차단
- [x] 각 입력칸의 placeholder: `MM`, `YY`
- [x] 입력 중인 칸의 테두리를 검은색(`#000000`)으로 강조
- [x] 에러 발생 시 테두리를 빨간색(`#FF3D3D`)으로 표시
- [x] 입력 때마다 실시간으로 카드 프리뷰 업데이트
- [x] 월(MM)은 `01~12` 범위 검증
- [x] 부분 입력 시 자동으로 앞에 0을 붙여서 2자리로 완성

#### CVC 번호 입력 (CVC Input)
- [x] 입력 형식: 3자리 입력칸
- [x] 숫자만 입력 가능하며, 숫자 외 입력은 자동 차단
- [x] 입력칸의 placeholder: `123`
- [x] 입력 중인 칸의 테두리를 검은색(`#000000`)으로 강조
- [x] 에러 발생 시 테두리를 빨간색(`#FF3D3D`)으로 표시
- [x] 순차적 에러 유효성 검사

#### 비밀번호 입력 (Password Input)
- [x] 비밀번호 앞 2자리 입력 지원
- [x] 클라이언트 form 검증에만 사용
- [x] 카드 등록 요청에는 포함하지 않음

#### 에러 메시지
- [x] 입력 예외 발생 시에만 에러 텍스트 표시
- [x] 서버 400 응답의 `code`를 입력 필드로 매핑
- [x] 서버 에러 발생 시 해당 필드 아래에 메시지 표시
- [x] 서버 에러 발생 시 해당 입력 필드로 focus 이동

### 4. 카드 목록 영역 (Card List)

#### 카드 목록 조회
- [x] `/cards` 진입 시 `GET /cards`로 카드 목록 조회
- [x] 루트(`/`) 진입 시 `/cards`로 리다이렉트
- [x] loading 상태에서 스켈레톤 UI 표시
- [x] success + 빈 목록 상태에서 `등록된 카드가 없습니다` 안내 표시
- [x] success + 카드 있음 상태에서 카드 프리뷰 리스트 표시
- [x] error 상태에서 에러 메시지와 재시도 버튼 표시

#### 카드 목록 프리뷰
- [x] 서버 응답의 마스킹 카드 번호를 그대로 표시
- [x] `issuerCode`로 카드사 이름과 카드 색상 표시
- [x] 목록 프리뷰는 로고 없이 단색 카드로 표시
- [x] 카드 개수가 0개면 `보유 카드`만 표시
- [x] 카드 개수가 1개 이상이면 `보유 카드 (n)` 표시

#### 카드 삭제
- [x] 각 카드 오른쪽에 삭제 버튼 표시
- [x] 삭제 버튼 클릭 시 `window.confirm()`으로 확인
- [x] 취소 시 `DELETE` 요청을 보내지 않음
- [x] 확인 시 `DELETE /cards/:id` 요청
- [x] 삭제 성공 후 목록 재조회

### 5. 서버 연동 및 테스트 (MSW & Testing)
- [x] `POST /cards` handler 작성
- [x] `GET /cards` handler 작성
- [x] `DELETE /cards/:id` handler 작성
- [x] 카드 등록 400 시나리오 작성
  - `INVALID_CARD_NUMBER`
  - `INVALID_CVC`
  - `INVALID_EXPIRATION_DATE`
  - `INVALID_ISSUER_CODE`
- [x] 등록 성공 시 `crypto.randomUUID()`로 서버 id 생성
- [x] 조회 응답은 `앞 6자리 + 중간 마스킹 + 뒤 4자리` 형식으로 반환
- [x] React Testing Library와 MSW로 사용자 관점 통합 테스트 작성

## 기능 요구 사항

### 카드 등록
- 사용자가 입력하는 카드 번호를 실시간으로 파악하여 카드 프리뷰 영역에 표시
- 카드 번호, 카드사, 유효기간, CVC, 비밀번호를 순차적으로 입력
- 입력은 숫자만 가능하며, 유효하지 않은 입력 시 에러 피드백 제공
- 등록 버튼 클릭 시 `POST /cards`로 카드 정보 전송
- 등록 성공 시 카드 목록 페이지(`/cards`)로 이동
- 서버가 400 응답을 반환하면 `code`를 입력 필드로 매핑해 메시지 표시
- PIN 앞 2자리는 서버로 전송하지 않음

### 카드 브랜드 구분 로직
- **Visa:** `4`로 시작하는 16자리 숫자
- **Mastercard:** `51~55`로 시작하는 16자리 숫자
- **AMEX:** `34`, `37`로 시작하는 15자리 숫자
- **Diners:** `36`으로 시작하는 14자리 숫자
- **UnionPay:** `622126~622925`, `624~626`, `6282~6288`로 시작하는 16자리 숫자
- 위 조건을 만족하지 않으면 로고 미표시

### 카드 목록
- 페이지 진입 시 `GET /cards`로 등록된 카드 목록 조회
- `idle | loading | success | error` 상태를 명시적으로 관리
- loading: 스켈레톤 UI
- success + 목록 비어 있음: `등록된 카드가 없습니다`
- success + 목록 있음: 카드 프리뷰 리스트
- error: 에러 메시지와 재시도 버튼

### 카드 삭제
- 카드별 삭제 버튼 제공
- 삭제 전 `window.confirm()`으로 확인
- 확인 시 `DELETE /cards/:id` 요청
- 취소 시 요청 없음
- 삭제 성공 후 목록 갱신

## API 스펙

### POST /cards

요청:

```json
{
  "number": "5511123456789012",
  "expirationDate": "12/28",
  "cvc": "123",
  "issuerCode": "31"
}
```

성공 응답:

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

에러 응답:

```json
{
  "code": "INVALID_CARD_NUMBER",
  "message": "유효하지 않은 카드 번호입니다."
}
```

### GET /cards

응답:

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "issuerCode": "31",
    "number": "551112******9012",
    "expirationDate": "12/28"
  }
]
```

### DELETE /cards/:id

- 성공 status: `204 No Content`
- 존재하지 않는 id여도 `204` 반환

## 폴더 구조

```text
src/
├── api/
│   └── cardsApi.ts
├── common/
│   ├── components/
│   │   ├── Input/
│   │   └── Typography/
│   ├── styles/
│   │   └── reset.css
│   └── utils/
├── domain/
│   └── card/
│       ├── cardApi.types.ts
│       ├── cardBrand.ts
│       ├── cardBrandMatchers.ts
│       ├── cardCompany.ts
│       └── cardNumberMask.ts
├── feature/
│   ├── CardList/
│   │   ├── CardListPage.tsx
│   │   ├── CardListPage.stories.tsx
│   │   ├── components/
│   │   │   ├── CardListEmpty.tsx
│   │   │   ├── CardListError.tsx
│   │   │   ├── CardListItem.tsx
│   │   │   ├── CardListLoading.tsx
│   │   │   └── CardListSuccess.tsx
│   │   └── hooks/
│   │       └── useCards.ts
│   ├── CardRegister/
│   │   ├── CardRegisterPage.tsx
│   │   ├── CardRegisterPage.stories.tsx
│   │   ├── components/
│   │   │   ├── inputs/
│   │   │   ├── previews/
│   │   │   └── sections/
│   │   ├── hooks/
│   │   │   ├── form/
│   │   │   └── ui/
│   │   └── utils/
│   └── CardRegisterComplete/
├── mocks/
│   ├── browser.ts
│   ├── cardStore.ts
│   ├── handlers.ts
│   └── server.ts
├── test/
│   └── setup.ts
├── App.test.tsx
├── App.tsx
└── main.tsx
```

## 주요 컴포넌트 설명

### Common Components
- **Title**: 섹션 제목 텍스트 표시
- **Description**: 섹션 설명 텍스트 표시
- **Label**: 입력 필드 라벨 표시
- **Input**: 기본 입력 필드 (에러 상태, 포커스 상태 지원)

### Domain
- **cardApi.types**: 카드 API 요청·응답·에러 타입
- **cardCompany**: 카드사 이름, issuerCode, 색상 정보
- **cardBrand**: 카드 브랜드 포맷과 브랜드 감지
- **cardBrandMatchers**: 카드 브랜드별 BIN 매칭 함수
- **cardNumberMask**: 등록 화면 프리뷰용 카드 번호 마스킹

### API & Mocks
- **cardsApi**: `POST /cards`, `GET /cards`, `DELETE /cards/:id` fetch 함수
- **handlers**: MSW API handler
- **cardStore**: MSW에서 사용하는 카드 저장소와 응답 마스킹 처리
- **browser**: 브라우저 환경 MSW worker
- **server**: 테스트 환경 MSW server

### Card Register Section
- **CardRegisterPage**: 카드 등록 화면 전체 조립
- **useCardRegisterForm**: 카드 등록 폼 상태, 서버 제출, 서버 에러 매핑 담당
- **NumberField**: 카드 번호 입력
- **CompanySelectField**: 카드사 선택
- **ExpiryField**: 유효기간 입력
- **CvcField**: CVC 입력
- **PasswordField**: 비밀번호 앞 2자리 입력
- **CardPreviewContainer**: 카드 번호, 브랜드, 만료일, 카드사 색상 프리뷰 표시

### Card List Section
- **CardListPage**: 카드 목록 페이지 전체 조립
- **useCards**: 카드 목록 조회, 재시도, 삭제 후 재조회 담당
- **CardListLoading**: loading 상태 스켈레톤
- **CardListEmpty**: 등록된 카드가 없는 상태
- **CardListSuccess**: 카드 목록이 있는 상태
- **CardListError**: 목록 조회 실패 상태와 재시도 버튼
- **CardListItem**: 카드 정보와 삭제 버튼 표시

## 실행 방법

```bash
npm install
npm run dev
```

## 검증 명령어

```bash
npm run test
npm run build
npm run lint
npm run build-storybook
```
