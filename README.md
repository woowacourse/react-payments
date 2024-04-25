# react-payments

## Step1 핵심 기능

사용자가 올바른 카드 정보를 입력했는지 식별한다.

## 기능 구현 사항

### 카드 번호 입력 및 식별

[x] 사용자가 입력하는 카드 번호를 실시간으로 파악하여, Visa나 MasterCard에 해당하면 해당 브랜드의 로고를 UI에 표시한다.

- 카드 종류
- Visa: 4로 시작하는 16자리 숫자
- MasterCard: 51~55로 시작하는 16자리 숫자
- Visa나 MasterCard가 아니면 이미지를 띄워주지 않는다.

[x] 입력은 숫자만 가능하며, 유효하지 않은 번호 입력 시 피드백을 제공

### 카드 유효기간 입력

[x] 숫자만 입력 가능
[] 월과 년도를 지정된 범위 내에서만 입력할 수 있음

- 범위
  - 월: 1 ~ 12 (단, 24년도인 경우 4 ~ 12)
    [x] 년도: 24 ~ 29

### 카드 소유자 이름 입력

[x] 영문 대문자만 입력 가능
[x] 길이 제한: 띄어쓰기 포함 30자

### 실시간 프리뷰 업데이트

[x] 사용자의 카드 정보 입력에 맞춰 카드 프리뷰를 동시에 업데이트
[x] 첫 8자리는 숫자를 그대로 보여주고 마지막 8자리는 \* 으로 암호화

## Step2 핵심 기능

사용자가 입력한 유효한 카드 정보를 등록한다.

### 동적 입력 UI 구현

[] 유저 이름을 제외한 Input 요소는 사용자 입력이 완료되면 다음 Input으로 이동
[x] 카드 번호를 시작으로 한 Form 요소의 입력이 완료되면 다음 Form 요소를 최상단에 배치

### 카드사 선택

[x] 카드사 선택: 드롭다운 메뉴로 카드사 선택 가능

- default: '카드사를 선택해주세요'
  [x] 카드사에 따라 미리보기 카드의 색상을 변경
- BC카드 #F04651
- 신한카드 #0046FF
- 카카오뱅크 #FFE600
- 현대카드 #000000
- 우리카드 #007BC8
- 롯데카드 #ED1C24
- 하나카드 #009490
- 국민카드 #6A6056

### CVC 번호

[x] CVC 번호를 입력할 때 미리보기 카드의 뒷면을 보여줌
[x] 입력은 숫자만 가능하며, 유효하지 않은 값을 입력 시 피드백 제공

### 폼 제출 및 상태 관리

[x] 모든 카드 정보가 검증되면 확인 버튼 렌더링

- 사용자가 입력한 정보 중 하나라도 유효하지 않게 되면 확인 버튼 삭제

### 카드 등록 완료 및 네비게이션

[] 확인 버튼을 클릭하면 카드 등록 완료 페이지로 이동

- 카드 등록 완료 페이지
  [] 카드 등록이 성공적으로 완료되었다는 메시지 출력
  [] 다시 카드 등록 페이지로 돌아갈 수 있는 확인 버튼 제공
