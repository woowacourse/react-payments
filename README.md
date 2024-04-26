# react-payments

## 💳 기능 요구 사항

- [x] 동적 입력 UI

  - [x] 사용자의 입력이 완료되면 다음 필드로 자동으로 이동한다.
  - [x] 각 필드는 이전 필드가 정확하게 입력되고 검증되면 등장한다.

- [x] 카드 번호 입력 및 식별

  - [x] 카드 번호의 3~4번 블럭은 숨김 처리한다.
  - [x] 숫자를 입력하지 않으면 올바르게 입력하라는 피드백을 보여주고, 입력을 제한한다.
  - [x] 각 카드 번호 입력 블럭은 0~9의 숫자 4자리로 이루어져있다.
  - [x] 입력은 숫자만 가능하며, 유효하지 않은 번호 입력 시 피드백을 제공한다.

- [x] 카드 유효기간 입력

  - [x] 입력은 숫자만 가능하며 숫자가 아닐시 피드백을 제공한다.
  - [x] 유효하지 않은 월을 입력 시(ex 13월) 피드백을 제공한다.
  - [x] 현재보다 이전 날짜를 입력 시 피드백을 제공한다.
  - [x] 한 자리 숫자를 입력 시 자동으로 형식에 맞춰 0을 넣어준다.

- [x] 카드 소유자 이름 입력

  - [x] 소문자로 입력 시 강제로 대문자로 변환한다.
  - [x] 영어가 아닌 문자 입력 시 입력을 제한하고 피드백을 제공한다.

- [x] CVC 번호 입력

  - [x] 입력은 숫자만 가능하며 숫자가 아닐 시 피드백을 제공한다.

- [x] 폼 제출, 상태 관리

  - [x] 모든 카드 정보가 정확하게 입력되고 검증되면 확인 버튼이 등장한다.
  - [x] 사용자 입력 중 하나라도 유효하지 않은 값이 될 경우, 확인 버튼이 비활성화된다.

- [x] 카드 등록 완료 및 네비게이션

  - [x] 확인 버튼을 클릭하면 카드 등록 완료 페이지로 이동한다.
  - [x] 카드 등록 완료 페이지에서 확인 버튼을 누르면 다시 카드 등록 페이지로 돌아간다.

- [x]실시간 프리뷰 업데이트
  - [x] 카드 번호가 4로 시작하면 Visa카드 로고를 카드 프리뷰에 업데이트한다.
  - [x] 카드 번호가 51~55로 시작하면 MasterCard 로고를 카드 프리뷰에 업데이트한다.
  - [x] 사용자가 카드 번호 입력 시 실시간으로 카드 프리뷰에 업데이트한다.
  - [x] 사용자가 카드 유효기간 입력 시 실시간으로 카드 프리뷰에 업데이트한다.
  - [x] 사용자가 카드 소유자 이름 입력 시 실시간으로 카드 프리뷰에 업데이트한다.
  - [x] 사용자는 카드사를 선택할 수 있고, 카드사에 따라 미리보기 카드의 색상을 변경한다.
  - [x] CVC 번호를 입력할 때는 카드의 뒷면을 시각적으로 보여준다.
