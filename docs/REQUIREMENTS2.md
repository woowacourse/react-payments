핵심 - 카드 등록에 필요한 입력 값을 받고 유효성 검증을 한 뒤, 카드를 등록한다(카드 정보를 저장한다)

- [x] (유효성 검증을 생각하지 않고) cvc,비밀번호 입력 값을 받을 수 있도록 컴포넌트를 구현한다.
- [x] cvc, 비밀번호 대한 상태 관리 및 유효성 검증 기능을 추가한다.
- [x] 유효성 검증에 따라 동적으로 입력창을 보여주고 버튼을 활성화하는 동적 UI를 구현한다.
  - [x] 입력마다 실시간으로 유효성을 검증하도록 수정한다.(현재는 blur시 검증)
  - [x] blur 시에만 보여주는 에러 상태를 업데이트하도록 한다.(displaying error state를 만든다.)
  - [x] 필드 유효성에 따라 상위 입력창을 보여주는 동적 UI 기능을 구현한다.
- [x] 카드 등록 완료 페이지 생성 및 페이지 라우팅을 구현한다.
- [x] cvc 입력 시 카드가 뒤집히는 UI를 구현한다.
- [x] 카드사 선택 기능을 추가한다.
- [x] 인풋 입력 완료 시 자동 전환 기능을 구현한다.
- [x] 영어/숫자 입력만 가능한 useEnglishInput, useKoreanInput을 구현한다.
- [x] 컴포넌트 내 스타일 컴포넌트 선언은 S 객체로 묶어서 표현하기 (일반 컴포넌트와 구분하기 위함)

## 기타

- [x] 인터페이스 선언 중복 제거
- [x] import 선언 순서 정렬

## step 2 피드백 반영

- [x] 컴포넌트 id를 고유하게 만들기(uuid 추가)
- [x] [CardNumberInputs.tsx] cardNumbers[index] -> cardNumbers[key]
- [x] [CardInfoForm] type="submit"으로 수정하고, onSubmit을 핸들링하기
- [x] [useCardInfoCompletionStatus.ts] 로직 중복 제거
- [ ] CardPreviewBack, Select 스토리북 추가
- [ ] onMonth blur 시 자동 formatting 추가
