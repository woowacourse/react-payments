import PropTypes from 'prop-types'
import { useState } from 'react'

import InputBox from 'components/common/InputBox'
import { ReactComponent as QuestionMark } from 'assets/questionMark.svg'

import {
  Label,
  FieldWrapper,
  HelpTextWrapper,
  InputHelperWrapper,
} from 'components/common/Field/style'

function Field({
  label,
  background,
  border,
  error,
  inputInfo,
  size,
  onChange,
  countHelper,
  helpText,
}) {
  const [mouseHover, setMouseHover] = useState(false)

  const handleMouseHover = () => {
    setMouseHover((prev) => !prev)
  }

  return (
    <FieldWrapper>
      <Label>
        <label>{label}</label>
        {countHelper && (
          <div>
            {inputInfo[0].value?.length}/{countHelper}
          </div>
        )}
      </Label>
      <InputHelperWrapper>
        <InputBox
          inputInfo={inputInfo}
          size={size}
          background={background}
          border={border}
          error={error}
          onChange={onChange}
        />
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

Field.propTypes = {
  /**
   * Field label 문구
   */
  label: PropTypes.string,
  /**
   * input 배경색
   */
  background: PropTypes.string,
  /**
   * input box border
   */
  border: PropTypes.string,
  /**
   * error시 inputBox를 통해 error를 나타낸다
   */
  error: PropTypes.bool,
  inputInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * input 넓이
   */
  size: PropTypes.number,
  onChange: PropTypes.func,
  /**
   * 최대 글자수
   */
  countHelper: PropTypes.number,
  /**
   * 물음표 아이콘을 통해 보이는 도움말
   */
  helpText: PropTypes.string,
}

export default Field
