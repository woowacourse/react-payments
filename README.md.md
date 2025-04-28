# react-payments 2

## 📍 학습 목표

- ✔️ 다양한 Form 구성 요소들간의 상태를 효율적으로 관리한다.
- ✔️ hooks API를 이용하여 상태 관리 로직을 구현하한다.
- ✔️ custom hooks를 생성하여 Form 관리 로직을 컴포넌트에서 분리하고 재사용한다.
- ✔️ Controlled & Uncontrolled Components에 입각하여 Form을 핸들링한다.

## step1 기반 피드백 사항 반영

- [x] formUIControllerData 기반 map 돌릴때 컴포넌트 key 추가
- [x] 스토리북 jsDoc 주석 추가 (별도 타입 파일에 추가)
- [x] 카드 정보 상태 분리 -> 에러 훅 처럼 각각의 개별 상태 분리

## 기능명세서

- [x] 추가 필드 제작
  - [x] 카드사 선택 - selectBox 제작
    - [x] 스토리북 제작
  - [x] 비밀번호 입력 필드 추가 (정적 데이터)
    - [x] 스토리북 제작
    - [x] 비밀번호 value 마스킹 처리
- [x] 버튼 컴포넌트 제작
  - [x] 스토리북 제작
- [x] select 컴포넌트 추가
- [x] 카드사 색상 정리
- [x] 카드 정보 상태 변경 - 카드사, 패스워드 추가
- [x] 카드사에 따른 색상 변경 로직 추가(PreviewCard)
- [x] 동적 ui 테스트
- [x] step 별 동적 ui 구현
  - [x] 현재 입력한 상태 판별
  - [x] 현재 에러 상태 판별
- [x] FormSection 파생 컴포넌트 제작 (compound component)
- [x] 모든 필드 입력 + 유효성 통과시, 버튼 활성화
  - [x] 유효성 체크 훅에서 보내주는 값과 모든 카드 정보 상태 훅에서 보내주는 값으로 이용
- [x] 입력필드 step으로 나누기
  - [x] 사용자가 입력이 완료가 되면 해당 컴포넌트를 보여준다.
- [x] react-router를 이용하여 페이지를 관리
  - [x] completeCard 컴포넌트 제작
  - [x] 확인버튼 누를시, 페이지 이동
  - [x] 페이지 이동 후, 확인버튼 누를시, 다시 이전페이지로 이동
- [x] 사용자 입력시 자동 포커싱
  - [x] inputField 내부에 useRef 적용 (Ui에 가까움 / 훅으로 분리하려 했으나, 포기 -> 너무 복잡해짐.)
  - [x] autoFocus 기능 이용 (필드 이동)
- [x] 폼 제출 -> 확인 버튼 FormContainer 내부로 이동
- [x] completeIcon 이미지 추가
- [x] 스토리북 수정

---

추후 반영

- [ ] 유효성 검증 숫자만 입력할 수 있게 변경? (토스 ui 레퍼런스)
  - [ ] 아에 한글을 입력 못하게 막는것도 좋은 방법일듯
- [ ] cvcNumber, password 현재 배열로 관리 -> 일반 string으로 변경
  - [ ] -> inputfield의 onChange 다 넘겨줘야함.
- [ ] type 공통화 (UIformData, 컴포넌트 props)
- [ ] 타입 위치 재정립
- [ ] react.memo 사용 컴포넌트 최적화
- [x] 컴포넌트 props 네이밍 변경 및 통일 (setter-> setState로 변경)
- [x] 공통 훅 common폴더 분리
