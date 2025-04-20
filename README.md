# react-payments

## 기능 요구사항

### UI

- [x] 카드 프리뷰 UI 구현
- [x] 카드 번호 입력 UI 구현
- [x] 카드 유효기간 입력 UI 구현
- [x] 카드 CVC 번호 입력 UI 구현
- [x] 에러 메시지 UI 구현

### 에러 처리

- [x] 숫자 유효성 검증 구현

### 기능

- [x] 카드 식별 로직 구현
- [x] 입력 값에 따라 카드 프리뷰에 동적으로 추가

## CSS Library

- styled-components

## UI Test

- Storybook

## 할 일 목록

- [x] 컴포넌트 설계
- [x] UI 구현
- [x] 유효성 검증

## 컴포넌트 관계도

```
CardPaymentsPage
├── CardPreview
└── CardInputSection (총 3개의 섹션)
    ├── Title (제목)
    ├── Description (설명)
    ├── Subtitle (부제목)
    ├── CardInputGroup
    │   └── Input (각 섹션에 맞게 조합)
    └── Error (오류 시 메시지)
```
