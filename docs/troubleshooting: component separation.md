## 💡 커밋 링크

- [refactor: CardInputGroup 컴포넌트 제거 및 각 컴포넌트 분리](https://github.com/sooyeoniya/react-payments/commit/0dfcbf8b034f406d54926988c60f9409ef68feb7)

## 💡 CardInputGroup 컴포넌트의 문제점

1단계 미션까지는 입력 폼 자체가 3개(카드 번호, 유효 기간, CVC 번호)였기 때문에 이 방식이 크게 문제가 되지 않을 것이라 생각했습니다. </br>
하지만, 2단계 미션을 시작하면서 문제에 봉착했는데요. 앞으로 카드사 선택 폼과 비밀번호 폼이 추가되어 총 5개의 폼을 관리하게 되었습니다.

이렇게 되면, 조건부 렌더링을 통해 각 입력폼에 대한 모든 것을 관리하고 있는 CardInputGroup 컴포넌트의 역할이 매우 방대해지는 것이었습니다. </br>
기존에도 150줄이 넘어가는 긴 코드였기에 가독성 측면에서 충분히 분리가 필요하긴 했습니다.

하지만, 가독성보다 중요한 확장성 측면에서 보면 확실히 분리해야 했습니다.

5개의 폼에 대한 모든 로직이 CardInputGroup 컴포넌트에 존재하게 된다면 각각의 입력 폼에 대한 기능이 추가되는 경우, </br>
모두 CardInputGroup에서 관리해야 되기 때문에 도메인 별로 분리가 제대로 되지 않아, 테스트 하기도 어렵고 유지보수하기 어려워집니다.

아래 코드를 보면, CardInputGroup의 Props로 setXXXError 3개를 모두 넘겨주고 있었는데요. </br>
이렇게 해서 내부에서 조건부 렌더링으로 각각의 컴포넌트에 넣어주고 있었습니다.

```tsx
<CardInputGroup
  type={type}
  error={error}
  setCardNumberError={setCardNumberError}
  setExpirationPeriodError={setExpirationPeriodError}
  setCvcNumberError={setCvcNumberError}
/>
```

하지만, 앞서 말한 확장성을 고려하면, CardInputGroup의 Props가 매우 길어질 것으로 예상되어, 2단계 기능 구현 전에 미리 분리하는 것이 더 좋은 판단이라고 생각했습니다.

## 💡 CardInputGroup 제거 후 이점

- 각각의 폼이 역할에 맞게 분리되어 응집도가 높아지고, 확장성이 용이해졌습니다.

- 불필요하게 CardInputGroup에서 모든 type, error, setXXXError를 받아 내부 분기 처리하던 로직이 사라져, 구조가 훨씬 깔끔해졌습니다. </br>
  → 이 책임을 모두 CardInputSection(현 CardFormSection)으로 위임했습니다. </br>
  → Props로 넘겨 받은 type은 CardInputSection(현 CardFormSection) 한 번만 처리하면 되고, </br>
  → 각 컴포넌트에 필요한 error, setXXXError 상태만 각각의 컴포넌트로 넘기면 되므로 Props 관리도 훨씬 수월해졌습니다. (현재는 context API로 에러 상태들을 관리하기 때문에 Props가 사라짐)
