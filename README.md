# react-payments

## 📍 학습 목표

- ✔️ 재사용 가능한 Input Component를 개발한다.
- ✔️ Storybook을 사용하여 컴포넌트의 다양한 상태를 시각적으로 테스트한다.
- ✔️ 카드 정보를 효과적으로 렌더링 하기 위한 상태 관리를 경험한다.

## 주요 구현 사항

1. domain
   도메인 : 카드 정보

   - 카드번호
   - 유효기간(년도/월)
   - cvc

   ```jsx
   cardInformation = {
     uniqueNumber: { first: "", second: "", third: "", fourth: "" },
     expirationDate: { MM: "", YY: "" },
     cvcNumber: "",
   };
   ```

2. UI

   - Input 컴포넌트(placeholder, maxLength, asterisk)
     - 카드 번호, 유효기간, cvc 입력
   - wrapper 컴포넌트()

   ui 컨트롤 객체

   ```jsx
   uiController = {
   	uniqueNumber : {inputProps:{placeholder: ["1234","1234","1234","1234"], maxLength:4}, inputNumber:4, title:"결제할 카드 번호를 입력해 주세요", description:"본인 명의의 카드만 결제 가능합니다."}
   	expirationDate : {inputProps:{placeholder: ["MM","YY"], maxLength:2}, inputNumber:2, title:"카드 유효기간을 입력해 주세요", description:"월/년도(MMYY)를 순서대로 입력해 주세요."}
   	cvcNumber : {inputProps:{placeholder: "123", maxLength:3}, inputNumber:1, title:"CVC 번호를 입력해 주세요", description:""}
   }
   ```

유효성 검증
공통) 자연수가 아닌경우,

- expriationDate

  - MM : 1~12 사이가 아닌 경우

## 기능 명세서

- [x] 프로젝트 초기 세팅(emotion 설치, npm install, storybook 세팅)
- [x] cardInformation domain 생성 => 상태 도메인으로 관리
- [x] component 생성
  - [x] Input 컴포넌트 구현
  - [x] Input 컴포넌트 스토리북 생성
  - [x] InputField 컴포넌트 구현(label, input, error label)
  - [x] InputField 컴포넌트 스토리북 생성
    - [x] error 메시지 상태관리
  - [x] UniqueNumberForm 컴포넌트 구현
  - [x] UniqueNumberForm 스토리북 생성
  - [x] ExpirationDateForm 컴포넌트 구현
  - [x] ExpirationDateForm 스토리북 생성
  - [x] CvcNumberForm 컴포넌트 구현
  - [x] CvcNumberForm 스토리북 생성
  - [x] PasswordForm 컴포넌트 구현
  - [x] CardIssuerForm 컴포넌트 구현
  - [x] Select 컴포넌트 구현
  - [x] Select 스토리북 생성
  - [x] PreviewComponent 컴포넌트 퍼블리싱
  - [x] PreviewCard 컴포넌트 스토리북 생성 -> 버전 (비자, 마스터카드)
  - [x] PreviewCard APP 컴포넌트 합성 -> 상태 공유
  - [x] App 컴포넌트 퍼블리싱
  - [x] 카드 타입 판별 기능 구현
  - [x] text 컴포넌트 구현
  - [x] Button 컴포넌트 구현
  - [x] Button 스토리북 생성
- [x] domain 상태 관리 (preview, form 상태 동기화)
- [x] text 컴포넌트 스토리북 생성
- [x] 입력 완료 시 다음 필드로 이동
- [x] 카드사 선택에 따른 카드 색상 변경
- [x] 확인 버튼 활성화
- [x] 카드 등록 완료 페이지 이동
- [x] 포커스 자동 이동
