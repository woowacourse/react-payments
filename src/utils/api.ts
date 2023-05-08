import { Card } from 'types/Card';

interface MockSaveCardInfoResponse {
  success: boolean;
  data: Card;
  error: string;
}

export const mockSaveCardInfo = async (
  cardInfo: Card
): Promise<MockSaveCardInfoResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: { ...cardInfo },
        error: '데이터를 가져오는데에 실패했습니다.',
      });
    }, 2500);
  });
};
