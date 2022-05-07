import { useContext } from 'react'
import PropTypes from 'prop-types'

import Field from 'components/common/Field'
import useAutoFocus from 'hooks/useAutoFocus'

import CardInfoContext from 'store/cardInfo-context'

import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'
function DueDateField() {
  const {
    cardInfo: { dueDate },
    isError: {
      dueDate: { error, errorMessage },
    },
    handleDueDateChange,
  } = useContext(CardInfoContext)

  const { refList, moveToNextInput } = useAutoFocus({ maxLength: 2 })

  const handleInputChange = (e) => {
    handleDueDateChange(e)
    moveToNextInput(e)
  }

  return (
    <Field label="만료일" errorMessage={error && errorMessage}>
      <GrayInputWrapper size={50} error={error && errorMessage}>
        <Input
          value={dueDate.month}
          dataset="month"
          maxLength={2}
          onChange={handleInputChange}
          ref={(node) => {
            refList.current[0] = node
          }}
        />
        <Input
          value={dueDate.year}
          dataset="year"
          maxLength={2}
          onChange={handleDueDateChange}
          ref={(node) => {
            refList.current[1] = node
          }}
        />
      </GrayInputWrapper>
    </Field>
  )
}

DueDateField.propTypes = {
  dueDate: PropTypes.object,
  setDueDate: PropTypes.func,
}

export default DueDateField
