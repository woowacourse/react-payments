# 페이먼츠 미션

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
  - [x] 유효기간 입력 검증
    - [x] MM(01 ~ 12) 입력 검증
  - [x] CVC 입력 검증
    - [x] 숫자 입력 검증

- 실시간 프리뷰
  - [] 입력값을 기반으로 카드 UI가 변경되도록 한다.

## UI

- [] 카드번호, 카드 만료일 레이아웃 정렬

## 리팩토링 사항

- [] 데이터 전달 구조
- [] 검증로직 분리
