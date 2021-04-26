## 컴포넌트

- Card
  - [x] 카드의 타입, 사용자 이름, 카드 번호, 만료일, 카드 사이즈를 props로 받는다.
  - [x] 카드 타입이 UNKNOWN인 경우 기본 카드 템플릿을 띄운다.
  - [x] 카드 번호의 뒤 8자리는 가린다.
- Input
  - [x] input의 타입, placeholder, 텍스트 중간 정렬 여부를 props로 받는다.
  - [x] 추가적인 input option도 props로 받는다.
- Header
  - [x] Header는 title과 뒤로가기 버튼 핸들러를 props로 받는다.
  - [x] 버튼 핸들러가 없으면 버튼을 감춘다.
- Modal
  - [x] Modal storybook 컴포넌트를 구현한다.
- CardTypeRadio
  - [x] 카드 타입, name attribute를 props로 받는다.
- Button
  - [x] innerText와 onClick을 props로 받는다.

## 카드 추가 페이지

- [x] 카드 추가 페이지의 레이아웃을 구성한다.
- [x] 카드 번호 input을 구현한다.
  - [x] 카드 번호는 4자리씩 나눠 포맷팅한다.
  - [x] 카드 번호 16자리를 모두 채우면 카드사를 선택하는 모달을 띄운다.
- [x] 만료일 input을 구현한다.
  - [x] month와 year를 나눠 포맷팅한다.
- [x] 카드 소유자 이름 input을 구현한다.
  - [x] 이름의 길이를 indicator에 보여준다.
- [x] 보안 코드 input을 구현한다.
- [x] 카드 비밀번호 input을 구현한다.
- [x] 모든 input을 정상적으로 입력하면 다음 버튼을 보여준다.
- [x] 다음 버튼을 누르면 추가 완료 페이지를 보여준다.

## 카드 추가 완료 페이지

- [x] 카드 추가 완료 페이지의 레이아웃을 구성한다.
- [x] 카드 추가 페이지에서 카드의 별명을 설정할 수 있다.
- [x] 확인 버튼을 누르면 새로운 카드가 등록된다.
