import * as Styled from './LoadingBox.styled';
import { Spinner } from '../Spinner/Spinner';

export const LoadingBox = ({
  setIsLoading,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      <Styled.Paragraph>카드를 등록하고 있어요</Styled.Paragraph>
      <Spinner />
    </>
  );
};
