## 기능 목록

### 1단계

1. 카드 등록 기능 구현
2. 등록된 카드 목록을 보여주는 기능 구현
3. 카드 번호 입력기능 구현
   - 숫자만 입력 할 수 있게 제한 ( 숫자가 아닌 값이 들어가면 화면에 보여지지 않게 )
   - 숫자 4개를 입력하면 다음칸으로 넘어가는 기능
   - 마지막 8개 숫자는 보이지 않게 제한
4. 만료일 입력기능 구현
   - 숫자만 입력 할 수 있게 제한 ( 숫자가 아닌 값이 들어가면 화면에 보여지지 않게 )
   - 숫자 2개를 입력하면 다음칸으로 넘어가는 기능
5. 소유자 이름 입력기능 구현
   - 0부터 30자 까지만 입력할 수 있게 제한
   - 문자만 입력할 수 있게 제한
6. 보안코드 입력기능 구현
   - 숫자만 입력 할 수 있게 제한 ( 숫자가 아닌 값이 들어가면 화면에 보여지지 않게 )
   - 3자리만 입력할 수 있게 제한
7. 비밀번호 입력기능 구현
   - 숫자만 입력 할 수 있게 제한 ( 숫자가 아닌 값이 들어가면 화면에 보여지지 않게 )
   - 숫자 1개를 입력하면 다음칸으로 넘어가는 기능
8. 입력한 정보가 카드에 반영되는 기능 구현 (입력될 때마다)
9. 필수로 입력되어야하는 값이 입력되지 않았을 때 "다음"버튼을 보이지 않게
10. 필수 입력값이 유효성겁사를 통과했을 때 통과되었다는 체크 표시

### 2단계

11. 카드 회사를 선택할 수 있다.

- 카드 등록 페이지에 들어오면 bottom sheet가 하단에 뜨고, 카드 회사 로고를 누르면 bottom sheet가 닫힌다.
- 선택한 카드 회사에 따라 미리보기 카드 이미지가 바뀐다. (카드의 색이 바뀜.)

12. 카드의 이름을 지정할 수 있다.

- 카드 등록 form에서 다음 버튼을 누르면, '카드등록 완료 페이지'로 라우팅된다.
- 카드 이름 input에 값을 입력한 다음 확인 버튼을 누른다.
- 카드 이름을 당장 입력하고 싶지 않다면 다음 버튼을 누른다.

13. 카드 목록 페이지에서 등록된 카드들을 조회할 수 있다.

- 카드의 이름, 카드 회사(+ 카드 색깔)이 추가로 반영되어야 한다.

### 3단계

14. 카드 회사를 선택하는 모달을 npm 라이브러리 publish 하고, import 하여 사용한다.
15. '카드를 등록 중입니다' 스피너를 추가한다.

### 테스트

1. storybook을 이용하여 CDD(컴포넌트 주도 개발)을 따른다.
2. 문서로서 storybook을 고도화하기 위해 리팩터링한다.
   - 각 스토리에 명확한 이름을 지정하고, 스토리 이름을 통해 컴포넌트의 사용 사례를 쉽게 이해할 수 있도록 한다.
   - 변동 가능한 값에 대해 사용자가 직접 조작해볼 수 있게 하여 컴포넌트를 더욱 쉽게 이해할 수 있도록 한다.

## 디렉토리 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┣ 📜Input.stories.tsx
 ┃ ┃ ┃ ┗ 📜Input.tsx
 ┃ ┃ ┣ 📂InputBox
 ┃ ┃ ┃ ┣ 📜InputBox.stories.tsx
 ┃ ┃ ┃ ┗ 📜InputBox.tsx
 ┃ ┃ ┣ 📂Label
 ┃ ┃ ┃ ┣ 📜Label.stories.tsx
 ┃ ┃ ┃ ┗ 📜Label.tsx
 ┃ ┃ ┣ 📜BackButton.tsx
 ┃ ┃ ┣ 📜CardItem.tsx
 ┃ ┃ ┣ 📜CardPreview.tsx
 ┃ ┃ ┣ 📜ErrorMessage.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📜CardCompanyList.tsx
 ┃ ┣ 📜CardCompanySelectModal.tsx
 ┃ ┣ 📜CardRegisterForm.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂constants
 ┃ ┣ 📜cardCompany.ts
 ┃ ┣ 📜errors.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜inputInfo.ts
 ┃ ┗ 📜path.ts
 ┣ 📂contexts
 ┃ ┗ 📜cardPreviewInfo.tsx
 ┣ 📂data
 ┃ ┗ 📜localStorage.ts
 ┣ 📂hooks
 ┃ ┣ 📜useCardRegisterForm.ts
 ┃ ┣ 📜useClickEvent.ts
 ┃ ┗ 📜useInput.ts
 ┣ 📂pages
 ┃ ┣ 📜AddCard.tsx
 ┃ ┣ 📜AddCardName.tsx
 ┃ ┣ 📜CardList.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂styles
 ┃ ┣ 📜global-style.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂type
 ┃ ┣ 📜card.ts
 ┃ ┗ 📜input.ts
 ┣ 📂utils
 ┃ ┣ 📜cardInfoFormat.ts
 ┃ ┣ 📜checkInputValidation.ts
 ┃ ┣ 📜checkType.ts
 ┃ ┗ 📜localStorage.ts
 ┣ 📂validation
 ┃ ┗ 📜cardRegister.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```
