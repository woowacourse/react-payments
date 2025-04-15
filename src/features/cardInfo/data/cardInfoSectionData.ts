export const cardInfoSectionData = [
  {
    title: '결제할 카드 번호를 입력해 주세요',
    description: '본인 명의의 카드만 결제 가능합니다.',
    subTitle: '카드 번호',
    inputArr: [
      { type: 'number', placeholder: '1234', name: '', onChange: () => {} },
      { type: 'number', placeholder: '1234', name: '', onChange: () => {} },
      { type: 'number', placeholder: '1234', name: '', onChange: () => {} },
      { type: 'number', placeholder: '1234', name: '', onChange: () => {} },
    ],
  },
  {
    title: '카드 유효기간을 입력해 주세요',
    description: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    subTitle: '유효기간',
    inputArr: [
      { type: 'number', placeholder: 'MM', name: '', onChange: () => {} },
      { type: 'number', placeholder: 'YY', name: '', onChange: () => {} },
    ],
  },
  {
    title: 'CVC 번호를 입력해 주세요',
    description: '',
    subTitle: 'CVC',
    inputArr: [{ type: 'number', placeholder: '123', name: '', onChange: () => {} }],
  },
];
