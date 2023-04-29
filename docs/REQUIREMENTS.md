## 기능 목록

- [x] CardViewer 컴포넌트
  - [x] UI
  - [x] 등록된 카드 정보를 보여준다
- [x] ScrollTop 컴포넌트 - 페이지 이동 시 스크롤을 상단으로 이동

### 보유 카드 목록 페이지

- [x] CardList 컴포넌트
  - [x] UI
  - [x] 등록일자 기준 내림차순 정렬 (sort 함수 사용하거나 저장할 때 unshift 함수로 배열 앞에 추가하기)
- [x] AddNewCardButton 컴포넌트
  - [x] UI
  - [x] 클릭시 페이지 이동

<br/>

### 카드 추가 페이지

- [x] input에서 입력이 발생하면 실시간으로 상단 카드에 입력 정보 렌더링
- [x] 모든 input 컴포넌트의 입력이 유효한 경우 다음 버튼 활성화 (안보였다가 보여짐)
- [x] 다음 버튼 클릭시 보유 카드 목록에 새로운 카드 등록 (local storage 활용)
- [x] 뒤로가기 버튼 클릭시 form 내부 모든 input 초기화 + 보유 카드 목록 페이지로 이동

- [x] CardNumberInput 컴포넌트
  - [x] UI
  - [x] 숫자가 아닌 값이 입력 된 경우 에러 발생
  - [x] 뒤 8자리는 `type="password"`로 지정
  - [x] 4자리씩 입력 받는 `input` 4개로 구성, 이전 `input`에 4자리 입력 완료시 다음 `input`으로 focus 이동
- [x] ExpirationDateInput 컴포넌트
  - [x] UI
  - [x] 유효한 날짜가 아닌 경우 에러 발생
    - [x] 달이 1미만이거나 12초과일 경우
    - [x] 현재 날짜보다 이전 날짜인 경우
- [x] OwnerNameInput 컴포넌트
  - [x] UI
  - [x] 영문이 아닌 경우 에러 발생
  - [x] 이름의 길이가 30자 초과일 경우 에러 발생
  - [x] 현재 입력한 이름 문자열의 길이를 우측 상단에 `n/30` 형식으로 렌더링
- [x] SecurityCodeInput 컴포넌트
  - [x] UI
  - [x] 총 길이 3자리
  - [x] `type="password"`로 지정
- [x] PasswordInput 컴포넌트
  - [x] UI
  - [x] 앞의 두자리만 입력
  - [x] 숫자가 아닌 경우 에러 발생
  - [x] `type="password"`로 지정
- [x] 다음 버튼 컴포넌트 (그냥 styled component로 대체 가능)
- [x] CardSelectModal 컴포넌트
  - [x] UI
  - [x] 닫기 버튼 클릭으로 닫기
  - [x] ESC키로 닫기
  - [x] 배경 클릭으로 닫기
  - [x] 모달 오픈 시 배경 스크롤 막기
- [x] Tooltip 컴포넌트

### 카드 별칭 추가 페이지

- [x] 추가한 카드 미리보기
- [x] 카드 별칭 입력
- [ ] 현재 입력한 카드 별칭의 길이를 우측 상단에 `n/10` 형식으로 렌더링
- [x] 확인 버튼 클릭 시 '보유 카드 목록 페이지'로 이동

<br/>
