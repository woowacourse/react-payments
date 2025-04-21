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
  - [x] FormSection 컴포넌트 구현(title, description, wrapper)
  - [x] FormSection 컴포넌트 스토리북 생성
  - [x] FormContainer 컴포넌트 구현
  - [x] FormContainer 컴포넌트 스토리북 생성
  - [x] PreviewContainer 컴포넌트 구현
  - [x] PreviewComponent 컴포넌트 퍼블리싱
  - [x] PreviewCard 컴포넌트 스토리북 생성 -> 버전 (비자, 마스터카드)
  - [x] PreviewCard APP 컴포넌트 합성 -> 상태 공유
  - [x] App 컴포넌트 퍼블리싱
  - [x] 카드 타입 판별 기능 구현
  - [x] text 컴포넌트 구현
- [x] domain 상태 관리 (preview, form 상태 동기화)

- [x] text 컴포넌트 스토리북 생성

## 피드백 바탕 리팩토링 사항

- [ ] 설계 구조 변경
  - [ ] 에러 처리 로직
- [x] previewContainer 제거
- [x] previewCard 내부 로직 수정 (cardType 내부에서 관리)
- [x] cspell 익스텐션 이용 알파벳 수정
- [ ] string 배열 타입 -> 튜플 타입 변경
- [x] input props 네이밍 표준 인터페이스 명으로 변경
- [ ] CardInformation 도메인 -> use- 붙이기 (훅사용)
- [ ] keyof CardInformationType 수정 (formContainer 파일)
- [ ] storybook autodocs 주석처리
- [ ] storybook 타입 에러 (args:any)
- [x] previewCard uniqueNumber 뒷 8자리 마스킹 처리
