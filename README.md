<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">Level2 - 페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

## 🚀 Getting Started

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

✔️ `모바일 타겟`의 웹 앱을 구현하며 사용하기 `편리한 모바일 UI/UX`에 대해 고민해봅니다.  
✔️ 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.  
✔️ React `Hooks API`를 활용합니다.  
✔️ `재사용 가능한 Component`를 직접 작성하고 사용합니다.  
✔️ `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.

## 🌎 [데모페이지](https://yungo1846-react-payments.netlify.app/)

<img src="./src/assets/payments2.gif">

## 📝 Requirements

### 공통 요구사항

- [x] `Storybook` 상호 작용 테스트

## 🙌 Step1

### 메인 페이지

- [x] 메인 페이지는 보유카드 페이지이다.
- [x] [카드 추가 버튼]을 눌렀을 때, 카드 추가 페이지로 이동한다.

### 카드 추가 페이지

- [x] 사용자에게 카드 번호, 만료일, 카드 소유자 이름, 보안 코드, 카드 비밀번호를 입력받는다.
  - [x] 카드 번호 (4n+1)번째 숫자 작성시 (-)를 자동으로 넣어준다.
  - [x] 카드 번호를 8자리 입력하면, 카드 종류 선택 모달을 띄운다.
  - [x] 만료일 입력시, (/)를 자동으로 넣어준다.
  - [x] 카드 소유자 이름을 입력하면 이름 길이를 화면에 실시간으로 보여준다.
  - [x] 카드 소유자 이름을 입력하지 않으면 빈 문자열을 넣는다.
  - [x] 카드 번호 9자리부터, 보안 코드, 카드 비밀번호는 masking 처리한다.
- [x] 사용자 입력을 받으면 즉시 카드에 반영된다.
- [x] 보안 코드 옆 물음표 아이콘에 마우스를 올리면, 보안 코드 위치를 보여준다.

### 카드 추가 완료 페이지

- [x] 카드 등록 완료 페이지에서 카드 이름을 입력받는다.

### 공통

- [x] [이전 버튼], [다음 버튼]을 누르면 원하는 페이지로 갈 수 있다.
- [x] 현재 페이지 이름을 헤더에 출력한다.

## 🥦 step2

### 메인 페이지

- [x] 카드 등록이 완료된 카드들을 보여준다.
- [x] 카드를 누르면 수정과 삭제 버튼이 보여진다.
  - [x] 수정 버튼을 누르면 카드의 별칭을 수정할 수 있다.
  - [x] 삭제 버튼을 누르면 카드를 삭제할 수 있다.

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/react-payments/issues)에 등록해주세요.
