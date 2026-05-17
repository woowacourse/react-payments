import { useLocation, useNavigate } from 'react-router';
import View from '../components/Common/View';
import Result, { type ResultProps } from '../components/Result';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultProps | null;

  if (!state) {
    return (
      <View>
        <Result type="error" message="알 수 없는 에러가 발생했습니다." onAction={() => navigate('/')} />
      </View>
    );
  }

  return (
    <View>
      <Result type={state.type} message={state.message} onAction={() => navigate('/cards')} />
    </View>
  );
}

export default ResultPage;
