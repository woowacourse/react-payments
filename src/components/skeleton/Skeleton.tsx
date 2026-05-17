import SkeletonCardSection from './SkeletonCardSection';

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
      <div
        css={(theme) => ({
          width: '100%',
          backgroundColor: theme.colors.loading,
          height: '44px',
          borderRadius: '5px',
        })}
      ></div>
    </div>
  );
}
