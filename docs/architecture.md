
# Page

> formValue와 (step2에서 추가될 step..)을 관리함.

## props

- x

## state

- formValue: {
  cardNumbers: {value: ["","","",""]},
  ExpirationPeriod: {value: ["",""]},
  cvcNumbers: {value: ""},
  cardBrand: {value: "" (visa | master | local)},

}

## functions

- handleFormValueUpdate: (field, value) => void;

## view

- <div>
    <main>
      <Card />
      <form>
         <CardNumbersField />
         <ExpirationPeriodField />
         <CVCField />
      </form>
    </main>
  </div>

---

# Form

> 각 도메인 필드를 조합함.

## props

- { handleFormValueUpdate: (field, value) => void; }

## state

- x

## functions

- x

## view

- <form>
    <CardNumbersField />
    <ExpirationPeriodField />
    <CVCField />
  </form>

---

# Card

> formValue(카드 번호, 유효기간, 카드 브랜드)를 시각적으로 보여줌.

## props

- { cardNumbers, expirationPeriod, cardBrand }

## state

- x

## functions

- x

## view

- <div>
   <div>
      <div></div>
      <img />
   </div>
   <div>
      <span>{}</span> * 4
   </div>
   <div>
      <span>{}</span> * 2 (사이에 슬래쉬로)
   </div>
</div>

---

# CardNumbersField

> 카드 번호 도메인 로직을 포함한 input 입력, 유효성 검사, formValue 업데이트를 진행함.

## props

- { handleFormValueUpdate: (field, value) => void; }

## state

- error, errorMessage

## functions

- handleFieldChange: 숫자 입력 외 방어, handleFomValueUpdate 호출

## view

- <Field>
   <fieldset>
      <legend></legend>
      <input />
      <input />
      <input />
      <input />
   </fieldset>
  </Field>

---

# ExpirationPeriodField

> 유효기간 도메인 로직을 포함한 input 입력, 유효성 검사, formValue 업데이트를 진행함.

## props

- { handleFormValueUpdate: (field, value) => void; }

## state

- error, errorMessage

## functions

- handleFieldChange: 숫자 입력 외 방어, handleFomValueUpdate 호출

## view

- <Field>
   <fieldset>
      <legend></legend>
      <input />
      <input />
   </fieldset>
  </Field>

---

# CVCField

> CVC 도메인 로직을 포함한 input 입력, 유효성 검사, formValue 업데이트를 진행함.

## props

- { handleFormValueUpdate: (field, value) => void; }

## state

- error, errorMessage

## functions

- handleFieldChange: 숫자 입력 외 방어, handleFomValueUpdate 호출

## view

- <Field>
   <label></label>
   <input />
  </Field>

---

# Field(공통)

> 라벨, 에러메시지 레이아웃

## props

- { title: string; caption: string; error: boolean; errorMessage: string; children: React.Node??; }

## state

- x

## functions

- x

## view

- <>
  <Title>
  <Caption>
  {children}
  <span>{errorMessage}</span>
  </>

---

# Input(공통)

> 스타일 위주 구현

## props

- extends InputHTMLAttributes<HTMLInputElement>
- placeholder, value, type, name, onChange, ...

## state

- x

## functions

- x

## view

- <input />

---

# Title

> Field의 Title 컴포넌트. 스타일만 담당함.

## props

- { children }

## state

- x

## functions

- x

## view

- <h3>{children}</h3>

---

# Caption

> Field의 Caption 컴포넌트. 스타일만 담당함.

## props

- { children }

## state

- x

## functions

- x

## view

- <span>{children}</span>
