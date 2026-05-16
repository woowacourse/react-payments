import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './common/styles/reset.css';
import App from './App';

const renderApp = () => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
};

async function main() {
  try {
    // 배포 환경에서도 MSW를 시작해 미션용 API 경계를 모킹
    const {worker} = await import('./mocks/browser');

    await worker.start({
      onUnhandledRequest: 'bypass',
    });
  } catch (error) {
    console.error('MSW 시작에 실패했습니다.', error);
  }

  renderApp();
}

main();
