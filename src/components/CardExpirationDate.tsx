import Title from './common/TItle'
import Label from './common/Label'
import Input from './common/Input'

export default function CardExpirationDate() {
  return (
    <div>
      <Title description="월/년도(MMYY)를 순서대로 입력해 주세요.">카드 유효기간을 입력해 주세요</Title>
      <Label id="card-expiration-date">유효기간</Label>
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
