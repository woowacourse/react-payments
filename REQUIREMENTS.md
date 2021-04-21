# 🚀 페이먼츠 미션

## Step 1 필수 요구사항 기능 구현 목록

### 1. 카드 추가 화면

1. 카드사 선택

   - 카드 이미지를 선택하여 카드사를 선택할 수 있다.
     ![카드 이미지 예시](https://imgur.com/lmmMtUr.png)

   - 입력된 값이 실시간으로 카드 이미지에 반영된다.

2. 카드 번호 입력

   - `<input type="text" placeholder="" minlength="15" maxlength="16" required>`

   - 유저가 숫자외의 문자를 입력한 경우는 validation을 통해 state를 갱신하지 않는다.

   - valid한 state 형태 예시: 1111-2222-3333-4444

   - 4개의 숫자가 입력되면 '-'가 state에 추가된다.

   - state가 'xxxx-xxxx-' 이면 이후 입력은

     - 마스킹된 값(\*)으로 표시된다.
     - (심화) 가상키보드로만 할 수 있다.

3. 만료일 입력:

   - `<input type="text" placeholder="MM/YY" minlength="4" maxlength="4" required>`

   - 유저가 숫자외의 문자를 입력한 경우는 validation을 통해 state를 갱신하지 않는다.

   - valid한 state 형태 예시: 04/21

   - 2개의 숫자가 입력되면 state에 '/'가 추가된다.

4. 카드 소유자 이름(**선택**) 입력

   - `<input type="text" minlength="0" maxlength="30"/>`

   - 알파벳 및 공백문자 외의 문자가 입력되면 validation을 통해 state를 갱신하지 않는다.

   - 알파벳 소문자를 입력하면 자동으로 알파벳 대문자로 변환하여 state를 갱신한다

   - valid한 state형태 예시: DONGHEE KIM

   - state의 length를 우측 상단에 표시한다: {state.length}/30

5. 보안 코드(CVC/CVV): 3 ~ 4글자

   - `<input type="password" minlength="3" maxlength="4" required/>`

   - 유저가 숫자외의 문자를 입력한 경우는 validation을 통해 state를 갱신하지 않는다.

   - valid한 state형태 예시: 345

6. (?): 보안 코드 description

   - (?)을 클릭하여 dialog 형태의 description 창을 열고 닫을 수 있다.

   - dialog에는 x 버튼이 없다.

   - innerText: 카드 뒷면 서명란 끝의 3~4자리 숫자를 입력해주세요

7. 카드 비밀번호

   - 2개의 input으로 구성되어 있다.
   - `<input type="password" minlength="1" maxlength="1" required/>`
   - 유저가 숫자외의 문자를 입력한 경우는 validation을 통해 state를 갱신하지 않는다.
   - valid한 state형태 예시: 1
   - 입력된 카드 비밀번호가 valid하면 다음 input으로 포커스가 이동한다.

8. '다음'버튼

   - '카드 소유자 이름(선택)'을 제외한 모든 입력란이 valid하면 표시된다.

   - 유저가 다음 버튼을 클릭하면 카드 추가 확인 화면으로 이동한다.

#### 입력란 공통사항

- invalid하여도 다음 입력란으로 이동할 수 있다. focus를 강제화 하지 않는다.
- focus-out 되는 시점에 입력란이 invalid하면 border를 변경하여 시각적 효과를 준다.
- validation 항목

  - 카드 번호: 카드 번호 길이(15~16)

  - 만료일

    - 만료일 길이(4)
    - 월: 01~12
    - 연: 현재로부터 최대 5년

  - 보안 코드: 보안 코드 길이(3~4)

  - 카드 비밀번호: 각 카드 비밀번호 길이(1)

### 2. 카드 추가 확인 화면

1. 등록된 카드에 별칭을 부여할 수 있다.
2. '확인'버튼을 누르면
   - 카드 추가 화면의 state가 모두 초기화된다.
   - (step2 구현 예정) 보유카드 목록 화면으로 이동한다.
   - (step2 구현 예정) 보유카드 목록 화면에는 등록된 카드가 표시된다.
