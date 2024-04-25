# react-payments

## TODO

### Stories

- 결제카드 UI 컴포넌트
  - [x] 4로 시작하는 16자리 숫자는 VISA로고가 나와야 한다.
  - [x] 51~55로 시작하는 16자리 숫자는 MASTER로고가 나와야 한다.
  - [x] 위 케이스가 아닐 시 이미지가 나오지 않아야 한다.
  - [x] 뒷 여덟자리 숫자는 비밀스럽게 나와야 한다.
- 입력 폼 UI 컴포넌트

  - [x] 유효하지 않는 숫자는 에러 툴팁을 보여준다.
  - 유효하지 않은 유효기간의 경우 에러 툴팁을 보여준다.
    - [x] 월은 1~12 숫자만 입력가능
    - [x] 과거의 경우
  - 유효하지 않은 이름은 에러 툴팁을 보여준다.
    - [x] 이름의 길이는 최대 18자
    - [x] 대소영문자만 입력가능.

## Step2 TODO

동적 입력 UI 구현

- [ ] 사용자는 카드 번호를 입력할 때 동적으로 제공되는 입력 UI를 통해 집중적으로 하나의 입력 필드에만 집중할 수 있다.
- [ ] 입력 필드는 사용자의 입력이 완료되면 다음 필드로 자동으로 이동한다.

카드사 선택

- [x] 사용자는 카드사를 선택할 수 있고, 카드사에 따라 미리보기 카드의 색상을 변경한다.

CVC 번호

- [ ] CVC 번호를 입력할 때는 미리보기 카드의 뒷면을 시각적으로 보여준다.
- [ ] 입력은 숫자만 가능하며, 유효하지 않은 값을 입력 시 피드백을 제공한다.

폼 제출 및 상태 관리

- [ ] 모든 카드 정보가 정확하게 입력되고 검증되었을 때 확인 버튼이 활성화된다.
- [ ] 사용자가 입력한 정보 중 하나라도 지우거나 수정하여 유효하지 않게 되면, 확인 버튼은 보이지 않는다.

카드 등록 완료 및 네비게이션

- [ ] 확인 버튼을 클릭하면 사용자는 카드 등록 완료 페이지로 이동한다.
- [ ] 카드 등록 완료 페이지에서는 카드 등록이 성공적으로 완료되었다는 메시지와 함께, 다시 카드 등록 페이지로 돌아갈 수 있는 확인 버튼을 제공한다.

Routing

- [ ] react-router를 이용하여 페이지를 관리한다.

Custom Hooks

- [ ] custom hooks를 활용하여 form 관리에 필요한 로직을 UI와 분리하여 관리한다. 이를 통해 코드의 가독성과 재사용성을 높인다.

Test

- [ ] 각 스토리에 명확한 이름을 지정하고, 스토리 이름을 통해 컴포넌트의 사용 사례를 쉽게 이해할 수 있도록 한다.

Performance

- [ ] 불필요한 상태 관리나 리렌더링이 발생하지 않도록 한다.
      예를 들어 카드 번호 입력 시 매 입력마다 브랜드 식별 로직이 동작하는 것은 비효율적일 수 있다. 일정 자릿수 이상 입력된 경우에만 브랜드 식별을 하는 등의 방법으로 개선한다.

### Flow

- [x] 컴포넌트 빌드
- [x] 모든 컴포넌트 렌더링
- [x] Validator 작성
- [ ] cardPreview 연결
- [ ] 컴포넌트 렌더링에 조건 달기
- [ ] 이벤트 달기
  - [ ] Submit 이벤트
  - [ ] FocusOut 이벤트

### State

- [x] 입력 필드 렌더링 순서 상태
  - 다음 단계로 넘어갈 순 있지만, 이전 단계로 넘어갈 순 없다.
  - 위 인덱스 숫자로 관리한다.
- [x] 카드 정보에 대한 상태

  1. 카드 번호 입력
  2. 카드사 드롭다운 선택
  3. 카드 유효기간 입력
  4. 카드 소유자 입력
  5. cvc입력
  6. 비밀번호 입력
  7. 확인 버튼 요소 나타남

- [x] 카드 preview에 대한 상태 (앞면인지 뒷면인지에 대한 상태)

### Component

- [x] 카드사 드롭다운 컴포넌트 FormInput.CardIssuerInput
- [x] cvc 입력 컴포넌트 FormInput.CardCVCInput
- [ ] 확인 버튼 컴포넌트 CheckButton
      렌더링 조건
  - [ ] input Value가 없을 때
  - [ ] 에러가 있을 때
  - [ ] 비자, 마스터 카드가 아닌경우
  - [ ] 16자리 숫자가 아닌경우
  - [ ] 유효기간이 만료되었을 경우

### Routes

- Payments
- [ ] SubmitArrival
