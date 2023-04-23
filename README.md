![example workflow](https://github.com/hyeryongchoi/react-payments/actions/workflows/deploy.yml/badge.svg)

<h1 align="middle">  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="200px"></h1>
<h2 align="middle">Level2 - 페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>

---

## [💳 페이먼츠 페이지 링크](https://hyeryongchoi.github.io/react-payments/)

<img width="400px" alt="페이먼츠 페이지 실행 화면" src="https://user-images.githubusercontent.com/24777828/233854470-be2d6bdf-b598-4062-bad6-bc90f022cac1.gif">
<img width="400px" alt="페이먼츠 404 페이지" src="https://user-images.githubusercontent.com/24777828/233854475-1fb5e32f-a598-46e8-97c0-9231050fb80a.gif">

## 📍 학습 목표

- 재사용 가능한 단위의 컴포넌트에 대한 기준 정의
- 스토리북을 이용해 컴포넌트 단위가 가지는 스토리에 대해 문서화하여 표현
- 컴포넌트 단위로, 어떤 스토리가 가능한지 이야기하기

## 🚀 Getting Started

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

✔️ `모바일 타겟`의 웹 앱을 구현하며 컴포넌트가 가지는 의미와 `편리한 모바일 UI/UX`에 대해 고민해봅니다.  
✔️ 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.  
✔️ `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.  
✔️ `재사용 가능한 Component`를 직접 작성하고 사용합니다.  
✔️ React `Hooks API`를 활용합니다.

## 🚀 Step1 - Component-Driven Development

### 🙏 페어(페어프로그래밍)

<table>
  <tr>
    <td align="center" width="150px">
      <a href="https://github.com/HyeryongChoi" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/24777828?v=4" alt="첵스(최혜령) 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/kyw0716" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/77326660?v=4" alt="센트(김영우) 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/HyeryongChoi" target="_blank">
        첵스(최혜령)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/kyw0716" target="_blank">
        센트(김영우)
      </a>
    </td>
  </tr>
</table>

### 📝 필수 요구사항

**카드 등록을 위한 form을 CDD로 구현한다.**

- Storybook으로 UI컴포넌트 렌더링
- REQUIRMENTS.md에 요구 사항 도출
- 재사용 가능한 Component 작성

### ✅ 프로그래밍 요구사항

이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

#### **Readability**

- cusom hook을 이용해 재사용 가능한 기능을 추출한다.
- 공통적으로 사용되는 UI 컴포넌트를 재사용 가능하게 구현한다.

#### **Reusability**

- 각 스토리에 명확한 이름을 지정하고, 스토리 이름을 통해 컴포넌트 사용 사례를 쉽게 이해할 수 있도록 한다.
- 변동 가능한 값에 대해 사용자가 직접 조작해볼 수 있게 하여 컴포넌트를 더욱 쉽게 이해할 수 있도록 한다.

### 🏗 프로그램 구조도

<img width="600px" alt="프로그램 구조도" src="https://user-images.githubusercontent.com/24777828/233303190-6100c05e-e8a9-42aa-905a-57c191bc1641.png">

### 🗂 디렉터리 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂input
 ┃ ┃ ┣ 📜CardNumberInput.tsx
 ┃ ┃ ┣ 📜ExpirationDateInput.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜InputWrapper.tsx
 ┃ ┃ ┣ 📜OwnerNameInput.tsx
 ┃ ┃ ┣ 📜PasswordInput.tsx
 ┃ ┃ ┗ 📜SecurityCodeInput.tsx
 ┃ ┣ 📜CardListContainer.tsx
 ┃ ┣ 📜CardRegisterForm.tsx
 ┃ ┗ 📜CardViewer.tsx
 ┣ 📂constants
 ┃ ┗ 📜index.ts
 ┣ 📂domains
 ┃ ┗ 📜cardDataService.ts
 ┣ 📂hooks
 ┃ ┗ 📜useCardRegisterFormValidation.ts
 ┣ 📂layout
 ┃ ┣ 📜BackButton.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📂pages
 ┃ ┣ 📜Main.tsx
 ┃ ┣ 📜NotFound.tsx
 ┃ ┗ 📜Register.tsx
 ┣ 📂stories
 ┃ ┣ 📂Form
 ┃ ┃ ┗ 📜CardRegisterForm.stories.tsx
 ┃ ┗ 📂Input
 ┃ ┃ ┣ 📜CardNumberInput.stories.tsx
 ┃ ┃ ┣ 📜ExpirationDateInput.stories.tsx
 ┃ ┃ ┣ 📜OwnerNameInput.stories.tsx
 ┃ ┃ ┣ 📜PasswordInput.stories.tsx
 ┃ ┃ ┗ 📜SecurityCodeInput.stories.tsx
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜validator.ts
 ┣ 📜App.tsx
 ┣ 📜GlobalStyle.ts
 ┣ 📜cardInputValidator.ts
 ┗ 📜index.tsx
```
