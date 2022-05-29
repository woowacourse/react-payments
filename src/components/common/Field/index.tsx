import { useState } from 'react'

import { ReactComponent as QuestionMark } from 'assets/questionMark.svg'

import {
  Label,
  FieldWrapper,
  HelpTextWrapper,
  InputHelperWrapper,
} from 'components/common/Field/style'

type FieldProps = {
  children: React.ReactNode
  label: string
  errorMessage?: string
  helpText?: string
  countHelper?: string
}

function Field({
  label,
  errorMessage,
  children,
  helpText,
  countHelper,
}: FieldProps) {
  const [mouseHover, setMouseHover] = useState(false)

  const handleMouseHover = () => {
    setMouseHover((prev) => !prev)
  }

  return (
    <FieldWrapper>
      <Label>
        <label>{label}</label>
        {errorMessage && <div>{errorMessage}</div>}
        {countHelper && <div>{countHelper}</div>}
      </Label>
      <InputHelperWrapper>
        {children}
        {helpText && (
          <QuestionMark
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
          />
        )}
        {mouseHover && <HelpTextWrapper>{helpText}</HelpTextWrapper>}
      </InputHelperWrapper>
    </FieldWrapper>
  )
}

export default Field
