import MasterCard from './logo/MasterCard'
import VisaCard from './logo/VisaCard'

interface CardPreviewProps {
  cardType: 'visa' | 'master' | ''
  cardNumber: Record<string, string>
}

export default function CardPreview({ cardType, cardNumber }: CardPreviewProps) {
  return (
    <div
      style={{
        width: '212px',
        height: '132px',
        backgroundColor: '#333',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 12px',
        gap: '14px',
        color: '#fff',
        fontSize: '18px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '36px',
            height: '22px',
            backgroundColor: '#ddcd78',
            border: '0.5px solid #ddcd78',
            borderRadius: '2.5px',
          }}
        ></div>
        {cardType === 'visa' && <VisaCard width={36} />}
        {cardType === 'master' && <MasterCard width={36} />}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      >
        <span>{cardNumber.first}</span>
        <span>{cardNumber.second}</span>
        <span>
          {Array.from({ length: cardNumber.third.length }, () => {
            return '·'
          })}
        </span>
        <span>
          {Array.from({ length: cardNumber.fourth.length }, () => {
            return '·'
          })}
        </span>
      </div>
      <div>
        <span>04/21</span>
      </div>
    </div>
  )
}
