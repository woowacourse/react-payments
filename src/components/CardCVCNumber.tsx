import Title from './common/Title'
import Label from './common/Label'
import Input from './common/Input'
import Spacing from './common/Spacing'

export default function CardCVCNumber() {
  return (
    <div>
      <Title>CVC 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-cvc-number">CVC</Label>
      <Spacing size={8} />
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Input placeholder="123" />
      </div>
    </div>
  )
}
