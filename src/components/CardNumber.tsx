import Title from './common/Title'
import Label from './common/Label'
import Input from './common/Input'
import Spacing from './common/Spacing'
import ErrorMessage from './common/ErrorMessage'

export default function CardNumber() {
  return (
    <div>
      <Title description="본인 명의의 카드만 결제 가능합니다.">결제할 카드 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-number">카드 번호</Label>
      <Spacing size={8} />
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
      <Spacing size={8} />
      <ErrorMessage>4자리만 가능</ErrorMessage>
    </div>
  )
}
