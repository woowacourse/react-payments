import { useContext } from 'react'
import PropTypes from 'prop-types'

import Field from 'components/common/Field'

import CardInfoContext from 'store/cardInfo-context'

import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'
function DueDateField() {
  const {
    cardInfo: { dueDate },
    handleDueDateChange,
  } = useContext(CardInfoContext)

  return (
    <Field label="만료일">
      <GrayInputWrapper size={50}>
        <Input
          value={dueDate.month}
          dataset="month"
          maxLength={2}
          onChange={handleDueDateChange}
        />
        <Input
          value={dueDate.year}
          dataset="year"
          maxLength={2}
          onChange={handleDueDateChange}
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
