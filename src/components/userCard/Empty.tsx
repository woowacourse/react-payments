import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

export default function Empty() {
  const navigate = useNavigate();
  return (
    <div
      css={{
        marginTop: '140px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <div
        css={(theme) => ({
          width: '160px',
          height: '100px',
          backgroundColor: theme.colors.empty,
          borderRadius: '5px',
          border: '1px dashed #D9D9D9',
        })}
      ></div>
      <p
        css={(theme) => ({
          color: theme.colors.completeText,
          ...theme.typography.title,
          fontSize: '20px',
          margin: 0,
        })}
      >
        등록된 카드가 없습니다
      </p>
      <p
        css={(theme) => ({
          color: theme.colors.description,
          ...theme.typography.caption,
          fontSize: '12px',
          margin: 0,
        })}
      >
        아래 버튼을 눌러 첫 카드를 등록해보세요
      </p>
      <Button onClick={() => navigate('/register')}>카드 추가하기</Button>
    </div>
  );
}
