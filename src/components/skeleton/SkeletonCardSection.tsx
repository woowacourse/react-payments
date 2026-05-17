import SkeletonBlock from './SkeletonBlock';

export default function SkeletonCardSection() {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '12px',
        padding: '14px 12px',
        width: '100%',
        height: '69px',
        border: '1px solid #F0F0F0',
        borderRadius: '5px',
      }}
    >
      <SkeletonBlock width="64px" height="40px" borderRadius="4px" />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          height: '45px',
        }}
      >
        <SkeletonBlock width="80px" height="14px" borderRadius="3px" />
        <SkeletonBlock width="140px" height="10px" borderRadius="3px" />
        <SkeletonBlock width="60px" height="9px" borderRadius="3px" />
      </div>
    </div>
  );
}
