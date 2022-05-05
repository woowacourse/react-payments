import { useState } from 'react'

import { ReactComponent as QuestionMark } from 'assets/questionMark.svg'

import {
  Label,
  FieldWrapper,
  HelpTextWrapper,
  InputHelperWrapper,
} from 'components/common/Field/style'

function Field({ label, children, helpText }) {
  const [mouseHover, setMouseHover] = useState(false)

  const handleMouseHover = () => {
    setMouseHover((prev) => !prev)
  }

  return (
    <FieldWrapper>
      <Label>
        <label>{label}</label>
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
