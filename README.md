# react-payments

<details> 
<summary>
Step1
</summary>

## 🎯 구현 기능 목록

### 카드 번호 입력 및 식별

- [x] 카드 번호를 입력할 수 있다.
  - [x] 입력은 숫자만 가능하다.
    - [x] 0~9만 가능
  - [x] 유효하지 않은 번호 입력 시 피드백을 제공한다.
  - [x] 카드 번호를 실시간으로 파악한다.
- [x] 사용자가 입력하는 카드 번호에 따라 카드를 식별할 수 있다.
  - Visa: 4로 시작하는 16자리 숫자
  - MasterCard: 51~55로 시작하는 16자리 숫자

### 카드 유효기간 입력

- [x] 월 입력
  - [x] 2자리 수 입력
  - [x] 01 ~ 12 범위내만 가능
- [x] 년도 입력
  - [x] 2자리 수 입력
  - [x] 현재 년도 이후만 가능
    - [x] ex) 25년이므로 25이상만 가능
- [x] 입력 제한을 두어 사용자가 숫자만 입력할 수 있도록 한다.
  - [x] 유효하지 않은 번호 입력 시 피드백을 제공한다.
  - [x] 입력은 숫자만 가능하다.
    - [x] 0~9만 가능

### 실시간 프리뷰 업데이트

- [x] 사용자의 카드 정보 입력에 따라 카드 프리뷰를 동시에 업데이트한다.
  - [x] Visa 해당 브랜드의 로고를 UI에 표시한다.
  - [x] MasterCard 해당 브랜드의 로고를 UI에 표시한다.
  - [x] 뒤에 8자리 숫자는 암호화해서 카드 프리뷰에 표시한다. ex) `1234 1234 **** ****`

### 주의 사항

- 사용자의 입력 input에 포커스를 자동으로 이동하는 부분을 1단계에서 고려하지 않는다.

### 💡 카드 브랜드 구분 로직 (Visa / MasterCard)

- Visa: 4로 시작하는 16자리 숫자
- MasterCard: 51~55로 시작하는 16자리 숫자

### 컴포넌트 구조 및 상태

- 공통 컴포넌트
  - Input(common)
- 전체 레이아웃 컨테이너
  - 카드 UI
    - form 컴포넌트의 카드 번호와 같은 상태이므로 props로 받아서 보여준다.
    - 로고 이미지
    - 카드 번호
    - 카드 유효기간
  - form 컴포넌트
    - 카드 번호
      - title
      - description
      - label
      - Input(common)
      - error message
    - 카드 유효기간
      - title
      - description
      - label
      - Input(common)
      - error message
    - cvc 번호
      - title
      - label
      - Input(common)
      - error message

### 전체 레이아웃 컨테이너 컴포넌트에 필요한 상태

- 카드 번호 16자리
  - label
  - Input(common) 4개
- 카드 유효기간

  - 월 2자리
    - label
    - Input(common)
  - 년도 2자리
    - label
    - Input(common)

- cvc번호
  - form 컴포넌트에서 formData로 가져올 수 있기 때문이다.
  - 카드 프리뷰 에는 필요하지 않으나 errorMessage를 전달하기 위해 상위에서 전달

### 카드 UI 만들 때 필요한 상태 (상위에서 전달 받음)

- 카드 번호 16자리
- 카드 유효기간

## 폴더 구조

- 컴포넌트
- UI빼고 전부다 도메인?

</details>
