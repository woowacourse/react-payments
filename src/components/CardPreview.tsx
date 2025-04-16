import MasterCard from './logo/MasterCard'
import VisaCard from './logo/VisaCard'

export default function CardPreview() {
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
        <VisaCard width={36} />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      >
        <span>1111</span>
        <span>2222</span>
        <span>****</span>
        <span>****</span>
      </div>
      <div>
        <span>04/21</span>
      </div>
    </div>
  )
}
