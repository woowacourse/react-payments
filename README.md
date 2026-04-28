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
