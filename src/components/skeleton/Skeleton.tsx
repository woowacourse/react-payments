import SkeletonCardSection from './SkeletonCardSection';
import SkeletonBlock from './SkeletonBlock';

export default function Skeleton() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      <SkeletonCardSection />
      <SkeletonCardSection />
      <SkeletonCardSection />
      <SkeletonBlock width="100%" height="44px" borderRadius="5px" />
    </div>
  );
}
