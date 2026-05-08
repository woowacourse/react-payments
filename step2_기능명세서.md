# step2 기능 명세서

### 구현 흐름

1. 카드사 컴포넌트 만들기 → 바로 순차 렌더링 연결
2. 비밀번호 컴포넌트 만들기 → 바로 연결
3. 카드 등록 확인 버튼
4. 라우터로 카드 등록 확인 페이지 라우팅
5. 카드 등록 확인 페이지에서 모든 상태가 초기화된 처음 입력 페이지 렌더링
6. 카드 브랜드 구분 로직 구현

## 새로 만들어야 할 컴포넌트

### 카드사 선택 컴포넌트

- [x] select로 8개 카드사를 선택 할 수 있게 한다.
- [x] 각 카드사에 맞는 CardPreview색을 실시간으로 변경시킨다.

### 비밀번호 입력 컴포넌트

- [x] 비밀번호 앞 2자리를 입력받는다.
- [x] input에 입력값이 \*로 보이게 한다.
- [x] onBlur시 입력값이 2개 미만이면 border 색 변경 및 에러메시지

### 카드 등록 확인 버튼

- [x] 모든 입력 필드에 값이 정상적으로 들어오면 footer처럼 앱의 하단에 확인버튼을 렌더링한다.
- [x] 확인버튼 클릭시 react-router로 카드 추가 완료 페이지를 렌더링한다.

## 카드 추가 완료 페이지

- [x] 리액트 라우터로 렌더링
- [x] 카드번호 첫 4개의 숫자 와 선택한 카드사 정보 필요 (”1111로 시작하는 BC카드가 등록되었어요.)
- [x] 누르면 모든 상태값을 초기화한 입력 필드로 이동하는 확인버튼

## 동적 입력 UI

- 사용자는 카드 번호를 입력할 때 동적으로 제공되는 입력 UI를 통해 집중적으로 하나의 입력 필드에만 집중할 수 있다.
- 입력 필드는 사용자의 입력이 완료되면 다음 필드로 자동으로 이동한다.
- 각 입력 컴포넌트에 props로 isComplete 반환값을 App으로 넘기기(true/false)
- 각 InputWrapper의 isComplete는 inputError값에 null이 하나라도 포함되어있는지로 판단
- 그 불리언 값에 따라 다음 컴포넌트를 렌더링할지 판별

InputWrapper에서 정상적으로 입력이 완료되었는지를  
`InputErrors` 로 판단해서(null값이 전부 없는 상태)

App으로 onComplete 함수의 인자값으로 넘겨주고
`onComplete(Object.values(newErrors).every(err => err === null))`

App에서는 그 값을 받아서 App.jsx에서 관리하는 카드번호 입력이 완료됐는지 판단하는 상태인
`setIsCardNumberCompleted` 를 업데이트 해준다.

```jsx

const [isCardNumberCompleted, setIsCardNumberCompleted] = useState(false);

...

<CardNumberInputWrapper
  onComplete = {(isCompleted) => setIsCardNumberCompleted(isCompleted)}

```

### 입력 필드 렌더링 순서

```

카드번호(CardNumberInputWrapper) → 카드사 →
카드유효기간(EXPNumberInputWrapper) → CVC (CVCNumberInputWrapper) → 비밀번호

```

- [x] 순서대로 입력과 검증이 완료되면 다음 입력 컴포넌트를 등장시킨다
      다음 입력 컴포넌트가 이전 입력 컴포넌트보다 위에 렌더링 되어야함
- [x] 다음 입력 컴포넌트가 렌더링 되면 해당 입력 컴포넌트에 자동 focus

## 카드 브랜드 구분 로직 (Diners / AMEX / UnionPay)

- Diners: 36으로 시작하는 14자리 숫자 (4/6/4)
- AMEX: 34, 37로 시작하는 15자리 숫자 (4/6/5)
- 유니온페이: 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자 (4/4/4/4)
  - 622126~622925로 시작하는 경우: 6221 2612 3456 7890
  - 624~626로 시작하는 경우: 6240 1234 5678 9012
  - 6282~6288로 시작하는 경우: 6282 1234 5678 9012

### 로직 구현

1. 브랜드 감지 시점

- 첫 두자리 입력시 감지
- 감지 시 매칭되는 브랜드 로고 CardPreview 동기화

2. 상태 구조

- input 개수는 똑같이 4개로 고정 (CardNumberInputWrapper 공통 사용)
- 어차피 최소 입력 개수 14개, 최대 16개니까 maxLength도 그대로 유지

3. 검증

- Diners : onBlur 시점 총 길이가 14가 맞으면 통과
- AMEX : onBlur 시점 총 길이가 15가 맞으면 통과
- 유니온페이: 각 input상태를 공유하는 총 상태로 onBlur 시점 길이와 함께 판별
  - 622126~622925로 시작하는 경우: 6221 2612 3456 7890
  - 624~626로 시작하는 경우: 6240 1234 5678 9012
  - 6282~6288로 시작하는 경우: 6282 1234 5678 9012
