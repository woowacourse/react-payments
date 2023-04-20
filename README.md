<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">Level2 - 페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

✔️ `모바일 타겟`의 웹 앱을 구현하며 컴포넌트가 가지는 의미와 `편리한 모바일 UI/UX`에 대해 고민해봅니다.  
✔️ 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.  
✔️ `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.  
✔️ `재사용 가능한 Component`를 직접 작성하고 사용합니다.  
✔️ React `Hooks API`를 활용합니다.

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/react-payments/issues)에 등록해주세요.

## [페이지 예시화면](https://chsua.github.io/react-payments/)

## 파일 구조

```
src
 ┣ component
 ┃ ┣ CardInputPage
 ┃ ┃ ┣ CardInputForm
 ┃ ┃ ┃ ┣ CardInputForm.tsx
 ┃ ┃ ┃ ┗ cardInputForm.css
 ┃ ┃ ┃
 ┃ ┃ ┣ InputBoxCardNumber
 ┃ ┃ ┃ ┣ CardNumber.tsx
 ┃ ┃ ┃ ┣ InputBoxCardNumber.tsx
 ┃ ┃ ┃ ┣ cardNumber.css
 ┃ ┃ ┃ ┗ inputBoxCardNumber.css
 ┃ ┃ ┃
 ┃ ┃ ┣ InputBoxExpirationDate
 ┃ ┃ ┃ ┣ InputBoxExpirationDate.tsx
 ┃ ┃ ┃ ┗ inputBoxExpirationDate.css
 ┃ ┃ ┃
 ┃ ┃ ┣ InputBoxOwner
 ┃ ┃ ┃ ┣ InputBoxOwner.tsx
 ┃ ┃ ┃ ┗ inputBoxOwner.css
 ┃ ┃ ┃
 ┃ ┃ ┣ InputBoxPassword
 ┃ ┃ ┃ ┣ CardPassword.tsx
 ┃ ┃ ┃ ┣ InputBoxPassword.tsx
 ┃ ┃ ┃ ┣ cardPassword.css
 ┃ ┃ ┃ ┗ inputBoxPassword.css
 ┃ ┃ ┃
 ┃ ┃ ┣ InputBoxSecurityCode
 ┃ ┃ ┃ ┣ InputBoxSecurityCode.tsx
 ┃ ┃ ┃ ┗ inputBoxSecurityCode.css
 ┃ ┃ ┃
 ┃ ┃ ┣ CardInputPage.tsx
 ┃ ┃ ┗ cardInputPage.css
 ┃ ┃
 ┃ ┣ CardListPage
 ┃ ┃ ┣ AddCardButton
 ┃ ┃ ┃ ┣ AddCardButton.tsx
 ┃ ┃ ┃ ┗ addCardButton.css
 ┃ ┃ ┃
 ┃ ┃ ┣ CardList
 ┃ ┃ ┃ ┣ CardList.tsx
 ┃ ┃ ┃ ┗ cardList.css
 ┃ ┃ ┃
 ┃ ┃ ┣ CardListPage.tsx
 ┃ ┃ ┗ cardListPage.css
 ┃ ┃
 ┃ ┗ common
 ┃ ┃ ┣ Button.module.css
 ┃ ┃ ┣ Button.tsx
 ┃ ┃ ┣ CardPreview.module.css
 ┃ ┃ ┣ CardPreview.tsx
 ┃ ┃ ┣ Input.module.css
 ┃ ┃ ┗ Input.tsx
 ┃ ┃
 ┣ stories
 ┃ ┣ Button.stories.ts
 ┃ ┣ Button.tsx
 ┃ ┣ CardInputForm.stories.tsx
 ┃ ┣ CardNumber.stories.tsx
 ┃ ┣ CardPreview.stories.tsx
 ┃ ┣ Header.stories.ts
 ┃ ┣ Header.tsx
 ┃ ┣ Input.stories.tsx
 ┃ ┣ InputBoxCardNumber.stories.tsx
 ┃ ┣ InputBoxExpirationDate.stories.tsx
 ┃ ┣ InputBoxOwner.stories.tsx
 ┃ ┣ InputBoxPassword.stories.tsx
 ┃ ┣ InputBoxSecurityCode.stories.tsx
 ┃ ┣ Introduction.mdx
 ┃ ┣ Page.stories.ts
 ┃ ┣ Page.tsx
 ┃ ┣ button.css
 ┃ ┣ header.css
 ┃ ┗ page.css
 ┃
 ┣ style
 ┃ ┣ palette.css
 ┃ ┗ reset.css
 ┃
 ┣ validation
 ┃ ┣ ExpirationDate.ts
 ┃ ┣ cardNumber.ts
 ┃ ┣ password.ts
 ┃ ┗ securityNumber.ts
 ┃
 ┣ App.css
 ┣ App.tsx
 ┣ index.css
 ┣ index.js
 ┣ index.tsx
 ┗ react-app-env.d.ts
```
