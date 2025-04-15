import './CardInfoSection.css';

export default function CardInfoSection() {
  return (
    <section className='card-info-section'>
      <div>
        <h1 className='card-info-title'>결제할 카드 번호를 입력해 주세요</h1>
        <span className='card-info-description'>본인 명의의 카드만 결제 가능합니다.</span>
      </div>

      <div className='card-info-sub-section'>
        <span className='card-info-subtitle'>카드 번호</span>
        <input type='text' placeholder='카드 번호를 입력해 주세요' name='cardNumber' />
        <div className='card-info-error'>에러 메세지</div>
      </div>
    </section>
  );
}
