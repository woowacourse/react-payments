import ErrorIcon from '../../../assets/ErrorIcon.svg';
import {
  CardListPageLayout,
  ErrorContentContainer,
  ErrorIconContainer,
  ErrorSubTitle,
  ErrorTitle,
  RetryButton,
  Title,
} from './CardListError.styles';

interface Props {
  onClick: () => void;
}

const CardListError = ({ onClick }: Props) => {
  return (
    <CardListPageLayout>
      <Title>보유 카드</Title>

      <ErrorContentContainer>
        <ErrorIconContainer>
          <img src={ErrorIcon} alt="에러 아이콘" />
        </ErrorIconContainer>
        <ErrorTitle>카드 목록을 불러올 수 없어요</ErrorTitle>
        <ErrorSubTitle>잠시 후 다시 시도해 주세요.</ErrorSubTitle>
        <RetryButton onClick={onClick} aria-label="다시 시도 버튼">
          다시 시도
        </RetryButton>
      </ErrorContentContainer>
    </CardListPageLayout>
  );
};

export default CardListError;
