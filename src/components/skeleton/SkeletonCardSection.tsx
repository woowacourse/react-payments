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
      <div
        css={(theme) => ({
          width: '64px',
          backgroundColor: theme.colors.loading,
          height: '40px',
          borderRadius: '4px',
        })}
      ></div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          height: '45px',
        }}
      >
        <div
          css={(theme) => ({
            width: '80px',
            backgroundColor: theme.colors.loading,
            height: '14px',
            borderRadius: '3px',
          })}
        ></div>
        <div
          css={(theme) => ({
            width: '140px',
            backgroundColor: theme.colors.loading,
            height: '10px',
            borderRadius: '3px',
          })}
        ></div>
        <div
          css={(theme) => ({
            width: '60px',
            backgroundColor: theme.colors.loading,
            height: '9px',
            borderRadius: '3px',
          })}
        ></div>
      </div>
    </div>
  );
}
