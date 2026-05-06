import { useNavigate } from 'react-router';
import CardForm from '../components/CardForm';
import View from '../components/Common/View';
import type { AddCardResultState } from '../types';

function AddCardPage() {
  const navigate = useNavigate();

  return (
    <View>
      <CardForm
        onSubmit={(formData) => {
          const state: AddCardResultState = {
            type: 'success',
            issuer: formData.cardIssuer,
            firstSegment: formData.cardNumberSegments[0],
          };
          navigate('/add-card-result', { state });
        }}
      />
    </View>
  );
}

export default AddCardPage;
