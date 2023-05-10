import { Meta, StoryObj } from '@storybook/react';
import CompanyLogoItem from '../components/CompanyLogoItem/CompanyLogoItem';
import {
  BC,
  SINHAN,
  KAKAO,
  HYUNDAI,
  WOORI,
  LOTTE,
  HANA,
  KB,
} from '../assets/svgs';

const meta: Meta<typeof CompanyLogoItem> = {
  title: 'Components/CompanyLogoItem',
  component: CompanyLogoItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CompanyLogoItem>;

export const 비씨: Story = {
  args: {
    SvgLogo: <BC />,
    name: '비씨',
    handleCompanyLogoClick: () => console.log('비씨'),
  },
};

export const 신한: Story = {
  args: {
    SvgLogo: <SINHAN />,
    name: '신한',
    handleCompanyLogoClick: () => console.log('신한'),
  },
};

export const 현대: Story = {
  args: {
    SvgLogo: <HYUNDAI />,
    name: '현대',
    handleCompanyLogoClick: () => console.log('현대'),
  },
};

export const 우리: Story = {
  args: {
    SvgLogo: <WOORI />,
    name: '우리',
    handleCompanyLogoClick: () => console.log('우리'),
  },
};

export const 롯데: Story = {
  args: {
    SvgLogo: <LOTTE />,
    name: '롯데',
    handleCompanyLogoClick: () => console.log('롯데'),
  },
};

export const 하나: Story = {
  args: {
    SvgLogo: <HANA />,
    name: '하나',
    handleCompanyLogoClick: () => console.log('하나'),
  },
};

export const 국민: Story = {
  args: {
    SvgLogo: <KB />,
    name: '국민',
    handleCompanyLogoClick: () => console.log('국민'),
  },
};

export const 카카오: Story = {
  args: {
    SvgLogo: <KAKAO />,
    name: '카카오',
    handleCompanyLogoClick: () => console.log('카카오'),
  },
};
