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

# 구현할 기능 목록
## 환경설정
- 빌드 도구 (Vite)
- CSS 스타일링 라이브러리 (emotion)
- react 설정
- JS

## 카드 UI
- 브랜드 검증
  - 카드번호 1번째 폼에 따라 visa or master 표시
- 카드번호 3번째 폼부터는 **** 로 표시
- 월 입력 시 MM/ 표시
- 연 입력 시 MM/YY 표시

## 카드 번호 입력 컴포넌트
- 카드번호 검증

## 유효기간 입력 컴포넌트
- 월 검증
- 연 검증

## CVC 입력 컴포넌트
- CVC 검증

## Input 폼
- Number 검증
- 에러 체크 기능
  - 에러 발생 시 테두리 빨간색으로 변경
  - 에러 발생 시 하단에 에러 메시지 표시 필요

## 전체 앱
- 상태 관리
  - 카드번호
  - 유효기간

## StoryBook 테스트
- 개발 중 UI 확인용으로 간단하게 사용
- 기능 개발 완료 후 목 데이터로 테스트 코드 작성

## 구조 관련 하고 싶은 것
- 3개의 반복되는 Section 별로 공통 컴포넌트를 만들어 사용하고 싶다.