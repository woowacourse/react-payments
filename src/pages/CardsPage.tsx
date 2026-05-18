import useQuery from '../hooks/useQuery';
import CardsErrorTemplate from '../components/Cards/CardsErrorTemplate';
import CardsTemplate from '../components/Cards/CardsTemplate';
import CardsSkeletonTemplate from '../components/Cards/CardsSkeletonTemplate';
import CardsEmptyTemplate from '../components/Cards/CardsEmptyTemplate';
import type { CardsResponse } from '../types';

function CardsPage() {
  const { status, data, error } = useQuery<CardsResponse>({ url: '/cards' });

  if (status === 'error' || error) return <CardsErrorTemplate />;
  if (status === 'success' && data?.length) return <CardsTemplate data={data} />;
  if (status === 'success' && data?.length === 0) return <CardsEmptyTemplate />;
  return <CardsSkeletonTemplate />;
}

export default CardsPage;
