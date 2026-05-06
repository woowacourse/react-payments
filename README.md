# 페이먼츠 미션

우아한테크코스 레벨2 **페이먼츠** 미션 저장소이다.

이 저장소는 일부러 비어 있다. 크루는 프로젝트 부트스트랩부터 라이브러리 선택·설치·설정까지 직접 수행한다. "왜 이 라이브러리를 골랐는가"가 곧 학습이다.

## 프로젝트 초기화

[React — Build a React app from scratch](https://react.dev/learn/build-a-react-app-from-scratch)

```sh
npm create vite@latest my-app -- --template react-ts
npm install
npm run dev
```

## 공통

### 컨벤션

폴더명: camelCase
컴포넌트 파일명: PascalCase

### tools

prettier, eslint

### 버전

package 관리: npm
node: 22.22.2

### 기술 스택

- design libary: CSS Module
  - 디자인 담당인 css와 js를 완전히 분리하기 위해서
  - 현재 미션에서 속성명이 축약형인 것보다 표준 css 속성 사용을 하기 위해서

### 폴더 구조

```
/src
  /core
    /components
      /input
      /creditCard
      /formGroup
    /hooks
      /useOutside
   /features
     /payments
        /components
          /CVC
          /카드번호
          /유효기간
        /hooks
          /usePayments.tsx
        /api
          /degueAPI.tsx
          /asdsad
  /pages
    /payments
```

## 기능 구현 사항

- 카드번호
  - [ ] 카드 번호 입력을 실시간으로 파악하여 visa 혹은 mastercard 를 구분한다
  - [ ] 카드 번호 입력시 숫자만 입력 가능하게 해야 한다
  - [ ] 유효하지 않은 번호 입력시 실기간 피드백을 제공한다
  - 카드사 식별 번호 구분 규칙
    - 카드 브랜드 구분 로직 (Visa / MasterCard)
      - Visa: 4로 시작하는 16자리 숫자
      - MasterCard: 51~55로 시작하는 16자리 숫자

- 카드 유효기간
  - [ ] 카드 유효 기간에는 숫자만 입력 가능해야한다
  - [ ] 월, 년도 범위내에만 숫자만 입력이 가능해야한다
  - [ ] 유효하지 않은 월 입력시 실기간 피드백을 제공한다
  - [ ] 유효하지 않은 년 입력시 실기간 피드백을 제공한다
    - 오늘 이후 날짜만 유효기간으로 인정한다

- CVC
  - [ ] 세자리 숫자만 입력 가능하게 해야한다

- 실시간 카드 프리뷰
  - [ ] 사용자 입력에 따라 카드번호와 카드 유효기간이 프리뷰에 바로 보인다
  - [ ] 구분한 카드 branch에 따라 이미지를 보여준다
  - [ ] 월이 전부 입력될시 / 를 보여준다
  - [ ] 카드번호 9자리 부터는 · 으로 마스킹 처리한다
