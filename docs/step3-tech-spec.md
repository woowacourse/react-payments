# Step-3 Tech Spec — MSW, Async, Testing

이번 단계의 목표, 설계 철학, 도메인 모델, 컴포넌트 아키텍처, 그리고 실제 구현 결과까지 한 문서에 정리한다. 작성자의 사고 흐름과 결정 근거가 같이 남아 있어야 step-3가 끝난 뒤에도 왜 그렇게 짰는지를 재구성할 수 있다.

---

## 1. 개요

### 1.1 목적

- MSW로 네트워크 경계를 모킹하고, 프론트엔드가 보는 서버의 모습을 명시적으로 설계한다.
- 비동기 상태를 `idle | loading | success | error` 네 가지로 명시적으로 관리한다. `isLoading`/`error` boolean 분리는 사용하지 않는다.
- 서버-클라이언트 계약을 코드로 표현한다. 요청,응답,에러 모양이 타입으로 드러나야 한다.
- 사용자 관점의 통합 테스트를 RTL + MSW로 작성한다.

### 1.2 핵심 학습 키워드

- MSW (Mock Service Worker)
- Async State as Discriminated Union
- React Testing Library (사용자 관점 통합 테스트)
- 도메인 매핑 (UI 모델 ↔ 서버 모델)
- 에러 코드 → UI 필드 매핑
- 고차 함수 (higher-order function) — tryCatch 패턴

### 1.3 산출물

- `/cards` 페이지 (카드 목록 조회/삭제)
- 카드 등록 시 POST `/cards` 연동 + 400 에러 필드 매핑
- MSW handler (POST/GET/DELETE 및 400 시나리오)
- 비동기 4상태 패턴이 적용된 데이터 페칭 훅
- 통합 테스트 (등록,조회,삭제,에러 시나리오)

---

## 2. 설계 철학

step-2에서 학습한 원칙을 step-3에 그대로 이어가며, 새 영역(비동기,테스트)에서도 같은 사고를 적용한다.

### 2.1 변경 이유 기준 책임 분리 (SRP)

하나의 책임이란 적은 코드가 아니라 하나의 변경 이유를 의미한다.

각 컴포넌트,훅,함수는 이 모듈은 어떤 변경 이유 때문에 수정되는가라는 질문에 한 문장으로 답할 수 있어야 한다. 답이 둘 이상으로 갈리면 모듈이 잘못 묶여 있는 신호다.

### 2.2 자기 도메인의 완결성

step-2 리뷰에서 합의된 패턴: 폼이 자기 도메인의 완결 흐름(submit + 라우팅)을 책임진다.

step-3에서도 동일하게 적용한다.

- `CardRegisterationForm`은 등록 후 어디로 갈지(목록 페이지로 navigate)까지 자기 안에서 끝낸다.
- `AddCardButton`은 카드 추가 페이지로의 navigate 동작까지 자기 안에서 끝낸다.
- `DeleteButton`은 confirm + DELETE 요청 + onDelete 콜백 호출까지 자기 안에서 끝낸다.

페이지(`*Page`)는 진입점일 뿐이다. 페이지에 책임이 쏠리지 않게 한다.

### 2.3 도메인-인프라 분리

- 도메인 = 카드 등록,조회,삭제 정책 (어떤 카드를 어떻게 다루는가)
- 인프라 = fetch, MSW, react-router 같은 기술 도구

도메인 코드가 인프라 도구에 직접 의존하지 않게, 인프라는 얇은 레이어로 격리한다.

- `apis/cards.ts`가 fetch를 감싸고, 도메인 코드는 함수 시그니처만 안다.
- MSW handler는 서버 동작 명세이지 도메인 정책이 아니다.

### 2.4 명시적 상태 (Discriminated Union)

```ts
type AsyncState<T, E = ApiError> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: E };
```

`isLoading` + `error` + `data` 같은 분리된 boolean은 유효하지 않은 상태 조합(`isLoading=true`인데 `data`가 있음 등)을 표현 가능하게 만든다. discriminated union은 한 시점에는 한 상태만 존재한다는 사실을 타입으로 강제한다.

컴포넌트에서 `switch (state.status)`로 분기하면 TypeScript가 각 분기 안에서 `data`/`error`의 존재 여부를 자동으로 좁혀준다.

### 2.5 점진적 추상화 (YAGNI + Rule of Three)

- 지금 한 곳에서만 쓰이면 추상화하지 않는다.
- 두 번째 사용처가 나오면 일단 복붙해도 좋다 (의도된 중복).
- 세 번째에서 패턴이 명확해지면 그때 추출한다.
- 절반의 추상화는 피한다 — 추출한 추상화는 모든 사용처에 일관되게 적용한다.

실제 결정: `useCreateCard`, `useDeleteCard`, `useCardList` 세 훅의 비동기 패턴이 미묘하게 달라 `useAsync<T>` 공통 추상화를 하지 않았다. `useCardList`는 자동 실행 + 레이스 컨디션 처리, `useCreateCard`는 결과 반환, `useDeleteCard`는 단순 trigger로 각 훅의 관심사가 달랐다.

### 2.6 이름과 실체 일치

- 이름이 실제로 하는 일을 정확히 표현해야 한다.
- 이름이 의도된 사용처를 좁히면 안 된다.

실제 적용:
- `SubmitButton` → `PrimaryButton` (메인 CTA 범용 버튼으로 개명)
- `CardCompany` → `IssuerCode` (서버 도메인과 일치하도록)
- `CardListItem` 컴포넌트 → `CardRow` (타입명 `CardListItem`과 충돌 방지, 역할도 "행"으로 명확화)
- `CardForm` → `CardRegisterationForm` (카드 목록 컴포넌트들과 구분)

### 2.7 사용자 실수 vs 시스템 제약 (UX 톤)

- 빨간 에러 = 사용자가 고칠 수 있는 실수 (CVC에 한글, 만료일 형식 오류 등)
- 노란 warning / 회색 정보 = 사용자 실수가 아닌 시스템,정책 제약 (미지원 카드사, 한도 초과 등)

400 `INVALID_*` 응답은 사용자 실수 → 빨간 에러로 매핑. 미래의 한도 초과 같은 정책 제약은 차분한 안내 톤.

### 2.8 고차 함수로 가독성 높이기

try-catch 패턴을 `tryCatch` 고차 함수로 추출했다. 함수를 값으로 다루는 JavaScript의 일급 함수 특성을 활용한 것으로, 호출하는 쪽이 에러 처리 구현보다 성공하면 무엇을, 실패하면 무엇을이라는 의도에 집중하게 한다.

```ts
// utils/tryCatch.ts
export const tryCatch = async <T, E>(
  f: () => Promise<T>,
  onError: (error: unknown) => E,
): Promise<T | E> => {
  try {
    return await f();
  } catch (error) {
    return onError(error);
  }
};
```

`parseApiError`에 적용한 결과: try 안의 성공 흐름과 catch의 폴백을 분리해서 각 함수가 하나의 관심사만 다루게 했다.

---

## 3. 도메인 모델

### 3.1 모델의 두 측면 (UI ↔ 서버)

UI 모델과 서버 모델이 다르다. 이 사실이 step-3의 핵심 학습 포인트다.

| 항목 | UI 모델 (입력 시) | 서버 모델 (요청 시) | 서버 모델 (응답 시) |
|------|------------------|---------------------|---------------------|
| 카드 번호 | `numbers: string[]` (4개) | `number: string` (공백 제거) | `number: string` (마스킹된 형태) |
| 만료일 | `expiry: string[]` (MM, YY) | `expirationDate: string` ("MM/YY") | `expirationDate: string` ("MM/YY") |
| 카드사 | `issuerCode: string` ("31", "41"...) | `issuerCode: string` ("31", "41"...) | `issuerCode: string` ("31", "41"...) |
| CVC | `cvc: string` | `cvc: string` | (응답에 없음) |
| 비밀번호 | `password: string` | (서버에 보내지 않음) | (응답에 없음) |
| 카드 ID | (없음) | (요청에 없음) | `id: string` |
| 카드 브랜드 | `network: CardNetwork` (파생값) | (보내지 않음) | (응답에 없음) |

두 모델 사이의 변환은 명시적인 매퍼 함수 하나에 모은다. 컴포넌트나 훅 안에서 즉석으로 변환하지 않는다.

### 3.2 타입 정의

#### UI 모델 (types.ts)

```ts
export type CardInfo = {
  numbers: string[];
  expiry: string[];
  issuerCode: string;
  cvc: string;
  password: string;
};

export type CardDisplayInfo = CardInfo & {
  network: CardNetwork;
};
```

`company`라는 기존 필드명은 의미가 모호하고 서버 모델과 정합하지 않아 `issuerCode`로 통일했다.

#### 서버 요청/응답 모델 (apis/cards.ts)

```ts
export type CreateCardRequest = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

export type CreateCardResponse = {
  id: string;
};

export type CardListItem = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

export type ApiErrorCode =
  | "INVALID_CARD_NUMBER"
  | "INVALID_CVC"
  | "INVALID_EXPIRATION_DATE";

export type ApiError = {
  code: ApiErrorCode;
  message: string;
};
```

### 3.3 매퍼 함수 (utils/cardMapper.ts)

```ts
export const toCreateCardRequest = (cardInfo: CardInfo): CreateCardRequest => ({
  number: cardInfo.numbers.join(""),
  expirationDate: `${cardInfo.expiry[0]}/${cardInfo.expiry[1]}`,
  cvc: cardInfo.cvc,
  issuerCode: cardInfo.issuerCode,
  // password는 의도적으로 제외 — 서버에 보내지 않음
});
```

비밀번호가 서버로 가지 않는다는 사실이 이 함수에 한 줄 코멘트로 명시되어 있다. 도메인 지식의 흔적이다.

### 3.4 에러 코드 → 필드 매핑 (utils/apiErrorField.ts)

```ts
type CardFormField = "numbers" | "cvc" | "expiry";

const CODE_TO_FIELD: Record<ApiErrorCode, CardFormField> = {
  INVALID_CARD_NUMBER: "numbers",
  INVALID_CVC: "cvc",
  INVALID_EXPIRATION_DATE: "expiry",
};

export const toFieldError = (error: ApiError): { field: CardFormField; message: string } => ({
  field: CODE_TO_FIELD[error.code],
  message: error.message,
});
```

`CardRegisterationForm`에서 이 함수로 변환한 결과를 해당 InputSection의 `serverErrorMessage` prop에 전달한다.

### 3.5 ISSUERS 상수 (constants/issuers.ts)

기존 `CARD_COMPANIES`는 키가 `bc`, `shinhan` 같은 이름 기반이었다. 서버 도메인은 `31`, `41` 같은 코드 기반이므로 키를 issuerCode로 통일했다.

```ts
export const ISSUERS = {
  "31": { label: "BC카드", color: "#F04651" },
  "41": { label: "신한카드", color: "#0046FF" },
  "15": { label: "카카오뱅크", color: "#FFE600" },
  "61": { label: "현대카드", color: "#000000" },
  "W1": { label: "우리카드", color: "#007BC8" },
  "71": { label: "롯데카드", color: "#ED1C24" },
  "21": { label: "하나카드", color: "#009490" },
  "11": { label: "국민카드", color: "#6A6056" },
} as const;

export type IssuerCode = keyof typeof ISSUERS;

export const isIssuerCode = (value: string): value is IssuerCode =>
  Object.prototype.hasOwnProperty.call(ISSUERS, value);
```

### 3.6 네이밍 참고: network vs brand

스펙 문서에서는 Visa/Mastercard 등을 "brand", 앞 6자리를 "BIN"이라 부른다. 코드에서는 `CardNetwork`, `detectCardNetwork`처럼 "network"라는 용어를 사용했다. 같은 개념이며, PR에 이 결정 사유를 명시한다.

---

## 4. API 레이어

### 4.1 엔드포인트

| Method | Path | 설명 | 성공 status |
|--------|------|-----|------------|
| POST | `/cards` | 카드 등록 | 201 |
| GET | `/cards` | 카드 목록 조회 | 200 |
| DELETE | `/cards/:id` | 카드 삭제 (멱등) | 204 |

### 4.2 클라이언트 함수 (apis/cards.ts)

각 엔드포인트당 함수 하나. 이름은 도메인 동작을 표현한다 (`fetchCards` 같은 인프라 이름이 아니라 `getCards`/`createCard`/`deleteCard`).

`parseApiError`는 `toApiError` + `tryCatch`로 책임을 분리했다. `toApiError`는 JSON 파싱 성공 케이스만 담당하고, `parseApiError`는 파싱 실패 시 폴백 처리를 담당한다.

```ts
const FALLBACK_ERROR: ApiError = {
  code: "INVALID_CARD_NUMBER",
  message: "알 수 없는 오류가 발생했습니다.",
};

const toApiError = async (res: Response): Promise<ApiError> => {
  const body = await res.json();
  if (typeof body?.code === "string" && typeof body?.message === "string") {
    return body as ApiError;
  }
  return FALLBACK_ERROR;
};

const parseApiError = (res: Response): Promise<ApiError> =>
  tryCatch(() => toApiError(res), () => FALLBACK_ERROR);
```

fetch는 네트워크 연결 실패만 reject하고, 400/500 응답은 정상 resolve한다. `res.ok` 체크 후 throw해야 호출하는 쪽에서 try-catch로 잡을 수 있다. API 호출자가 받는 에러는 항상 같은 `ApiError` 모양이어야 컴포넌트에서 일관된 처리가 가능하다.

---

## 5. MSW 셋업

### 5.1 파일 구조

```
mocks/
├─ index.ts        ← enableMocking 진입점 (환경 분기)
├─ browser.ts      ← 브라우저 환경 (개발 서버용)
├─ server.ts       ← Node 환경 (테스트용)
├─ handler.ts      ← 핸들러 모음
└─ cardStore.ts    ← 인메모리 카드 저장소
```

### 5.2 enableMocking 패턴 (mocks/index.ts)

`main.tsx`가 MSW 세부사항을 모르게 하기 위해 별도 파일로 분리했다.

```ts
export const enableMocking = async () => {
  if (!import.meta.env.DEV) return;
  const { worker } = await import("./browser");
  return worker.start({ onUnhandledRequest: "bypass", serviceWorker: { url: "/react-payments/mockServiceWorker.js" } });
};
```

`main.tsx`는 `enableMocking().then(() => { render })` 형태로 MSW가 준비된 뒤 렌더링을 시작한다. basename이 `/react-payments`이므로 `serviceWorker.url`을 명시적으로 지정해야 한다.

### 5.3 검증 시나리오 (handler.ts)

| 카드 번호 | CVC | 만료일 | 결과 |
|-----------|-----|--------|-----|
| 9999 1234 5678 9012 | - | - | 400 INVALID_CARD_NUMBER |
| 4111 1111 1111 1111 | 000 | - | 400 INVALID_CVC |
| 5511 1234 5678 9012 | - | 13/28 | 400 INVALID_EXPIRATION_DATE |
| 5511 1234 5678 9012 | - | valid | 201 |
| 4111 1111 1111 1111 | non-000 | valid | 201 |

검증 순서: 만료일 → CVC → BIN 매칭. 앞 조건이 실패하면 뒤는 보지 않는다.

### 5.4 인메모리 저장소 (mocks/cardStore.ts)

카드 번호는 원본을 저장하고 응답 시 마스킹한다. 마스킹 형식: 앞 6자리 + `******` + 뒤 4자리. 앞 6자리(BIN)까지 노출하는 것은 PCI-DSS 표시 상한이자 ISO 7812 BIN 식별 범위와 정렬하기 위함이다.

`reset()`은 각 테스트가 독립적인 상태에서 시작하기 위해 노출한다. 통합 테스트의 `beforeEach`에서 호출한다.

---

## 6. 비동기 훅

### 6.1 useCardList (hooks/queries/useCardList.ts)

페이지 진입 시 자동으로 GET `/cards`를 호출한다. 레이스 컨디션을 `ignore` 패턴으로 처리한다.

```ts
const loadCards = () => {
  const ignore = { current: false };

  tryCatch(
    async () => {
      const data = await getCards();
      if (!ignore.current) setState({ status: "success", data });
    },
    (error) => {
      if (!ignore.current) setState({ status: "error", error: error as ApiError });
    },
  );

  return () => { ignore.current = true; };
};

useEffect(() => loadCards(), []);
```

`ignore`는 GET `/cards` 응답이 두 번 이상 오거나 컴포넌트가 언마운트된 뒤 응답이 도착했을 때 stale setState를 막는다. React StrictMode에서 effect가 두 번 실행되는 케이스도 커버한다.

`retry`를 `useCallback` 없이 일반 함수로 둔 이유: 외부에 노출되는 함수이지만 deps가 없어서 `useCallback`의 이득이 없다. 렌더마다 새로 만들어지는 함수를 굳이 메모이제이션하지 않는다.

### 6.2 useCreateCard (hooks/queries/useCreateCard.ts)

`submit` 함수가 결과를 직접 반환하도록 설계했다. 호출하는 쪽에서 `await submit(cardInfo)` 직후 결과에 따라 navigate할 수 있기 때문이다.

`useEffect`로 state 변화를 감지하는 방식을 쓰지 않은 이유: POST `/cards` 201 응답 후 navigate 처리는 외부 시스템과의 동기화가 아니라 비동기 작업의 후속 처리다. React state는 렌더 사이클과 함께 업데이트되므로 `await` 직후 읽으면 이전 렌더의 값일 수 있다. 함수 반환값은 즉시 신뢰할 수 있으므로 useEffect 없이 처리했다.

```ts
const submit = async (cardInfo: CardInfo) => {
  setState({ status: "loading" });
  return await tryCatch(
    async () => {
      const data = await createCard(toCreateCardRequest(cardInfo));
      setState({ status: "success", data });
      return { status: "success" as const };
    },
    (error) => {
      const { field, message } = toFieldError(error as ApiError);
      setState({ status: "error", field, message });
      return { status: "error" as const };
    },
  );
};
```

`tryCatch`의 제네릭을 `<T, E>`로 분리한 이유: 성공 반환 타입과 에러 반환 타입이 달라도 되도록 하기 위해서다.

### 6.3 useDeleteCard (hooks/queries/useDeleteCard.ts)

삭제는 단순하다. `remove(id)` 호출 후 성공/실패는 `DeleteButton` 컴포넌트에서 `onDelete` 콜백으로 처리한다.

---

## 7. 컴포넌트 아키텍처

### 7.1 폴더 구조

```
components/
├─ common/
│  ├─ InputSectionLayout/
│  ├─ ValidatedInputGroup/
│  └─ PrimaryButton/          ← 메인 CTA 범용 버튼 (구 SubmitButton)
│
├─ cardRegisteration/         ← 카드 등록 관련 컴포넌트
│  ├─ CardRegisterationForm/
│  ├─ CardRegisterationPreview/
│  ├─ CardRegisterationNumberInputSection/
│  ├─ CardRegisterationIssuerSelectSection/
│  ├─ CvcRegisterationInputSection/
│  ├─ ExpiryDateRegisterationInputSection/
│  └─ PasswordRegisterationInputSection/
│
└─ cardList/                  ← 카드 목록 관련 컴포넌트
   ├─ CardList/
   ├─ CardListLoading/
   ├─ CardListEmpty/
   ├─ CardListError/
   ├─ CardListSuccess/
   ├─ CardRow/
   ├─ AddCardButton/
   └─ DeleteButton/
```

각 폴더 안에는 폴더명과 동일한 파일 하나만 둔다. 예: `CardRow/CardRow.tsx`.

### 7.2 페이지 트리

```
App
├─ CardRegisterationFormPage (/cards/new)  → 어떤 경로든 /cards로 리다이렉트
│  └─ CardRegisterationForm
│     ├─ CardRegisterationPreview (미리보기)
│     ├─ *InputSection (5종)
│     └─ PrimaryButton ("확인")
│
└─ CardListPage (/cards)
   └─ CardList
      ├─ CardListLoading     (idle | loading 상태)
      ├─ CardListEmpty       (success + data.length === 0)
      │  └─ AddCardButton variant="primary"
      ├─ CardListSuccess     (success + data.length > 0)
      │  ├─ CardRow (반복)
      │  │  └─ DeleteButton
      │  └─ AddCardButton variant="outline"
      └─ CardListError       (error 상태)
```

`CardRegistrationCompletePage`는 이번 단계에서 제거했다. 등록 후 `/cards`로 바로 이동하므로 완료 페이지가 불필요해졌다.

### 7.3 책임 명세

각 컴포넌트의 책임과 변경 이유:

CardRegisterationFormPage: 등록 폼 화면의 진입점을 제공한다. 이 컴포넌트는 페이지 레이아웃(배경색, 패딩)이 바뀔 때 변경된다.

CardRegisterationForm: 카드 등록의 완결 흐름(입력 → 서버 전송 → 결과 처리)을 책임진다. 이 컴포넌트는 등록 흐름 전체의 정책이 바뀔 때 변경된다.

CardListPage: 목록 화면의 진입점을 제공한다. 이 컴포넌트는 페이지 레이아웃이 바뀔 때 변경된다.

CardList: 비동기 상태(idle/loading/success/error)를 해당 UI로 분기한다. 이 컴포넌트는 어떤 상태에 어떤 UI를 보여줄지가 바뀔 때 변경된다.

CardListLoading: 로딩 상태의 UI(스피너)를 표현한다. 이 컴포넌트는 로딩 표현 방식이 바뀔 때 변경된다.

CardListEmpty: 카드가 없는 상태의 안내와 첫 등록 유도를 담당한다. 이 컴포넌트는 빈 상태 메시지나 행동 유도 방식이 바뀔 때 변경된다.

CardListError: 목록 조회 실패 안내와 재시도를 담당한다. 이 컴포넌트는 에러 안내 방식이나 재시도 동작이 바뀔 때 변경된다.

CardListSuccess: 카드 목록이 있을 때의 화면 구성을 담당한다. 이 컴포넌트는 목록 화면의 구성 요소 배치가 바뀔 때 변경된다.

CardRow: 카드 한 장을 목록 행으로 표현한다. 이 컴포넌트는 카드 행의 표시 방식이 바뀔 때 변경된다.

DeleteButton: 카드 삭제의 완결 흐름(confirm → DELETE → onDelete 콜백)을 책임진다. 이 컴포넌트는 삭제 확인 방식이나 삭제 후 동작이 바뀔 때 변경된다.

AddCardButton: 카드 추가 화면으로의 진입점을 제공한다. 이 컴포넌트는 카드 추가 진입 동작이나 표현 방식이 바뀔 때 변경된다.

PrimaryButton: 메인 CTA의 시각적 형태를 제공한다. 이 컴포넌트는 메인 CTA의 표현 방식이 바뀔 때 변경된다.

### 7.4 설계 결정: CardRow와 DeleteButton 분리

초기에는 `CardRow` 안에 DELETE 요청 흐름(window.confirm + DELETE `/cards/:id` + onDelete 콜백)이 있었다. `CardRow`가 카드 정보 표시와 삭제 동작 두 가지 책임을 동시에 가지는 구조였다.

`AddCardButton`이 POST `/cards/new` navigate까지 자기 완결로 처리하듯, `DeleteButton`도 DELETE `/cards/:id`의 완결 흐름을 책임지는 방향으로 분리해 일관성을 맞췄다.

### 7.5 설계 결정: CardList를 Form과 Page 사이에 둔 이유

`CardRegisterationFormPage` → `CardRegisterationForm` 구조처럼 카드 목록도 `CardListPage` → `CardList` 구조를 취했다. 페이지는 레이아웃(배경, 패딩)만 담당하고, 도메인 로직(`useCardList`, 상태 분기)은 `CardList`가 담당한다.

---

## 8. 라우팅

### 8.1 경로 상수 (constants/routes.ts)

```ts
export const ROUTES = {
  CARD_LIST: "/cards",
  CARD_FORM: "/cards/new",
} as const;
```

라우팅 경로 문자열을 코드 곳곳에 박지 않고 상수화한다. 변경 시 한 곳만 수정.

### 8.2 기본 진입 경로

모든 미매칭 경로는 `/cards`로 리다이렉트된다.

```tsx
<Route path="*" element={<Navigate to={ROUTES.CARD_LIST} replace />} />
```

앱 진입 시 카드 목록 먼저 보여주는 것이 자연스럽다.

### 8.3 흐름

```
[/cards] CardListPage
  ├─ empty → [카드 추가하기] → [/cards/new]
  ├─ success → [+ 카드 추가] → [/cards/new]
  ├─ success → [× 삭제] → confirm → DELETE → 같은 페이지에서 재조회
  └─ error → [다시 시도] → 같은 페이지에서 재조회

[/cards/new] CardRegisterationFormPage
  └─ 입력 완료 + 확인 → POST /cards (201) → [/cards]
                     → POST /cards (400) → 같은 페이지에서 필드별 에러 표시
```

---

## 9. 에러 처리 전략

### 9.1 서버 에러를 입력 필드로 매핑하는 흐름

```
POST /cards (400)
  → useCreateCard: submit() → tryCatch onError → toFieldError(error)
  → CardRegisterationForm: serverError.field 기준으로 각 InputSection에 serverErrorMessage 전달
  → InputSection: resolvedErrorMessage = errorMessage || serverErrorMessage
```

각 InputSection은 내부 유효성 검사 에러(`errorMessage`)와 서버 에러(`serverErrorMessage`)를 합쳐서 표시한다. 내부 에러가 있으면 서버 에러보다 우선한다.

### 9.2 에러 vs 경고 톤

| 케이스 | 톤 | 위치 |
|--------|----|----|
| 비숫자 입력 | 빨강 (error) | 해당 필드 아래 |
| CVC = 000 (INVALID_CVC) | 빨강 (error) | CVC 필드 아래 |
| 만료일 형식 오류 (INVALID_EXPIRATION_DATE) | 빨강 (error) | 만료일 필드 아래 |
| 미지원 카드 번호 (INVALID_CARD_NUMBER) | 빨강 (error) | 카드 번호 필드 아래 |
| 미지원 BIN (입력 중) | 노랑 (warning) | 카드 번호 필드 아래 |

미지원 BIN이 입력 중에는 warning이지만 등록 시도하면 400 에러로 빨강이 된다. 사용자가 등록을 시도한 시점부터는 실수로 간주하기 때문이다.

### 9.3 삭제 confirm

- 위치: `DeleteButton` 내부 (삭제 동작의 완결 흐름을 책임)
- 방식: `window.confirm()` (미션 요구사항)
- 취소 시: 아무 요청도 보내지 않음
- 확인 시: DELETE 호출 → 성공 시 `onDelete()` 콜백 → `CardList`에서 목록 재조회

---

## 10. 테스트 전략

### 10.1 통합 테스트 시나리오

사용자 관점의 흐름을 기준으로:

1. 해피 패스 (카드 등록): 카드 정보 모두 입력 → 확인 클릭 → `/cards` 페이지로 이동 + 등록된 카드 보임

2. 400 에러 매핑 — 카드 번호: `9999123456789012` 입력 → 확인 → 카드 번호 필드 아래 에러 메시지

3. 400 에러 매핑 — CVC: 정상 카드 + CVC `000` → 확인 → CVC 필드 아래 에러 메시지

4. 400 에러 매핑 — 만료일: 정상 카드 + 만료일 `1328` → 확인 → 만료일 필드 아래 에러 메시지

5. 카드 목록 빈 상태: `/cards` 진입 → "등록된 카드가 없습니다" 표시 + 카드 추가하기 버튼

6. 카드 목록 정상 상태: 등록된 카드 있을 때 `/cards` 진입 → 카드 행들 표시 + "+ 카드 추가" 버튼

7. 카드 삭제 — confirm 확인: 삭제 버튼 → confirm 확인 → 행 사라짐

8. 카드 삭제 — confirm 취소: 삭제 버튼 → confirm 취소 → 요청 안 감, 행 그대로

9. 목록 조회 에러 + 재시도: GET 실패 → 에러 화면 → "다시 시도" → 정상 데이터 로드

### 10.2 RTL 탐색 우선순위

1. `getByRole` (또는 `findByRole` for async)
2. `getByText`
3. `getByLabelText`
4. `getByTestId` (최후의 수단)

`data-testid`는 쿼리할 다른 방법이 정말 없을 때만. 보통은 `role` + `name` 조합으로 거의 다 잡힌다.

### 10.3 MSW handler runtime override

테스트 시나리오마다 다른 응답이 필요할 때 `server.use()` 패턴을 사용한다.

```ts
test("목록 조회 실패 시 에러 + 재시도", async () => {
  server.use(
    http.get("/api/cards", () => HttpResponse.error(), { once: true }),
  );

  render(<App />);
  expect(await screen.findByText(/카드 목록을 불러올 수 없/)).toBeInTheDocument();
});
```

`{ once: true }`로 다음 호출은 기본 핸들러로 복귀 처리한다.

### 10.4 테스트 환경

Vitest + jsdom + @testing-library/react 조합. Vite 프로젝트이므로 Vitest가 자연스럽다.

`beforeEach`에서 `store.reset()`을 호출해 각 테스트가 독립적인 상태에서 시작하게 한다.

---

## 11. 구현 완료 체크리스트

### 11.0 워밍업

- [x] `SubmitButton` → `PrimaryButton` 개명, `common/` 폴더로 이동
- [x] 라우팅 경로 상수화 (`constants/routes.ts`)
- [x] `navigate("/completed")` 등 raw 문자열 제거

### 11.1 도메인 모델 재설계

- [x] `CardInfo` 타입: `company` → `issuerCode`
- [x] `ISSUERS` 상수 신설 (`constants/issuers.ts`)
- [x] `isIssuerCode` 타입 가드
- [x] `CARD_COMPANIES` 사용처 전체 마이그레이션
- [x] `CardRegisterationPreview` 색상 표시를 `ISSUERS` 기준으로 변경
- [x] `CardRegisterationIssuerSelectSection` — issuerCode 기반으로 변경

### 11.2 API 레이어

- [x] `apis/cards.ts` (`createCard`, `getCards`, `deleteCard`)
- [x] `parseApiError` — `toApiError` + `tryCatch` 분리
- [x] `utils/tryCatch.ts` — 고차 함수
- [x] `utils/cardMapper.ts` (`toCreateCardRequest`)
- [x] `utils/apiErrorField.ts` (`toFieldError`)

### 11.3 MSW 셋업

- [x] MSW 설치
- [x] `mocks/cardStore.ts` (인메모리)
- [x] `mocks/handler.ts` (POST/GET/DELETE + 400 시나리오)
- [x] `mocks/browser.ts` (dev용)
- [x] `mocks/server.ts` (test용)
- [x] `mocks/index.ts` (`enableMocking` — 환경 분기)
- [x] `main.tsx`에서 MSW 활성화

### 11.4 비동기 훅

- [x] `useCardList` (자동 fetch + retry + 레이스 컨디션 처리)
- [x] `useCreateCard` (수동 trigger, 결과 반환)
- [x] `useDeleteCard` (수동 trigger)

### 11.5 카드 등록 서버 연동

- [x] `CardRegisterationForm`이 `useCreateCard`를 호출
- [x] 201 응답 시 `navigate(ROUTES.CARD_LIST)`
- [x] 400 응답 시 `toFieldError`로 변환 → 해당 InputSection에 `serverErrorMessage` 전달
- [x] 등록 중 버튼 비활성화 (`loading` 상태)

### 11.6 카드 목록 페이지

- [x] `pages/CardListPage.tsx`
- [x] `components/cardList/CardList/` (비동기 상태 분기)
- [x] `components/cardList/CardListLoading/` (스피너)
- [x] `components/cardList/CardListEmpty/`
- [x] `components/cardList/CardListError/`
- [x] `components/cardList/CardListSuccess/`
- [x] `components/cardList/CardRow/`
- [x] `components/cardList/AddCardButton/`
- [x] `components/cardList/DeleteButton/`
- [x] `/cards` 라우트 등록, 기본 진입 경로 설정
- [x] `CardRegistrationCompletePage` 제거

### 11.7 통합 테스트

- [ ] vitest.setup.ts + @testing-library/react 셋업
- [ ] 시나리오 1~9 작성

---

## 12. step-2 패턴 연속성

| step-2 학습 | step-3에서 어떻게 이어지는가 |
|------------|-----------------------------|
| 변경 이유로 책임을 가른다 | 컴포넌트/훅/매퍼 모두 변경 이유 기준으로 분리. DeleteButton 분리도 같은 사고 |
| 훅 vs 함수 — useState/useEffect 없으면 함수 | `toCreateCardRequest`, `toFieldError`는 함수로 둠 |
| 이름과 실체 일치 | `SubmitButton` → `PrimaryButton`, `CardCompany` → `IssuerCode`, `CardListItem` → `CardRow` |
| 절반의 추상화는 피한다 | `useAsync` 추출 포기 — 세 훅의 패턴이 충분히 같지 않았다 |
| 자기 도메인의 완결 흐름 | `CardRegisterationForm`은 navigate까지, `AddCardButton`도 navigate까지, `DeleteButton`도 confirm + DELETE까지 |
| 사용자 실수 vs 시스템 제약 | 400 에러는 빨강, 입력 중 미지원 BIN은 노랑 |
| 도메인 vs 표시 데이터 분리 | 서버 모델 vs UI 모델 명시적 분리, 매퍼 함수로 변환 |

---

## 13. 결정 로그 (Open Questions → Closed)

- 카드 등록 페이지 경로: `/cards/new`로 결정. 기본 진입은 `/cards`.
- `CardRegistrationCompletePage` 폐기: 등록 후 `/cards`로 바로 이동하므로 제거.
- `useAsync<T>` 추출: 각 훅의 에러 처리와 실행 방식이 달라 추출하지 않음.
- `CardRow`의 삭제 로직 분리: `DeleteButton`으로 추출해 단일 책임 유지.
- `network` vs `brand` 네이밍: 코드에서는 `network` 유지, PR에 사유 명시.
- MSW BASE_URL: `/api` prefix 사용.
- 테스트 환경: Vitest + jsdom + RTL.

---

## 14. 트러블슈팅

### 14.1 MSW Service Worker 404

MSW를 활성화했는데 콘솔에 `Failed to register a Service Worker` 에러가 났다.

원인: BrowserRouter의 `basename`이 `/react-payments`로 설정되어 있어서 MSW가 기본 경로인 `http://localhost:5173/mockServiceWorker.js`에서 워커를 찾으려 했지만 실제 파일은 `http://localhost:5173/react-payments/mockServiceWorker.js`에 있었다.

해결: `worker.start()` 옵션에 `serviceWorker.url`을 명시적으로 지정했다.

```ts
worker.start({ onUnhandledRequest: "bypass", serviceWorker: { url: "/react-payments/mockServiceWorker.js" } });
```

### 14.2 CardListItem 컴포넌트명과 타입명 충돌

`CardListSuccess`에서 `CardListItem` 컴포넌트를 import하려 하자 `verbatimModuleSyntax` 설정으로 인해 TypeScript가 해당 import를 type-only로 판단해 런타임 오류가 발생했다.

원인: `apis/cards.ts`에서 export한 `CardListItem` 타입과 `CardListItem/CardListItem.tsx`의 default export 컴포넌트명이 동일해서 TypeScript가 값인지 타입인지 구분하지 못했다.

해결: 컴포넌트명을 `CardRow`로 변경했다. "카드 목록의 한 행"이라는 역할을 더 정확히 표현하기도 하고, 타입 `CardListItem`과의 충돌도 해소됐다.

---

## 15. 참고 자료

- [MSW Getting Started](https://mswjs.io/docs/getting-started)
- [React — Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React — useEffect](https://react.dev/reference/react/useEffect)
- [Kent C. Dodds — Stop mocking fetch](https://kentcdodds.com/blog/stop-mocking-fetch)
- [Kent C. Dodds — Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)
- [Kent C. Dodds — Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Toss Payments — Card 객체](https://docs.tosspayments.com/resources/glossary/card)
- [React — Rendering Lists (keys)](https://react.dev/learn/rendering-lists)
