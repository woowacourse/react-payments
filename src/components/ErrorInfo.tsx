import ErrorImg from '../assets/Error.png';
import Button from './common/Button';

type ErrorInfoProps = {
  message: string;
  handleRetry: () => void;
};

export default function ErrorInfo({ message, handleRetry }: ErrorInfoProps) {
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
      <img src={ErrorImg} alt="에러 이미지" width={64} height={64} />
      <p
        css={(theme) => ({
          color: theme.colors.completeText,
          ...theme.typography.title,
          fontSize: '20px',
          margin: 0,
        })}
      >
        {message} 카드 목록을 불러올 수 없어요.
      </p>
      <p
        css={(theme) => ({
          color: theme.colors.description,
          ...theme.typography.caption,
          fontSize: '12px',
          margin: 0,
        })}
      >
        잠시 후 다시 시도해 주세요.
      </p>
      <Button onClick={handleRetry}>다시 시도</Button>
    </div>
  );
}
