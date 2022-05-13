import { useContext } from 'react'
import PropTypes from 'prop-types'

import Field from 'components/common/Field'
import useAutoFocus from 'hooks/useAutoFocus'

import CardInfoContext from 'context/cardInfo-context'

import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'

import { isInvalidDueDate } from 'validation'
import { DUE_DATE, MONTH, ERROR_MESSAGE } from 'constant'
function DueDateField() {
  const {
    cardInfo: { dueDate },
    isError: {
      dueMonth: { error: monthError, errorMessage: monthErrorMessage },
      dueYear: { error: yearError, errorMessage: yearErrorMessage },
    },
    setIsError,
    setDueDate,
  } = useContext(CardInfoContext)

  const { refList, moveToNextInput } = useAutoFocus({
    maxLength: [DUE_DATE.UNIT_LENGTH, DUE_DATE.UNIT_LENGTH],
  })

  const handleInputChange = ({ target }, key) => {
    const { value } = target
    if (isInvalidDueDate(value)) return

    setDueDate(target, key)

    if (key === 'month') {
      setIsError((prev) => {
        return {
          ...prev,
          dueMonth: {
            error: value < MONTH.MIN || value > MONTH.MAX,
            errorMessage: ERROR_MESSAGE.INVALID_MONTH,
          },
        }
      })
    } else {
      const currentYear = new Date().getFullYear().toString().slice(2)
      setIsError((prev) => {
        return {
          ...prev,
          dueYear: {
            error: value < currentYear,
            errorMessage: ERROR_MESSAGE.INVALID_YEAR,
          },
        }
      })
    }

    moveToNextInput(target)
  }

  return (
    <Field
      label="만료일"
      errorMessage={
        monthError ? monthErrorMessage : yearError && yearErrorMessage
      }
    >
      <GrayInputWrapper size={50} error={monthError || yearError}>
        <Input
          value={dueDate.month}
          dataset="month"
          maxLength={DUE_DATE.UNIT_LENGTH}
          onChange={(e) => handleInputChange(e, 'month')}
          ref={(node) => {
            refList.current[0] = node
          }}
        />
        <Input
          value={dueDate.year}
          dataset="year"
          maxLength={DUE_DATE.UNIT_LENGTH}
          onChange={(e) => handleInputChange(e, 'year')}
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
