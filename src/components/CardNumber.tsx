import Title from './common/TItle'
import Label from './common/Label'
import Input from './common/Input'

export default function CardNumber() {
  return (
    <div>
      <Title description="본인 명의의 카드만 결제 가능합니다.">결제할 카드 번호를 입력해 주세요</Title>
      <Label id="card-number">카드 번호</Label>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Input placeholder="1234" />
        <Input placeholder="1234" />
        <Input placeholder="1234" />
        <Input placeholder="1234" />
      </div>
    </div>
  )
}
