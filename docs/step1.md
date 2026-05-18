## 기능 목록

1. 인풋 컴포넌트
   - value
   - focus ui 등 a11y
   - error ui

2. 필드 컴포넌트(cardNumbers, expirationPeriod, cvc)
   - 라벨
   - 에러 메시지
   1. cardNumbers
      - required
      - number only

   2. expirationPeriod
      - required
      - number only
      - min/max: 2자릿수
      - year validate: 현재 기준 5년까지
      - month validate: 01-12

   3. cvc
      - required
      - number only
      - min/max: 3자릿수

3. 폼섹션 컴포넌트
   - 타이틀
   - 캡션
   - children

4. 폼 컴포넌트
   - formData: [{cardBrand}, ...]
   - validate

5. 페이지 컴포넌트
   - 레이아웃

6. 카드 컴포넌트
   - 카드 번호
   - 유효기간
   - 카드 브랜드

## ✅ 프로그래밍 요구사항

> 이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

### Test

- `Storybook`을 이용하여, 컴포넌트의 다양한 상태를 테스트한다.

### Readability

- 에러 처리 로직을 명확하게 작성하여 코드의 가독성을 높인다.

### Reusability

- 반복되는 컴포넌트와 스타일은 분리하여 재사용성을 높인다.

### Library

- 스타일링에는 emotion을 사용한다.
- 폼 라이브러리(react-hook-form, formik 등)는 사용하지 않는다.

## 카드사 식별 번호 구분 규칙

Visa 카드와 Master 카드의 앞 번호의 규칙은 아래로 통일해서 진행한다.

### 💡 카드 브랜드 구분 로직 (Visa / MasterCard)

- Visa: 4로 시작하는 16자리 숫자
- MasterCard: 51~55로 시작하는 16자리 숫자

---

```
페이지 {
    formData

    return (
        카드
        폼
    )
}

폼 {
    step

    return (
        <form>
            if (step === 1) {
                폼필드 ...
            }
        </form>
    )
}

폼필드 {
    input 입력 -> validate -> step += 1
}
```
