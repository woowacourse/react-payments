import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ size, company, numbers, owner, validDay, ...props }) => {
  return (
    <Styled.Container size={size} company={company} {...props}>
      <Styled.Inner>
        <Styled.Header size={size}>
          <Styled.Company>
            {company ? `${company}카드` : '클릭하여 카드사를 선택해주세요.'}
          </Styled.Company>
        </Styled.Header>
        <Styled.Body>
          <Styled.IcChip />
          <Styled.NumbersContainer size={size}>
            <Styled.Numbers size={size}>{numbers.first}</Styled.Numbers>
            <Styled.Numbers size={size}>{numbers.second}</Styled.Numbers>
            <Styled.BlindNumbers>
              {[...Array(numbers.third.length)].map((_, idx) => (
                <Styled.BlindDot size={size} key={idx} />
              ))}
            </Styled.BlindNumbers>
            <Styled.BlindNumbers>
              {[...Array(numbers.fourth.length)].map((_, idx) => (
                <Styled.BlindDot size={size} key={idx} />
              ))}
            </Styled.BlindNumbers>
          </Styled.NumbersContainer>
        </Styled.Body>
        <Styled.Footer size={size}>
          <Styled.Owner>{size === 'medium' && !owner ? 'NAME' : owner}</Styled.Owner>
          <Styled.ValidDay>
            {`${validDay.month ? validDay.month : 'MM'}/${validDay.year ? validDay.year : 'YY'}`}
          </Styled.ValidDay>
        </Styled.Footer>
      </Styled.Inner>
    </Styled.Container>
  );
};

Card.propTypes = {
  /**
   * Card size
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /**
   * Card Compony
   */
  company: PropTypes.oneOf(['', '포코', '준', '공원', '브랜', '로이드', '도비', '콜린', '썬']),
  /**
   * Card numbers sixteen digits { first: [], second: [], third: [], fourth: [] }
   */
  numbers: PropTypes.object,
  /**
   * Card owner name
   */
  owner: PropTypes.string,
  /**
   * Card validDay { month, year }
   */
  validDay: PropTypes.object,

  /**
   * Card choose company button
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  size: 'large',
  company: '',
  numbers: { first: '', second: '', third: '', fourth: '' },
  owner: '',
  validDay: {
    month: 'MM',
    year: 'YY',
  },
  onClick: () => {},
};
