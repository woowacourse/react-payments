# 페이먼츠 미션

## 페이먼츠 1단계 - Component & Storybook

### 기능 요구 사항

- 컴포넌트
  - [x] CardForm
    - [x] CardSection
      - [x] CardNumberInputComponent
      - [x] CardExpiryDateInputComponent
      - [x] CardCVCInputComponent
  - [x] CardComponent
    - [x] CardNumberComponent
    - [x] NetworkBrandComponent
    - [x] ExpiryDateComponent
    - [x] CVCComponent

- 카드번호 입력
  - [x] 카드번호 입력값 검증
    - [x] 숫자만 입력 검증
    - [x] 첫째, 둘째 입력 검증(Visa: 4로 시작하는 16자리 숫자 MasterCard: 51~55로 시작하는 16자리 숫자)
    - [x] focus 아웃시 길이 검증
  - [x] 유효기간 입력 검증
    - [x] MM(01 ~ 12) 입력 검증
    - [x] focus 아웃시 길이 검증
  - [x] CVC 입력 검증
    - [x] 숫자 입력 검증
    - [x] focus 아웃시 길이 검증

- 실시간 프리뷰
  - [x] 입력값을 기반으로 카드 UI가 변경되도록 한다.

### UI

- [x] 카드번호, 카드 만료일 레이아웃 정렬

### 리팩토링 사항

- [x] 데이터 전달 구조
- [x] 검증로직 분리

---

## 페이먼츠 2단계 - hooks & state

### 기능 요구 사항

- [ ] 카드 네트워크 브랜드 추가
  - [ ] Diners, Amex, 유니온페이

- [ ] 추가 폼 필드
  - [ ] 카드사 선택
    - [ ] 선택된 카드사에 따라 카드 색상 변경
  - [ ] 비밀번호 입력

- [ ] 폼 필드 렌더링 순서 (비밀번호 -> CVC 번호 -> 카드 유효기간 -> 카드사 -> 카드 번호)

- [ ] 폼 제출 버튼
  - [ ] 모든 카드 정보가 정확하게 입력되고 검증되었을때 제출 버튼 활성화(하나라도 정확하지 않을시 비활성화)

- [ ] 폼 제출(custom hooks)
  - [ ] 카드 등록 페이지 이동

- [ ] 카드 등록 성공 페이지(react-router)
  - [ ] 카드 등록 완료 메시지 렌더링
  - [ ] 카드 등록 페이지 이동 버튼 제공

- [ ] UX
  - [ ] 입력 포커스가 양방향으로 자동 이동
  - [ ] 필드 FadeIn, FadeOut 이펙트

### 추가적으로 해보고 싶은 기능 요구 사항

- [ ] CVC 입력시 카드가 Flip Over 되는 이펙트
- [ ] CVC 입력시 Preview 렌더링
