import { Card } from 'components';
import Button from 'components/@common/Button';

import ResultMessage from './styles';

function CardUpdated() {
  return (
    <>
      <div className="layout-side-container">
        <ResultMessage>
          <div className="emoji">😍</div>
          <h2 className="title">카드 등록 완료</h2>
          <p className="description">콤피 카드가 추가되었어요</p>
        </ResultMessage>
      </div>

      <div className="layout-main-container fill">
        <Card companyId="회사명" />
        <h3 align="center">카드 이름</h3>

        <Button type="primary" size="large" width="100%">
          목록으로 이동
        </Button>
      </div>
    </>
  );
}

export default CardUpdated;
