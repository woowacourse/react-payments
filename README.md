# react-payments

## 사용자 카드정보 입력
1. 카드 번호 입력 및 식별
- [X] 4자리 숫자 묶음 4개를 입력받는다.
- [ ] 입력은 숫자만 가능하며, 유효하지 않은 번호 입력 시 피드백을 제공한다.
    - [ ] 숫자가 아닌 문자를 입력하는 경우 에러메시지를 보여준다.
    - [ ] 입력한 숫자가 4자리 미만인 경우 에러메시지를 보여준다.

2. 카드 브랜드 구분 로직
- [x] Visa: 4로 시작하는 16자리 숫자
- [x] MasterCard: 51~55로 시작하는 16자리 숫자

3. 카드 유효기간 입력
- [x] 2자리 숫자 묶음 2개를 입력받는다.
- [ ] 월과 년도를 범위 내에서만 입력할 수 있어야 하며, 입력 제한을 두어 사용자가 숫자만 입력할 수 있도록 한다.

4. 카드 소유자 이름 입력
- [x] 문자를 입력받는다.
- [ ] 영문자 대문자만 입력 가능한 폼을 구현한다.

## 사용자 카드정보 출력
1. 실시간 프리뷰 업데이트
- [x] 사용자의 카드 정보 입력에 따라 카드 프리뷰를 동시에 업데이트한다.
- [x] 카드 번호 입력에서 MasterCard에 Visa나 MasterCard에 해당하면 해당 브랜드의 로고를 UI에 표시한다.

