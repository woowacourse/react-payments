/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css'
import CardNumber from './components/CardNumber'
import CardExpirationDate from './components/CardExpirationDate'
import CardCVCNumber from './components/CardCVCNumber'
import CardPreview from './components/CardPreview'
import Spacing from './components/common/Spacing'

function App() {
  return (
    <div
      css={css`
        width: 480px;
        height: 100vh;
        margin: 0 auto;
        border: 1px solid #000;
        padding: 71px 31px;
      `}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CardPreview />
      </div>
      <Spacing size={60} />

      <form style={{ display: 'flex', gap: '32px', flexDirection: 'column' }}>
        <CardNumber />
        <CardExpirationDate />
        <CardCVCNumber />
      </form>
    </div>
  )
}

export default App
