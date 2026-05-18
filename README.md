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

- [x] 카드 네트워크 브랜드 추가
  - [x] 유니온페이
    - [x] 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
      - [x] 622126 ~ 622925 로 시작
      - [x] 624 ~ 626 로 시작
      - [x] 6282 ~ 6288 로 시작
  - [x] 아멕스
    - [x] 카드의 앞 번호가 34, 37로 시작하는 15자리 숫자
  - [x] 다이너스
    - [x] 카드의 앞 번호가 36으로 시작하는 14자리 숫자

- [x] 추가 폼 필드
  - [x] 카드사 선택
    - [x] 선택된 카드사에 따라 카드 색상 변경
  - [x] 비밀번호 입력

- [x] 폼 필드 렌더링 순서 (비밀번호 -> CVC 번호 -> 카드 유효기간 -> 카드사 -> 카드 번호)

- [x] 폼 제출 버튼
  - [x] 모든 카드 정보가 정확하게 입력되고 검증되었을때 제출 버튼 활성화(하나라도 정확하지 않을시 비활성화)

- [x] 폼 제출(custom hooks)
  - [x] 카드 등록 페이지 이동

- [x] 카드 등록 성공 페이지(react-router)
  - [x] 카드 등록 완료 메시지 렌더링
  - [x] 카드 등록 페이지 이동 버튼 제공

- [x] UX
  - [x] 입력 포커스가 양방향으로 자동 이동

### 추가적으로 해보고 싶은 기능 요구 사항

- [ ] CVC 입력시 카드가 Flip Over 되는 이펙트
- [ ] CVC 입력시 Preview 렌더링

### 리팩토링 사항

#### 버그

- [x] Amex, Diners와 같이 16자리가 아닌 경우 onFocus에 의해 16자 검증이 수행되어 에러메시지 반환
- [x] 카드 번호 입력에서 숫자가 아닌 입력 막기

#### 구조

- [x] Utils의 이름이 불명확함. 이름만으로는 기능유추가 어려움. Card내의 Utils로 이동시키고 더 직접적인 네이밍으로 전환
- [x] CardNetwork를 클래스가 아닌 객체로 전환
- [x] ProgressManager와 CardForm에 결합이 존재
- [x] Validator를 변경할 Error상태를 반환하는 형태로 전환할지 고민
- [x] ProgressManager의 Complete검증 메서드를 분리
- [x] ProgressManager는 Complete된지 여부에 따라 Progress만 조정하여 반환하도록 전환

## 페이먼츠 3단계 - MSW & Async & Testing

### 기능 요구 사항

- [x] 카드 등록
  - [x] 카드 생성하는 API 추가
    - [x] 201 응답시 카드 생성 완료 페이지 이동
    - [x] 카드 저장 (인메모리)
  - [x] 시리얼라이저 검증
    - [x] 필드별 에러메시지 렌더링

- [x] 카드 생성 완료 페이지
  - [x] 확인 버튼 라우트 변경(카드 목록)

- [ ] 카드 목록 페이지
  - [ ] 카드 가져오는 API 추가(Local Storage 기반 ..?)
  - [ ] 비동기 상태에 맞는 UI 표시
    - [ ] loading
    - [ ] success + 목록(x)
    - [ ] success + 목록(o)
    - [ ] error
  - [ ] 카드 삭제 버튼
    - [ ] 버튼 클릭시 `window.confirm`을 통해 모달 제공 (확인시에만 제거)
      - [ ] 확인시 제거 (o)
      - [ ] 취소시 아무동작 (x)
    - [ ] 제거시 DELETE API 요청 -> 카드 목록 갱신
