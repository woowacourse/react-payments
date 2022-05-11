import { MemoryRouter } from 'react-router-dom';

import { AddCompletePage } from '../../pages';

export default {
  title: 'Example/Page',
  component: [AddCompletePage],
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

function AddCompleteTemplate({ card }) {
  return <AddCompletePage card={card} />;
}

const AddCompleteSuccess = AddCompleteTemplate.bind({});
AddCompleteSuccess.args = {
  card: {
    cardCompany: '하리 카드',
    cardColor: '#ADD8E6',
    cardOwnerName: 'HALEE',
    cardNumber: '11112222••••••••',
    validDate: '2022-05',
  },
};

const AddCompleteFail = AddCompleteTemplate.bind({});
AddCompleteFail.args = {
  card: {
    cardCompany: '하리 카드',
    cardColor: '#ADD8E6',
    cardOwnerName: '',
    cardNumber: '',
    validDate: '',
  },
};

export { AddCompleteSuccess, AddCompleteFail };
