## Routing

/
ㄴ CardListPage
/add-card
ㄴ AddCardPage -> CardListPage
/add-card/complete
ㄴ AddCardCompletePage -> CardListPage

---

## CardListPage

### states

- `cardsPromise` — `useState(getCardList)`로 생성, 재시도 시 새 Promise로 교체
- `cardCount` — `CardList`에서 `onCountChange`로 올려받음

### view

```
<>
  <header>
    보유 카드 {cardCount > 0 ? `(${cardCount})` : ''}
  </header>
  <main>
    <ErrorBoundary fallback={<ErrorList onRetryFetch={handleRetryFetch} />}>
      <Suspense fallback={<SkeletonList />}>
        <CardList
          cardsPromise={cardsPromise}
          onCountChange={(count) => setCardCount(count)}
        />
      </Suspense>
    </ErrorBoundary>
  </main>
</>
```

### CardList

- `useCardListData(cardsPromise)`로 데이터 읽기 (`use` 내부 호출)
- 마운트 시 `onCountChange(cardList.length)` 호출
- 삭제 확인(window.confirm) → DELETE API → 낙관적 업데이트, 실패 시 롤백
- 카드 없음 → `EmptyList`, 있음 → `CardItem` 목록 + 카드 추가 버튼

### 데이터 흐름

- 초기 로딩 — `use(cardsPromise)` + Suspense
- 삭제 — `DELETE /cards/:id` 성공 후 `setCardList`로 직접 제거, refetch 없음
- 추가 — `AddCardPage`에서 `POST /cards` 후 `/`로 이동, `CardListPage` 마운트 시 새로 fetch
- 초기 로딩 에러 — ErrorBoundary
- 삭제 실패 — 이전 목록으로 롤백

## StatusView

- visual, title, description, action props로 구성
- EmptyList, ErrorList에서 공통으로 사용하는 상태 피드백 컴포넌트

## ErrorList

- StatusView 사용
- visual: ExclamationIcon (bounceIn 애니메이션)
- title: "카드 목록을 불러올 수 없어요"
- description: "잠시 후 다시 시도해 주세요."
- action: 다시 시도 버튼 (onRetryFetch)

## SkeletonList

- shimmer 애니메이션
- 썸네일 + 텍스트 3줄 + 버튼 형태

## EmptyList

- StatusView 사용
- visual: 빈 카드 일러스트 (160x100, dashed border)
- title: "등록된 카드가 없습니다"
- description: "아래 버튼을 눌러 첫 카드를 등록해보세요"
- action: 카드 추가하기 버튼 (onAddCard)

---

## AddCardPage

### useAddCard

- formValue → request body 변환 (COMPANY_TO_ISSUER_CODE로 issuerCode 매핑)
- `addCard` API 호출
- 에러 코드로 필드 분기 → `serverValidationError` 상태 설정
- AddCardResult 타입: `success | validationError | error`

### 에러 처리 흐름

- 클라이언트 검증 실패 → `focusFirstErrorField()`
- 서버 400 (validationError) → `serverValidationError` 설정 → 해당 필드 포커스
- 서버 기타 에러 → 무시 (추후 처리)
- 해당 필드 수정 시 → `clearServerValidationError()`

---

## api/cards.ts

- `addCard` — POST /cards
- `getCardListDTO` — GET /cards (CardDTO[] 반환)
- `deleteCard` — DELETE /cards/:id
- `API_ENDPOINTS` — 엔드포인트 상수

## hooks/useCardListData.ts

- `CardDTO` → `Card` 변환 (issuerCode → company, number 마스킹 분리)
- `getCardList` — getCardListDTO 호출 후 Card[]로 변환
- `useCardListData(cardsPromise)` — use()로 데이터 읽기, 낙관적 삭제

## utils/validation/

- `validateCardNumbers`, `validateExpirationPeriod`, `validateCvc`, `validateCardCompany`, `validatePassword`
- 각 필드별 rules, runAllValidations, validateOnComplete 반환
- `index.ts`로 barrel export
