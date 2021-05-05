import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const Page = ({ children }) => {
  const [BodyComponent, HeaderComponent] = children;
  // 여기서 header와 body를 강제하지말고, 상위에서 스타일링을 전부 해준다음, 그걸 children으로 넣어주면 될듯.
  // 이 컴포넌트는 상위에서 어떤 children이 들어오는지에 관심이 없다(어떤 children이 오든 상관이 없어야 한다.)
  // 즉, 상위에서 어떤 children이 넘어오건 상관이 없도록 props와 컴포넌트를 디자인해야 한다.
  // header, body도 상위에서 정해서 넘겨주는거지, 하위에서 그걸 강제해선 안된다.

  return (
    <Styled.Container>
      {/* children으로 사용해야한다고 강제된 component를 넘겨받아서 여기에다 사용한다는 게 문제. 내부에서 컴포넌트를 직접 만들어서 쓰는 건 여기를 보면 바로 알수있기 때문에 문제가 없음. props로 text나 버튼 유무 등의 속성을 넘겨받아서, 그 속성을 여기 컴포넌트에다가 적용하는 건 문제 X. 상위에서 children을 넘겨줄 때, 무조건 이 컴포넌트 내부를 살펴봐야 한다는 것이 문제. props로 딱딱딱 넘겨주면 상위에서 하위의 구현 세부 사항을 알 필요가 없기 때문에(하위에서는 자동 적용되도록 구현이 되어 있기 때문) */}
      <Styled.Header>{HeaderComponent}</Styled.Header>
      <Styled.Body>{BodyComponent}</Styled.Body>
    </Styled.Container>
  );
};

Page.propTypes = {};

Page.defaultProps = {};
