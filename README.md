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

<br>
<br>

## [페이지 예시화면](https://chsua.github.io/react-payments/)

<br>

# 2단계

## 파일 구조

```
📦src
 ┣ 📂asset : svg 모음
 ┃
 ┣ 📂component
 ┃ ┣ 📂CardInputPage : 카드정보 입력 페이지
 ┃ ┃ ┣ 📂CardInputForm : 카드정보 입력폼
 ┃ ┃ ┣ 📂InputBoxCardNumber : 입력폼 내 카드번호 입력칸
 ┃ ┃ ┣ 📂InputBoxExpirationDate : 입력폼 내 카드 만료일 입력칸
 ┃ ┃ ┣ 📂InputBoxOwner : 입력폼 내 카드 소유주 입력칸
 ┃ ┃ ┣ 📂InputBoxPassword : 입력폼 내 카드 비밀번호 입력칸
 ┃ ┃ ┗ 📂InputBoxSecurityCode : 입력폼 내 카드 보안코드 입력칸
 ┃ ┃
 ┃ ┣ 📂CardListPage : 카드 목록 페이지
 ┃ ┃ ┣ 📂AddCardButton : 카드 추가 버튼
 ┃ ┃ ┣ 📂CardList : 카드 목록
 ┃ ┃
 ┃ ┣ 📂CardNickInputPage : 카드별칭 입력 페이지
 ┃ ┃ ┣ 📂InputBoxNick: 카드 별칭 입력칸
 ┃ ┃
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┃
 ┃ ┃ ┣ 📜CardCoButton.tsx
 ┃ ┃ ┣ 📜CardCoModal.tsx
 ┃ ┃ ┃
 ┃ ┃ ┣ 📜CardPreview.tsx
 ┃ ┃ ┃
 ┃ ┃ ┣ 📜button.css
 ┃ ┃ ┣ 📜cardCoButton.css
 ┃ ┃ ┣ 📜cardCoModal.css
 ┃ ┃ ┣ 📜cardPreview.css
 ┃ ┃ ┗ 📜input.css
 ┃ ┃
 ┣ 📂stories
 ┃ ┣ 📂CardInputPage
 ┃ ┃ ┣ 📜CardInputForm.stories.tsx
 ┃ ┃ ┣ 📜CardNumber.stories.tsx
 ┃ ┃ ┣ 📜InputBoxCardNumber.stories.tsx
 ┃ ┃ ┣ 📜InputBoxExpirationDate.stories.tsx
 ┃ ┃ ┣ 📜InputBoxOwner.stories.tsx
 ┃ ┃ ┣ 📜InputBoxPassword.stories.tsx
 ┃ ┃ ┗ 📜InputBoxSecurityCode.stories.tsx
 ┃ ┃
 ┃ ┣ 📂CardListPage
 ┃ ┃ ┗ 📜CardListPage.stories.tsx
 ┃ ┃
 ┃ ┣ 📂CardNickInputPage
 ┃ ┃ ┣ 📜CardNickInputPage.stories.tsx
 ┃ ┃ ┗ 📜InputBoxNick.stories.tsx
 ┃ ┃
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📜CardCoButton.stories.tsx
 ┃ ┃ ┣ 📜CardCoModal.stories.tsx
 ┃ ┃ ┣ 📜CardPreview.stories.tsx
 ┃ ┃ ┗ 📜Input.stories.tsx
 ┃ ┃
 ┣ 📂style
 ┃ ┣ 📜palette.css
 ┃ ┗ 📜reset.css
 ┃
 ┣ 📂util
 ┃ ┣ 📜colorMatch.ts
 ┃ ┣ 📜getCardCoIcon.tsx
 ┃ ┗ 📜trans.ts
 ┃
 ┣ 📂validation
 ┃ ┣ 📜ExpirationDate.ts
 ┃ ┣ 📜cardOwner.ts
 ┃ ┗ 📜number.ts
 ┃
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜CONSTANT.ts
 ┣ 📜cardData.ts
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜type.ts
```
