# 페이먼츠 미션

## Step1

## 기능 요구 사항

- 컴포넌트
  - [x] CardForm
    - [x] CardSection
      - [x] CardNumberInputComponent
      - [x] CardExpiryDateInputComponent
      - [x] CardCVCInputComponent
  - [x] CardComponent
    - [x] CardNumberComponent
    - [x] NetworkBrandComponent
    - [x] ExpiryDateComponent
    - [x] CVCComponent

- 카드번호 입력
  - [x] 카드번호 입력값 검증
    - [x] 숫자만 입력 검증
    - [x] 첫째, 둘째 입력 검증(Visa: 4로 시작하는 16자리 숫자 MasterCard: 51~55로 시작하는 16자리 숫자)
    - [x] focus 아웃시 길이 검증
  - [x] 유효기간 입력 검증
    - [x] MM(01 ~ 12) 입력 검증
    - [x] focus 아웃시 길이 검증
  - [x] CVC 입력 검증
    - [x] 숫자 입력 검증
    - [x] focus 아웃시 길이 검증

- 실시간 프리뷰
  - [x] 입력값을 기반으로 카드 UI가 변경되도록 한다.

## UI

- [x] 카드번호, 카드 만료일 레이아웃 정렬

---

## Step2

## 기능 요구 사항

- 컴포넌트
  - [x] CardForm
    - [x] CardSection
      - [ ] CardSelectionDropdown
      - [x] CardNumberInput
      - [x] CardExpiryDateInput
      - [x] CardCVCInput
      - [ ] CardPasswordInput
  - [x] CardComponent
    - [x] CardNumber
    - [x] NetworkBrand
    - [x] ExpiryDate
- 페이지
  - [ ] Card
  - [ ] CompleteRegistration
- 검증
  - [x] 카드번호 입력값 검증
    - [x] Visa: 4로 시작하는 16자리 숫자
    - [x] MasterCard: 51~55로 시작하는 16자리 숫자
    - [x] Diners: 36으로 시작하는 14자리 숫자
    - [x] AMEX: 34, 37로 시작하는 15자리 숫자
    - [x] 유니온페이 (16자리 숫자)
      - [x] 622126~622925로 시작하는 경우
      - [x] 624~626로 시작하는 경우
      - [x] 6282~6288로 시작하는 경우
    - [x] 브랜드에 맞는 자리수에 맞게 fourth-digits input maxlength와 placeholder 변경하기
      - [x] onBlur시 자리수에 맞게 에러메세지 출력
- 동적 입력 UI 구현
  - [ ] 사용자의 입력이 완료되면 다음 필드로 자동으로 이동
- 실시간 프리뷰
  - [ ] 카드사에 맞는 카드 배경색 변경

## 프로그래밍 요구사항

- Routing
  - [ ] react-router 사용
- Custom Hooks
  - [ ] 사용하여 Form 관리 로직을 UI와 분리하기 (구현 완료 후)
