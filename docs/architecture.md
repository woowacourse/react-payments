# Input(공통)

> 스타일 위주 구현

## props

- extends InputHTMLAttributes<HTMLInputElement> { error: boolean; }
- placeholder, value, type, name, onChange, ...

## state

- x

## functions

- x

## view

- <input />

---

# NumberInput(숫자전용)

## props

- extends InputHTMLAttributes<HTMLInputElement> { error: boolean; }
- placeholder, value, name, onChange, ...

## state

- x

## functions

- x

## view

- <Input inputMode="numeric" ... />

---

# Field(공통)

> 라벨, 에러메시지 레이아웃

## props

- extends FieldsetHTMLAttributes<HTMLFieldSetElement> { label: string; error: boolean; errorMessage: string; children: React.Node??; }

## state

- x

## functions

- x

## view

- <fieldset>
      <legend>
      {children}
      <span>
  </fieldset>

1안. Page -> Form -> DomainField -> NumberInput -> Input 드릴링...
2안. Context API + hook -> form 안에서 useForm ??
