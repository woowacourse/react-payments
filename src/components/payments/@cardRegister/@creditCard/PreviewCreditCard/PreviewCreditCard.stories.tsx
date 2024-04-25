import PreviewCreditCard from '@components/payments/@cardRegister/@creditCard/PreviewCreditCard/PreviewCreditCard';

import { generateArgTypes } from '@utils/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { CARD_BRAND_MAP } from '@components/payments/@cardRegister/@cardBrand/CardBrandDropdown/CardBrandDropdown.constant';

const meta = {
  title: 'Payments/PreviewCreditCard',
  component: PreviewCreditCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자의 카드 정보를 신용카드 형태로 보여주는 컴포넌트',
      },
    },
  },
  argTypes: {
    cardNumbers: {
      control: 'array',
      description: '카드 번호 16자리',
    },
    expiration: {
      ...generateArgTypes({ control: 'object' }),
      description: '유효기간(YY/MM)',
    },
    ownerName: {
      ...generateArgTypes({ control: 'text' }),
      description: '소유자 이름',
    },
    cardBrand: {
      ...generateArgTypes({ control: 'radio', options: Object.keys(CARD_BRAND_MAP) }),
      description: '선택한 카드 브랜드',
    },
    isCardBrandChange: {
      ...generateArgTypes({ control: 'boolean' }),
      description: '지정된 카드 브랜드를 보여줄지의 여부',
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof PreviewCreditCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 기본 상태',
      },
    },
  },

  args: {
    isCardBrandChange: false,
    cardBrand: '',
    cardNumbers: ['', '', '', ''],
    expiration: { month: '', year: '' },
    ownerName: '',
  },
};

export const VisaCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '비자 카드가 보여지는 상태',
      },
    },
  },

  args: {
    isCardBrandChange: false,
    cardBrand: '',
    cardNumbers: ['4123', '1231', '2342', '4535'],
    expiration: { month: '07', year: '28' },
    ownerName: 'SONJINYOUNG',
  },
};

export const MasterCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '마스터 카드가 보여지는 상태',
      },
    },
  },

  args: {
    isCardBrandChange: false,
    cardBrand: '',
    cardNumbers: ['5112', '3456', '7890', '0000'],
    expiration: { month: '05', year: '28' },
    ownerName: 'SONJINYOUNG',
  },
};

export const NotCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드가 없는 상태',
      },
    },
  },

  args: {
    isCardBrandChange: false,
    cardBrand: '',
    cardNumbers: ['1234', '3456', '7890', '0000'],
    expiration: { month: '05', year: '28' },
    ownerName: 'SONJINYOUNG',
  },
};

export const BCCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 브랜드를 BC 카드로 선택했을 때',
      },
    },
  },

  args: {
    ...Default.args,
    isCardBrandChange: true,
    cardBrand: 'bcCard',
  },
};

export const HanaCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 브랜드를 하나카드로 선택했을 때',
      },
    },
  },

  args: {
    ...Default.args,
    isCardBrandChange: true,
    cardBrand: 'hanaCard',
  },
};

export const HyundaiCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 브랜드를 현대카드로 선택했을 때',
      },
    },
  },

  args: {
    ...Default.args,
    isCardBrandChange: true,
    cardBrand: 'hyundaiCard',
  },
};

export const KakaoBank: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 브랜드를 카카오뱅크로 선택했을 때',
      },
    },
  },

  args: {
    ...Default.args,
    isCardBrandChange: true,
    cardBrand: 'kakaoBank',
  },
};

export const KookminCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 브랜드를 국민카드로 선택했을 때',
      },
    },
  },

  args: {
    ...Default.args,
    isCardBrandChange: true,
    cardBrand: 'kookminCard',
  },
};

export const LotteCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 브랜드를 롯데카드로 선택했을 때',
      },
    },
  },

  args: {
    ...Default.args,
    isCardBrandChange: true,
    cardBrand: 'lotteCard',
  },
};

export const ShinhanCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 브랜드를 신한카드로 선택했을 때',
      },
    },
  },

  args: {
    ...Default.args,
    isCardBrandChange: true,
    cardBrand: 'shinhanCard',
  },
};

export const WooriCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 브랜드를 우리카드로 선택했을 때',
      },
    },
  },

  args: {
    ...Default.args,
    isCardBrandChange: true,
    cardBrand: 'wooriCard',
  },
};
