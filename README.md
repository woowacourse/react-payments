# 🎯 기능 요구 사항

## 입력

### 카드 번호

- 사용자의 카드 번호 16자리를 입력받는다.
- 카드 번호가 4로 시작하는 16자리 숫자인 경우, Visa 로고를 출력한다.
- 카드 번호가 51~55로 시작하는 16자리 숫자인 경우, MasterCard 로고를 출력한다.

#### 예외 사항

- 숫자 외의 것을 입력했을 경우

  입력된 문자를 지운다(사용자 입장에서는 입력 X).

  해당 input에 error 표시를 한 후 에러 메시지를 input 하단에 출력한다.

  `숫자만 입력 가능합니다.`

- 4자리를 초과했을 경우

  4자리 뒤의 숫자를 지운다. (사용자 입장에서는 입력되지 않는 것처럼 보인다.)

- 16자리 카드 번호가 아닌 경우

  input의 입력이 완료되고 모든 카드번호 input에 focus가 없는 상태를 전제로 한다.

  채워지지 않은 input에 error 표시를 한 후, 에러 메시지를 input 하단에 출력한다.

  `카드번호는 16자의 숫자여야 합니다.`

### 카드 유효기간

- 카드 유효기간을 월과 연도를 나눠 입력받는다.
- 월은 01~12의 두자리 숫자만 입력 가능하다.
- 년도는 00~99 두자리 숫자만 입력 가능하다.

#### 예외 사항

- 숫자 외의 것을 입력했을 경우

  입력된 문자를 지운다(사용자 입장에서는 입력 X).

  해당 input에 error 표시를 한 후 에러 메시지를 input 하단에 출력한다.

  `숫자만 입력 가능합니다.`

- 2자리를 초과했을 경우

  2자리 뒤의 숫자를 지운다. (사용자 입장에서는 입력되지 않는 것처럼 보인다.)

- 유효한 ‘월’을 입력하지 않았을 경우

  유효한 '월'은 01~12를 초과한 경우를 말한다.
  '01' 미만의 숫자를 입력했을 경우 '01'로 값을 변경시킨다
  '12' 초과의 숫자를 입력했을 경우 '12'로 값을 변경시킨다.  
  ex) '0' 입력 -> '01'로 변경
  ex) '00' 입력 -> '01'로 변경
  ex) '13' 입력 -> '12'로 변경

- 유효기간 '월','연도'를 하나라도 입력하지 않았을 경우

  '월'에 한자리 수를 입력하고 blur한 경우, 앞에 0을 붙여준다.

  '월'과 '연도' 중 하나라도 입력하지 않고 모든 input에 focus를 blur했을 경우를 전제로 한다.

  input 하단에 에러 메세지를 출력한다.

  `유효기간은 4자리(MM/YY) 숫자여야 합니다.`

- 유효기간이 만료된 카드일 경우

  현재 연, 월이 유효 기간의 연, 월보다 최근인 경우를 유효기간이 만료된 카드로 설정한다.

  월과 연도의 input 입력이 완료되고 모든 input에 focus가 없는 상태를 전제로 한다.

  input 하단에 에러 메세지를 출력한다.

  `유효기간이 만료된 카드입니다.`

### 카드 소유자 이름

- 영문자 대문자만 입력 가능하다.
- 소문자로 입력시, 대문자로 변환한다.

#### 예외 사항

- 영여 외의 것을 입력했을 경우

  입력된 문자를 지우고(사용자 입장에서는 입력 X) 에러 메시지를 input 하단에 출력한다.

  `영어만 입력 가능합니다.`

## 실시간 프리뷰 업데이트

- 사용자의 카드 정보 입력에 따라 카드 프리뷰를 동시에 업데이트한다.
- 카드번호가 4로 시작하는 16자리 숫자인 경우, Visa 로고를 출력한다.
- 카드번호가 51~55로 시작하는 16자리 숫자인 경우, MasterCard 로고를 출력한다.
- 카드번호의 세번쨰와 네번째는 '∙'로 변환하여 출력한다.
- 소유자 이름이 특정 넓이를 넘어갈 경우 말줄임표(...)로 축약한다.

# 📂 파일 구조 설명

## 파일 트리

<details>
<summary>(클릭하여 펼치기)</summary>
<div markdown="1">

```
src
 ┣ asset
 ┃ ┣ IcChip.svg
 ┃ ┣ Mastercard.svg
 ┃ ┗ Visa.svg
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ PaymentsFormTitle.tsx
 ┃ ┃ ┗ PaymentsInputField.tsx
 ┃ ┣ style
 ┃ ┃ ┗ FormSection.tsx
 ┃ ┣ CardBrand.tsx
 ┃ ┣ CardInfo.tsx
 ┃ ┣ CardNumbersFormSection.tsx
 ┃ ┣ CardPreview.tsx
 ┃ ┣ ExpirationDateFormSection.tsx
 ┃ ┣ MainPage.tsx
 ┃ ┗ NameFormSection.tsx
 ┣ constants
 ┃ ┣ errorMessage.ts
 ┃ ┣ option.ts
 ┃ ┗ regex.ts
 ┣ stories
 ┃ ┣ assets
 ┃ ┣ CardNumbersFormSection.stories.tsx
 ┃ ┣ CardPreview.stories.tsx
 ┃ ┣ Configure.mdx
 ┃ ┣ ExpirationDateFormSection.stories.tsx
 ┃ ┣ NameFormSection.stories.tsx
 ┃ ┣ PaymentsFormTitle.stories.tsx
 ┃ ┗ PaymentsInputField.stories.tsx
 ┣ types
 ┃ ┗ type.d.ts
 ┣ App.css
 ┣ App.tsx
 ┣ main.tsx
 ┣ reset.css
 ┗ vite-env.d.ts
```

</div>
</details>

## 컴포넌트

- MainPage

  CardPreview와 CardInfo를 가지는 컴포넌트

- PaymentsFormTitle

  title과 subtitle을 갖는 컴포넌트

- PaymentsInputField

  필요한 props를 가지는 input 컴포넌트

- CardBrand

  카드번호 앞자리에 따라 Visa,Mastercard를 구분하는 컴포넌트

- CardInfo

  카드 정보 입력을 가지는 컴포넌트

- CardNumbersFormSection

  카드번호 input 및 title, error message를 가지는 컴포넌트

- ExpirationDateFormSection

카드 유효기간 input 및 title, error message를 가지는 컴포넌트

- NameFormSection

카드 소유자 이름 input 및 title, error message를 가지는 컴포넌트

- CardPreview

  입력한 카드 정보를 실시간으로 미리보기 해주는 컴포넌트
