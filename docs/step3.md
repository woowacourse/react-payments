## 페이먼츠 3단계 - MSW & Async & Testing

## 🔑 키워드

### MSW, Async State, React Testing Library

## 📍 학습 목표

- MSW로 네트워크 경계를 모킹하고, 프론트엔드가 보는 서버의 모습을 이해한다.
- 비동기 상태를 `idle | loading | success | error` 네 가지로 명시적으로 관리한다.
- React Testing Library와 MSW로 사용자 관점의 통합 테스트를 작성한다.
- 실제 서버에 보낼 요청·받을 응답 형식을 설계한다.

## 🎯 기능 요구사항

### 카드 등록 (서버 연동)

- 등록 버튼 클릭 시 `POST /cards`로 카드 정보를 전송한다.
- 201 응답 수신 시 카드 목록 페이지(`/cards`)로 이동한다.
- 서버가 `400 { code, message }`를 반환하면 `code`를 *해당 입력 필드*로 매핑하여 그 필드 아래에 메시지를 표시한다.

### 카드 목록 (`/cards`)

- 페이지 진입 시 `GET /cards`로 등록된 카드 목록을 조회한다.
- 비동기 상태(`idle | loading | success | error`)에 맞는 UI를 표시한다.
  - loading: 스피너 또는 스켈레톤
  - success + 목록이 비어 있음: "등록된 카드가 없습니다" 안내
  - success + 목록이 있음: 카드 프리뷰 리스트
  - error: 에러 메시지와 재시도 버튼

### 카드 삭제

- 각 카드에 삭제 버튼을 제공한다.
- 삭제 버튼 클릭 시 `window.confirm()`으로 확인을 받고, 사용자가 확인한 경우에만 삭제를 진행한다.
- 확인 시 `DELETE /cards/:id`로 요청하고 목록을 갱신한다. 취소 시 아무 요청도 보내지 않는다.

🗄 [GitHub Repository](https://github.com/woowacourse/react-payments)

🗂 [Figma](https://www.figma.com/design/MpdG5KxR8DffBWRkd3w2CY/-7%EA%B8%B0-FE--%EB%A0%88%EB%B2%A82-%EB%AF%B8%EC%85%98?node-id=0-1)

## ✅ 프로그래밍 요구사항

> 이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

### MSW

- `POST /cards`, `GET /cards`, `DELETE /cards/:id` handler를 작성한다.
- `POST /cards`에 400 시나리오(지원하지 않는 카드사 등)를 추가한다.

### Async State

- 비동기 상태를 `idle | loading | success | error` 네 가지로 명시적으로 다룬다.
- `isLoading`, `error`를 별도 boolean으로 분리하지 않는다.

### Test

- MSW와 RTL로 사용자 관점의 통합 테스트를 작성한다.

## 참고 자료

- [MSW 공식문서 — Getting started](https://mswjs.io/docs/)
- [React — Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React — useEffect reference](https://react.dev/reference/react/useEffect)
- [Kent C. Dodds — Stop mocking fetch](https://kentcdodds.com/blog/stop-mocking-fetch)
- [Kent C. Dodds — Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)
- [Kent C. Dodds — Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
