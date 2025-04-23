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

## 피드백 바탕 리팩토링 사항1

- [x] 설계 구조 변경
  - [x] 에러 처리 로직
    - [x] 에러 관련 처리 훅으로 분리
- [x] previewContainer 제거
- [x] previewCard 내부 로직 수정 (cardType 내부에서 관리)
- [x] cspell 익스텐션 이용 알파벳 수정
- [x] string 배열 타입 -> 튜플 타입 변경
- [x] 타입 별도 파일 관리
- [x] input props 네이밍 표준 인터페이스 명으로 변경
- [x] CardInformation 도메인 -> use- 붙이기 (훅사용)
- [x] keyof CardInformationType 수정 (formContainer 파일)
- [ ] storybook autodocs 주석처리
- [x] storybook 타입 에러 (args:any)
- [x] previewCard uniqueNumber 뒷 8자리 마스킹 처리
- [x] setState((prev) => {...})로 변경
- [x] errorMessage 컴포넌트 분리
- [x] errorMessage, errorState 타입 추가
- [x] constant (MIN_MONTH, MAX_MONTH, MIN_YEAR,NUMBER_ONLY_REGEX)추가

## 피드백 바탕 리팩토링 사항2

- [ ] 필드 별 에러 훅 분리 (uniqueNumber, expirationDate, cvcNumber)
- [ ] 에러 훅 전체 관리 훅 생성 -> app에서 내려주기 (상위에서 관리한다)
  - [ ] 전체 에러훅에서 개별 에러 훅들을 컴포넌트에 뿌려준다.
- [ ] 필드 별 컴포넌트 제작 (추후 더 고민 해보고 관리할 예정)
- [ ] formUIControllerData 데이터 배열로 변경 및 필드값 key로 지정
- [ ] errorMessage 컴포넌트 opacity -> visibility 속성으로 변경
- [ ] PreviewCard 컴포넌트 내부 삼항연산자로 변경

- [ ] 전체 상태 분리? -> 에러들처럼 개별로 관리할 수 있지 않나?
