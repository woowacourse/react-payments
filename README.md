# react-payments
### 기능
- [ ] 카드 번호 입력
    - [ ] 유효성 검사
        - [ ] 숫자가 아닌 경우
        - [ ] 유효하지 않은 번호인 경우
- [ ] 유효기간 입력
    - [ ] 유효성 검사
        - [ ] 숫자가 아닌 경우
        - [ ] 범위를 벗어난 경우
- [ ] CVC 입력
    - [ ] 유효성 검사
        - [ ] 숫자가 아닌 경우
        - [ ] 세자리가 아닌 경우
- [ ] 실시간 프리뷰 업데이트
    - [ ] 카드 번호가 Visa나 MasterCard에 해당하면 해당 브랜드의 로고를 표시한다.
    - [ ] 카드 브랜드 구분 로직
      - [ ] Visa : 4로 시작하는 16자리 숫자
      - [ ] MasterCard : 51~55로 시작하는 16자리 숫자
    - [ ] 카드 번호 앞 8자리는 그대로 보여주고, 뒤 8자리는 숨김 처리한다.

### 컴포넌트
- [ ] CardPreview
- [x] InputContainer
- [x] CardNumbersInput
- [x] CardExpiryInput
- [x] CVCInput