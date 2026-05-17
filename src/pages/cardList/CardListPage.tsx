import { useEffect, useState } from 'react';

interface TutorialResponse {
  message: string;
}

const getBaseUrl = () => {
  return import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
};

export const CardListPage = () => {
  const [message, setMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch(`${getBaseUrl()}api/tutorial`);
        if (!response.ok) throw new Error('튜토리얼 API 호출에 실패했습니다.');

        const data = (await response.json()) as TutorialResponse;
        setMessage(data.message);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchTutorial();
  }, []);

  return (
    <main>
      <h1>카드 목록</h1>
      <p>MSW 튜토리얼 API 응답</p>
      <div role="status">{isLoading ? '불러오는 중...' : errorMessage || message}</div>
    </main>
  );
};
