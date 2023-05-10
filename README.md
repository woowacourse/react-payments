![example workflow](https://github.com/hyeryongchoi/react-payments/actions/workflows/deploy.yml/badge.svg)

<h1 align="middle">  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="200px"></h1>
<h2 align="middle">Level2 - 페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>

---

## [💳 페이먼츠 페이지 링크](https://hozzijeong.github.io/react-payments/) | [📕 스토리북 페이지 링크](https://644a4c8d4797af3808a9f2a9-mejsmplrqb.chromatic.com/?path=/docs/button--docs) | [👀 모달 라이브러리](https://www.npmjs.com/package/@hozzijeong/react-modal)


## 📍 학습 목표

- 재사용 가능한 단위의 컴포넌트에 대한 기준 정의
- 스토리북을 이용해 컴포넌트 단위가 가지는 스토리에 대해 문서화하여 표현
- 컴포넌트 단위로, 어떤 스토리가 가능한지 이야기하기

## 🚀 Getting Started

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

- `모바일 타겟`의 웹 앱을 구현하며 컴포넌트가 가지는 의미와 `편리한 모바일 UI/UX`에 대해 고민해봅니다.
- 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.
- React `Hooks API`를 활용합니다.
- `재사용 가능한 Component`를 직접 작성하고 사용합니다.
- `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.

> TypeScript와 함께 페이먼츠 앱을 개발자를 위한 라이브러리로 출시합니다.

- 라이브러리를 사용하는 개발자에게 친절한 API 문서를 제공합니다.
- 라이브러리를 사용하는 개발자와 코드로 소통합니다.
- 다양한 모듈 대응 케이스를 고민해보고 실제로 NPM에 출시합니다.
- Semantic Versioning이 왜 필요한지 고민해봅니다.

## 🚀 Step1 - Component-Driven Development


### 📝 필수 요구사항

**카드 등록을 위한 form을 CDD로 구현한다.**

- `Storybook`으로 UI컴포넌트 렌더링
- `REQUIRMENTS.md`에 요구 사항 도출
- 재사용 가능한 Component 작성

### ✅ 프로그래밍 요구사항

이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

#### **Readability**

- cusom hook을 이용해 재사용 가능한 기능을 추출한다.
- 공통적으로 사용되는 UI 컴포넌트를 재사용 가능하게 구현한다.

#### **Reusability**

- 각 스토리에 명확한 이름을 지정하고, 스토리 이름을 통해 컴포넌트 사용 사례를 쉽게 이해할 수 있도록 한다.
- 변동 가능한 값에 대해 사용자가 직접 조작해볼 수 있게 하여 컴포넌트를 더욱 쉽게 이해할 수 있도록 한다.

## 🚀 Step2 - Component & State

### 📝 필수 요구사항

**카드 등록 과정에서 발생할 수 있는 여러 스토리를 고려하여 구현한다.**

- 주요 컴포넌트에 대한 `Storybook` 상호 작용 테스트
- `Controlled` & `Uncontrolled Components`에 입각하여 `Form` 핸들링
- `Context API`를 활용해 전역 상태 관리 및 계층 재구성

### ✅ 프로그래밍 요구사항

이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

#### **Performance**

- react에서 제공하는 hook을 이용하여 성능 최적화를 고려한다.

## 🚀 Step3 - Refactoring & Reusability

### 📝 필수 요구사항 - **재사용과 리팩터링**

- 사용하던 모달을 분리해서 npm으로 배포하고, 그 라이브러리를 직접 `import`해서 사용하기
- 문서로서 스토리북을 고도화하기 위해 리팩터링
- '카드를 등록중입니다' 스피너 추가

### 🗂 디렉터리 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜back-button.png
 ┃ ┣ 📜bc_card.svg
 ┃ ┣ 📜cvc-icon.svg
 ┃ ┣ 📜hana_card.svg
 ┃ ┣ 📜hyundai_card.svg
 ┃ ┣ 📜kakao_bank.svg
 ┃ ┣ 📜kookmin_card.svg
 ┃ ┣ 📜lotte_card.svg
 ┃ ┣ 📜security-icon.svg
 ┃ ┣ 📜sequrity_question.svg
 ┃ ┣ 📜shinhan_card.svg
 ┃ ┣ 📜spinner.png
 ┃ ┗ 📜woori_card.svg
 ┣ 📂components
 ┃ ┣ 📂@common
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📜Button.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📜Card.stories.tsx
 ┃ ┃ ┃ ┣ 📜Card.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜Header.stories.tsx
 ┃ ┃ ┃ ┣ 📜Header.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Spinner
 ┃ ┃ ┃ ┣ 📜Spinner.stories.tsx
 ┃ ┃ ┃ ┣ 📜Spinner.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜ErrorSpan.tsx
 ┃ ┃ ┣ 📜FormLabel.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┗ 📂registerForm
 ┃ ┃ ┣ 📂CardCompany
 ┃ ┃ ┃ ┣ 📜CardCompany.stories.tsx
 ┃ ┃ ┃ ┣ 📜CardCompany.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂CardNumber
 ┃ ┃ ┃ ┣ 📜CardNumber.stories.tsx
 ┃ ┃ ┃ ┣ 📜CardNumber.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂CardPassword
 ┃ ┃ ┃ ┣ 📜CardPassword.stories.tsx
 ┃ ┃ ┃ ┣ 📜CardPassword.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂CardRegisterForm
 ┃ ┃ ┃ ┣ 📜CardRegisterForm.stories.tsx
 ┃ ┃ ┃ ┣ 📜CardRegisterForm.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂ExpireDate
 ┃ ┃ ┃ ┣ 📜ExpireDate.stories.tsx
 ┃ ┃ ┃ ┣ 📜ExpireDate.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂OwnerNameInput
 ┃ ┃ ┃ ┣ 📜OwnerNameInput.stories.tsx
 ┃ ┃ ┃ ┣ 📜OwnerNameInput.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂SecurityCode
 ┃ ┃ ┃ ┣ 📜SecurityCode.stories.tsx
 ┃ ┃ ┃ ┣ 📜SecurityCode.styles.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┣ 📂context
 ┃ ┗ 📜CardInfoContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAutoFocus.tsx
 ┃ ┣ 📜useCardCompanySelect.tsx
 ┃ ┣ 📜useCardInfoInput.tsx
 ┃ ┣ 📜useCardList.tsx
 ┃ ┣ 📜useHeaderState.tsx
 ┃ ┣ 📜useNavigateCardInfoStep.tsx
 ┃ ┗ 📜useRegisterCardInfo.tsx
 ┣ 📂interfaces
 ┃ ┗ 📜index.ts
 ┣ 📂pages
 ┃ ┣ 📂CardList
 ┃ ┃ ┣ 📜CardList.styles.ts
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂CardNickName
 ┃ ┃ ┣ 📜CardNickName.styles.ts
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜CardRegister.tsx
 ┃ ┗ 📜RegisterFinishedCard.tsx
 ┣ 📂routes
 ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.tsx
 ┃ ┣ 📜animations.ts
 ┃ ┗ 📜theme.tsx
 ┣ 📂utils
 ┃ ┣ 📜constant.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜localStorage.ts
 ┃ ┣ 📜regexp.ts
 ┃ ┗ 📜validation.ts
 ┣ 📜index.tsx
 ┣ 📜react-app.env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```