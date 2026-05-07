import { useLocation, useNavigate } from 'react-router';
import View from '../components/Common/View';
import Result from '../components/Result';
import { CARD_ISSUERS } from '../constants';
import type { AddCardResultState } from '../types';

function AddCardResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as AddCardResultState | null;

  const cardIssuer = CARD_ISSUERS.find((c) => c.value === state?.issuer);

  if (!state || !cardIssuer || state.firstSegment.length !== 4) {
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
        message={`${state.firstSegment}로 시작하는 ${cardIssuer.label}가 등록되었어요.`}
        action={() => navigate('/')}
      />
    </View>
  );
}

export default AddCardResultPage;
