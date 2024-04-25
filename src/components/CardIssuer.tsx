import { COLOR } from '../styles/color';
import { CardIssuer as CardIssuerType } from '../type';
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

  const { issuer, onClicks, isFocus, onFocus, onBlur } = useCardIssuer;

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
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <img
            src={dropdown}
            alt={'dropdown'}
            style={{
              position: 'relative',
              top: '-25px',
              left: '294px',
              pointerEvents: 'none',
              transform: `rotate(${isFocus ? 180 : 0}deg)`,
            }}
          ></img>
        </div>

        <OptionContainer isVisible={isFocus}>
          {options.map((issuer, index) => (
            <Option key={issuer} onMouseDown={onClicks[index]}>
              {ISSUER_KOREAN[issuer]}
            </Option>
          ))}
        </OptionContainer>
      </div>
    </section>
  );
}
const Option = styled.div({
  padding: '8px',
  fontWeight: 400,
  fontSize: '10.63px',
  lineHeight: '14.62px',
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
  cursor: 'default',
  marginTop: '5px',
});
