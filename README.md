# react-payments

### ✅ 구현 체크리스트

#### 📌 입력 관련

- [x] 카드 번호 입력
  - [x] 숫자 외 입력 차단
  - [x] 네 자리 단위 입력
  - [x] 유효성 검사 (Visa, MasterCard)
- [x] 유효기간 입력
  - [x] 숫자 외 입력 차단
  - [x] 월/년 각 두 자리 입력
  - [x] 월 범위 (01 ~ 12) 검사
- [x] CVC 입력
  - [x] 숫자 외 입력 차단
  - [x] 세 자리 입력
- [x] 각 입력 완료 시 다음 필드로 자동 포커스 이동

#### 📌 카드 프리뷰

- [x] 카드 브랜드 로고 표시
  - [x] Visa: 4로 시작하는 16자리
  - [x] MasterCard: 51~55로 시작하는 16자리
- [x] 카드 번호 앞 8자리 표시, 뒤 8자리 마스킹
- [x] 선택한 카드사에 따라 프리뷰 색상 변경

#### 📌 제출 및 네비게이션

- [x] 모든 입력이 유효할 경우에만 확인 버튼 활성화
  - [x] 입력값 변경 시 다시 비활성화
- [x] 확인 버튼 클릭 시 등록 완료 페이지로 이동
- [ ] 등록 완료 페이지에서 성공 메시지 및 홈 이동 버튼 제공

 
### 🧩 컴포넌트 구성

- CardPreview: 카드 정보 미리보기
- InputContainer: 입력폼 래퍼
- CardNumbersInput: 카드 번호 입력
- CardExpiryInput: 유효기간 입력
- CVCInput: CVC 번호 입력
- PasswordInput: 비밀번호 앞 2자리 입력
- CardCompanySelect: 카드사 셀렉트 박스
- CardRegisterForm: 카드 등록 폼
- Button
  - RegisterCardButton: 등록 버튼
  - RegisterAnotherCardButton: 등록 완료 후 카드 등록 페이지로 돌아가는 버튼