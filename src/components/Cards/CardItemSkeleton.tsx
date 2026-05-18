import Flex from '../Common/Flex';

export default function CardItemSkeleton() {
  return (
    <Flex
      gap={12}
      alignItems="center"
      style={{ border: '1px solid var(--color-gray-200)', borderRadius: '3px', padding: '14px' }}
    >
      <Flex
        style={{ width: '64px', height: '40px', borderRadius: '3px', backgroundColor: 'var(--color-gray-200)' }}
      ></Flex>
      <Flex direction="column" gap={6}>
        <Flex
          style={{ width: '80px', height: '14px', borderRadius: '3px', backgroundColor: 'var(--color-gray-200)' }}
        ></Flex>
        <Flex
          style={{
            width: '140px',
            height: '10px',
            borderRadius: '3px',
            backgroundColor: 'var(--color-gray-200)',
          }}
        ></Flex>
        <Flex
          style={{
            width: '60px',
            height: '10px',
            borderRadius: '3px',
            backgroundColor: 'var(--color-gray-200)',
          }}
        ></Flex>
      </Flex>
    </Flex>
  );
}
