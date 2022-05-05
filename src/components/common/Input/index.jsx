import { InputWrapper } from 'components/common/Input/style'

function Input({ type, dataset, ...props }) {
  return (
    <InputWrapper type={type ? type : 'text'} data-key={dataset} {...props} />
  )
}

export default Input
