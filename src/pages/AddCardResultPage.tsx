import { useLocation, useNavigate } from 'react-router';
import View from '../components/Common/View';
import Result from '../components/Result';
import { CARD_ISSUER } from '../constants';
import type { CardIssuer } from '../types';

export interface AddCardResultState {
  type: 'success' | 'error';
  issuer: CardIssuer | null;
  firstSegment: string;
}

function AddCardResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as AddCardResultState | null;

  const cardIssuer = state?.issuer ? CARD_ISSUER[state.issuer] : undefined;

  if (!state) {
    return (
      <View>
        <Result type="error" message="카드 등록 결과가 없습니다." action={() => navigate('/')} />
      </View>
    );
  }

  if (state.type !== 'success') {
    return (
      <View>
        <Result type="error" message="카드 등록에 실패했습니다." action={() => navigate('/')} />
      </View>
    );
  }

  return (
    <View>
      <Result
        type={state.type}
        message={`${state.firstSegment ?? '알 수 없는 카드번호'}로 시작하는 ${cardIssuer?.label ?? '카드'}가 등록되었어요.`}
        action={() => navigate('/')}
      />
    </View>
  );
}

export default AddCardResultPage;
