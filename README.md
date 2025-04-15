# react-payments

# 기능 목록

## 사용자 입력

- [x] 사용자는 카드 번호를 입력할 수 있다.
  - [ ] 16자리의 입력 번호를 실시간 감지하여 알맞는 브랜드 로고를 UI에 표시한다. (Visa: 4로 시작 / MasterCard: 51~55로 시작 / 그외 로고 렌더링 x )
  - [ ] 예외: 숫자만 가능 / 16자리 / 한칸에 네 자리 -> 피드백: 빨간 border & 포커스 & 밑에 피드백 문구 출력
- [x] 사용자는 카드 유효기간을 입력할 수 있다.
  - [ ] 예외: 숫자만 가능 / 2자리 / 월은 1~12 까지 연도 25~99까지 / 오늘 날짜를 기준으로 유효한 기간인지 검증 -> 피드백: 빨간 border & 포커스 & 밑에 피드백 문구 출력
- [x] 사용자는 CVC 번호를 입력할 수 있다.
  - [ ] 예외: 숫자만 가능 / 3자리 -> 피드백: 빨간 border & 포커스 & 밑에 피드백 문구 출력

## UI 업데이트

- [ ] 사용자 입력에 따라 동시에 프리뷰를 업데이트한다.
  - [ ] 입력할 때마다 한자리 단위로 실시간 업데이트
  - [ ] 카드번호에 유효한 로고 실시간 업데이트
  - [ ] 카드번호 뒷 8자리는 마스킹 처리

# 테스트 목록 (Storybook)

DCI(Describe-Context-It) 패턴으로 작성

## 결제 입력 테스트 파일

- ### Describe

  - 사용자가 카드 정보를 입력 시

  - ### Context

    - 사용자가 카드 번호를 입력할 경우
    - ### It

      - 사용자가 16자리를 다 채우지 않은 채 카드번호 인풋 포커스를 이탈하면 "유효하지 않은 카드번호입니다. 16자리를 입력해주세요." 피드백을 출력한다.
      - 한 칸에 4자리를 다 채우지 않은 채 다음 포커스 이동하면 "유효하지 않은 번호입니다. 4자리를 입력해주세요." 피드백을 출력한다.
      - 사용자가 숫자 이외를 입력하려고 하면 "유효하지 않은 입력입니다. 숫자만 입력해주세요." 피드백을 출력한다.

    - ### Context
    - 사용자가 카드 유효 기간을 입력할 경우
    - ### It

      - 사용자가 4자리를 다 채우지 않은 채 유효기간 인풋 포커스를 이탈하면 "유효하지 않은 카드번호입니다. 16자리를 입력해주세요." 피드백을 출력한다.
      - 한 칸에 2자리를 다 채우지 않은 채 다음 포커스 이동하면 "유효하지 않은 번호입니다. 2자리를 입력해주세요." 피드백을 출력한다.
      - 사용자가 숫자 이외를 입력하려고 하면 "유효하지 않은 입력입니다. 숫자만 입력해주세요." 피드백을 출력한다.
      - 사용자가 현재 날짜 이전 기간을 입력할 경우 "유효하지 않은 카드입니다. 유효 기간을 확인해주세요." 피드백을 출력한다.

    - ### Context
    - 사용자가 CVC를 입력할 경우
      - ### It
        - 사용자가 3자리를 다 채우지 않은 채 CVC 인풋 포커스를 이탈하면 "유효하지 않은 CVC입니다. 3자리를 입력해주세요." 피드백을 출력한다.
        - 사용자가 숫자 이외를 입력하려고 하면 "유효하지 않은 입력입니다. 숫자만 입력해주세요." 피드백을 출력한다.

## 카드 프리뷰 UI 테스트 파일

- ### Describe
  - 사용자가 카드 정보를 입력 시
  - ### Context
    - 사용자가 카드 번호를 입력할 경우
    - ### It
      - 카드 번호 첫 자리가 4로 시작하면 VISA 로고가 렌더링된다.
      - 카드 번호 첫 자리가 51~55 로 시작하면 MasterCard 로고가 렌더링된다.
      - 사용자가 카드번호를 입력할 시 실시간으로 카드 번호가 업데이트된다.
      - 카드번호 뒷 8자리는 마스킹 처리하여 표시한다.
  - ### Context
    - 사용자가 유효 기간을 입력할 경우
    - ### It
      - 사용자가 유효 기간을 입력할 시 실시간으로 카드 번호가 업데이트된다.

# 설계 구조

## 디렉터리 구조

src/utils
src/constants
src/styles
src/components

src/components/abc/constants
src/components/abc/styles

Dom 트리구조와 비슷한 디렉터리 설계
src/components/paymentsLayout/paymentInput/
src/components/common

## 컴포넌트 분리

```js
src/
├── components/
│   ├── common/
│   │   ├── input.ts               # validator 콜백을 받아서 input 하나를 검증
│   │   └── inputForm.ts          # input 개수만큼 input 생성 + validator 전달
│   │
│   ├── paymentsInputPage/
│   │   ├── paymentsInputPage.ts  # 카드 정보 입력 페이지의 메인 컴포넌트
│   │   │
│   │   ├── cardInputForm/        # 카드 입력 폼 영역
│   │   │   ├── cardInputForm.ts          # 카드 번호, 유효기간, CVC를 포함하는 폼 컴포넌트
│   │   │   ├── cardNumberInput/
│   │   │   │   └── cardNumberInput.ts    # 카드 번호 입력 필드
│   │   │   ├── cardExpirationDateInput/
│   │   │   │   └── cardExpirationDateInput.ts  # 유효기간 입력 필드
│   │   │   └── cardCVCInput/
│   │   │       └── cardCVCInput.ts       # CVC 입력 필드
│   │   │
│   │   └── cardPreview/          # 카드 미리보기 영역
│   │       └── cardPreview.ts    # 카드 정보 시각화 (title, description, label, inputs)
```

## 상태 관리

paymentsInputPage는 cardInputForm의 상태를 cardPreview에 반영

- cardInputForm 은 paymentsInputPage의 setState 콜백을 받아 자식들(card~input 컴포넌트들) 상태를 변경

- paymentsInputPage는 state를 cardPreview에 전달
  - cardPreview는 state에 따라 실시간 변경

# 컨벤션

## CSS 작성 방식

- Module CSS
