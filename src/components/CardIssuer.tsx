import { COLOR } from '../styles/color';
import { CardIssuer as CardIssuerType } from '../type';
import { HTMLProps } from 'react';
import ISSUER_KOREAN from '../constants/issuerKorean';
import SectionTitle from './SectionTitle';
import { UseCardIssuer } from '../hooks/useCardIssuer';
import dropdown from '../Images/dropdown.svg';
import styled from '@emotion/styled';

interface OptionContainerProps extends React.HTMLProps<HTMLDivElement> {
  isVisible: boolean;
}

export default function CardIssuer({
  useCardIssuer,
}: {
  useCardIssuer: UseCardIssuer;
}) {
  const options: CardIssuerType[] = [
    'BcCard',
    'HanaCard',
    'HyndaiCard',
    'KBCard',
    'KakaoBank',
    'LotteCard',
    'ShinhanCard',
    'WooriCard',
  ];

  const {
    issuer,
    optionOnMouseDowns,
    optionOnFocuses,
    optionOnKeyDowns,
    selectOnFocus,
    selectOnBlur,
    refs,
    selectIsFocus,
  } = useCardIssuer;

  const optionElements = options.map((issuer, idx) => (
    <Option
      key={issuer}
      onMouseDown={optionOnMouseDowns[idx]}
      onFocus={optionOnFocuses[idx]}
      onKeyDown={optionOnKeyDowns[idx]}
      onBlur={selectOnBlur}
      ref={refs[idx]}
      tabIndex={0}
    >
      {ISSUER_KOREAN[issuer]}
    </Option>
  ));

  return (
    <section>
      <SectionTitle
        title='카드사를 선택해 주세요'
        description='현재 국내 카드사만 가능합니다.'
      />
      <div style={{ position: 'relative', cursor: 'default' }}>
        <div style={{ height: '31.28px' }}>
          <SelectBox
            readOnly={true}
            placeholder={'카드사를 선택해주세요'}
            value={issuer === '' ? issuer : ISSUER_KOREAN[issuer]}
            onFocus={selectOnFocus}
            autoFocus
            tabIndex={5}
          />
          <DropDownImg
            src={dropdown}
            alt='dropdown'
            isFocus={selectIsFocus}
          ></DropDownImg>
        </div>

        <OptionContainer isVisible={selectIsFocus}>
          {optionElements}
        </OptionContainer>
      </div>
    </section>
  );
}
const Option = styled.div({
  boxSizing: 'border-box',
  padding: '8px',
  fontWeight: 400,
  fontSize: '10.63px',
  lineHeight: '14.62px',
  '&:hover': {
    backgroundColor: COLOR.gray1 + '40',
    outline: 0,
  },
  '&:focus': {
    backgroundColor: COLOR.black + '40',
    outline: 0,
  },
});

const OptionContainer = styled.div<OptionContainerProps>(props => {
  const display = props.isVisible ? undefined : 'none';
  return {
    boxSizing: 'border-box',
    display,
    position: 'absolute',
    width: '100%',
    border: '1px solid',
    borderColor: COLOR.gray1,
    borderRadius: '5.31px',
    backgroundColor: COLOR.white,
    margin: '0px',
    marginTop: '5px',
  };
});

const SelectBox = styled.input({
  boxSizing: 'border-box',
  width: '100%',
  height: '31.28px',
  border: '1px solid',
  borderRadius: '2.66px',
  borderColor: COLOR.gray1,
  padding: '8px',
  userSelect: 'none',
  marginTop: '5px',
  '&:focus-visible': {
    border: '1px solid',
    borderColor: COLOR.black,
    outline: 'none',
  },
});

interface DropDownImgProps extends HTMLProps<HTMLImageElement> {
  isFocus: boolean;
}
const DropDownImg = styled.img<DropDownImgProps>(props => ({
  position: 'relative',
  top: '-25px',
  left: '294px',
  pointerEvents: 'none',
  transform: `rotate(${props.isFocus ? 180 : 0}deg)`,
}));
