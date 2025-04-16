# react-payments

- 카드 번호 입력 및 식별
- [ ] Visa나 MasterCard에 해당하면 해당 브랜드의 로고를 UI에 표시한다.

- [ ] 입력은 숫자만 가능하다.
- [ ] 사용자가 입력하는 카드 번호를 실시간으로 파악한다.
- [ ] 유효하지 않은 번호 입력 시 피드백을 제공한다.
  - 카드 브랜드 구분 로직 (Visa / MasterCard)
  - [ ] Visa: 4로 시작하는 16자리 숫자
  - [ ] MasterCard: 51~55로 시작하는 16자리 숫자
- 카드 유효기간 입력
- [ ] 월과 년도를 범위 내에서만 입력할 수 있어야 한다.
- [ ] 입력 제한을 두어 사용자가 숫자만 입력할 수 있도록 한다.

- 실시간 프리뷰 업데이트
- [ ] 사용자의 카드 정보 입력에 따라 카드 프리뷰를 동시에 업데이트한다.
