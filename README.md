# 페이먼츠

> react-payments  
> FE 레벨2 페이먼츠 미션

[🔗 웹페이지 배포 주소](https://shinjungoh.github.io/react-payments/)  
[🎨 스토리북 배포 주소](https://68009db56ddb7f7e2eb2c11e-uugkxvlfan.chromatic.com/?path=/story/app-app--default)

<br>

## 🎯 기능 요구 사항

## [Step1] 🎨 Component & Storybook

### 1. 💳 카드 번호 입력 및 식별

- [x] 사용자가 입력하는 카드 번호를 실시간으로 파악한다.
- [x] Visa나 MasterCard에 해당하면 해당 브랜드의 로고를 UI에 표시한다.
- [x] Visa 카드와 Master 카드의 앞 번호의 규칙은 다음과 같이 통일해서 진행한다.
  - 💡 카드 브랜드 구분 로직 (Visa / MasterCard)
    - Visa: 4로 시작하는 16자리 숫자
    - MasterCard: 51~55로 시작하는 16자리 숫자
- [x] 입력은 숫자만 가능하다.

### 2. 🔢 카드 유효기간 입력

- [x] 월과 년도를 범위 내에서만 입력할 수 있어야 한다.
  - [x] 월의 범위는 1~12 사이의 숫자만 입력 가능하다.
  - [x] 년도의 범위는 25(현재 년도) 이상의 숫자만 입력 가능하다.
- [x] 다른 값을 입력하는 경우 에러 메시지를 출력한다.

### 3. 🥉 CVC 번호 입력

- [x] CVC 항목에는 3자리 숫자만 입력 가능하다.
- [x] 다른 값을 입력하는 경우 에러 메시지를 출력한다.

### 4. 🖼️ 실시간 프리뷰 업데이트

- [x] 사용자의 카드 정보 입력에 따라 카드 프리뷰를 동시에 업데이트한다.

<br>

## ✅ 프로그래밍 요구사항

- Test
  - [x] Storybook을 이용하여, 컴포넌트의 다양한 상태를 테스트한다.
- Readability
  - [x] 에러 처리 로직을 명확하게 작성하여 코드의 가독성을 높인다.
- Reusability
  - [x] 반복되는 컴포넌트와 스타일은 분리하여 재사용성을 높인다.
- Library
  - [x] 스타일링에는 CSS Module, styled-components, emotion 중 한 가지를 선택하여 사용한다.
- 미션의 요구 사항 문제를 해결하기 위한 용도가 아닌, 욕심을 위한 라이브러리는 지양한다.

<br>

## 📝 커밋 메시지

- feat : 새로운 기능을 추가한 경우
- fix : 버그 수정
- docs : 문서를 수정한 경우
- style : 코드 스타일, 포멧, 주석을 변경
- design: CSS 등 사용자 UI 디자인 변경
- refactor : 코드 리팩토링
- test : 테스트 관련 코드를 수정한 경우
- chore : 코드 수정이 아닌, 단순 폴더명 파일명 등을 수정한 경우
- remove: 파일이나 로직을 삭제한 경우
