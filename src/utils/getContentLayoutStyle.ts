export const getContentLayoutStyle = (
  isCenter: boolean | undefined,
  isBottom: boolean | undefined,
) => {
  if (isCenter && isBottom) throw Error('isBottom 속성과 isCenter 속성을 동시에 둘 수 없습니다.');
  if (isCenter) return 'center';
  if (isBottom) return 'bottom';
  return 'default';
};
