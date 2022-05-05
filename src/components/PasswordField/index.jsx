import { useContext } from 'react'

import CardInfoContext from 'store/cardInfo-context'

import Field from 'components/common/Field'
import Input from 'components/common/Input'
import { GrayInputWrapper } from 'components/common/Input/style'
import { Dot } from 'components/PasswordField/style'

function PasswordField() {
  const {
    cardInfo: { password },
    handlePasswordChange,
  } = useContext(CardInfoContext)

  return (
    <Field label={'카드 비밀번호'}>
      <GrayInputWrapper size={12}>
        <Input
          type="password"
          dataset="first"
          value={password.first}
          maxLength={1}
          onChange={handlePasswordChange}
        />
      </GrayInputWrapper>
      <GrayInputWrapper size={12}>
        <Input
          type="password"
          dataset="second"
          value={password.second}
          maxLength={1}
          onChange={handlePasswordChange}
        />
      </GrayInputWrapper>
      <Dot>•</Dot>
      <Dot>•</Dot>
    </Field>
  )
}

export default PasswordField
