import Title from './common/TItle'
import Label from './common/Label'
import Input from './common/Input'

export default function CardCVCNumber() {
  return (
    <div>
      <Title>CVC 번호를 입력해 주세요</Title>
      <Label id="card-cvc-number">CVC</Label>
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
