import Title from './common/Title'
import Label from './common/Label'
import Input from './common/Input'
import Spacing from './common/Spacing'

export default function CardExpirationDate() {
  return (
    <div>
      <Title description="월/년도(MMYY)를 순서대로 입력해 주세요.">카드 유효기간을 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-expiration-date">유효기간</Label>
      <Spacing size={8} />
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Input placeholder="MM" />
        <Input placeholder="YY" />
      </div>
    </div>
  )
}
