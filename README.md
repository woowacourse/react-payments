# react-payments

### 기능

- [x] 카드 번호 입력
  - [x] 유효성 검사
    - [x] 숫자가 아닌 경우
    - [x] 네자리가 아닌 경우
    - [x] 유효하지 않은 번호인 경우
- [x] 유효기간 입력
  - [x] 유효성 검사
    - [x] 숫자가 아닌 경우
    - [x] 두자리가 아닌 경우
    - [x] 범위를 벗어난 경우
- [x] CVC 입력
  - [x] 유효성 검사
    - [x] 숫자가 아닌 경우
    - [x] 세자리가 아닌 경우
- [x] 실시간 프리뷰 업데이트
  - [x] 카드 번호가 Visa나 MasterCard에 해당하면 해당 브랜드의 로고를 표시한다.
  - [x] 카드 브랜드 구분 로직
    - [x] Visa : 4로 시작하는 16자리 숫자
    - [x] MasterCard : 51~55로 시작하는 16자리 숫자
  - [x] 카드 번호 앞 8자리는 그대로 보여주고, 뒤 8자리는 숨김 처리한다.

### 컴포넌트

- [x] CardPreview
- [x] InputContainer
- [x] CardNumbersInput
- [x] CardExpiryInput
- [x] CVCInput
