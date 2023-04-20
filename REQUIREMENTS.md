# 구현 목록

## 페이지

- [x] Home
- [x] CardRegistration
- [x] NotFound

## Component

- [x] App

  - [x] Home

    - [x] EmptyHeader
    - [x] CardList
      - [x] CardPreview
    - [x] AddCardButton

  - [x] CardRegistration

    - [x] ArrowHeader
    - [x] CardPreview
    - [x] AddCardForm
      - [x] CardNumberInput
        - [x] CardInfoInput
          - [x] Input
      - [x] ExpirationDateInput
      - [x] CardOwnerName
      - [x] CardSecurityCodeInput
        - [x] HelpButton
      - [x] CardPasswordInput
      - [x] NextButton

  - [x] NotFound

## 기능

- [x] 다음 버튼을 누르면 카드 추가 페이지로 이동한다.

- [x] 인풋창에 관련 정보를 입력하면 카드에 정보가 나온다.

  - [x] 카드 번호 입력 기능

    - [x] 16자리 숫자만 입력 가능하게 한다.

  - [x] 만료일 입력 기능

    - [x] 숫자만 입력이 가능하게 한다.

  - [x] 카드 소유자 이름(선택) 입력 기능

    - [x] 최대 30글자까지 입력이 가능하게 한다.

  - [x] 보안 코드(CVC/CVV) 입력 기능

    - [x] 숫자 3자리만 입력이 가능하게 한다.

  - [x] 카드 비밀번호 입력 기능
    - [x] 한 칸당 숫자 하나만 입력이 가능하게 한다.

- [x] 다음 버튼

  - [x] 다음 버튼을 누르면 카드가 등록이 된다.
  - [x] 다음 버튼을 누르면 다시 카드 목록으로 이동한다.
