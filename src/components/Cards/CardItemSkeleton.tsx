import { css } from '@emotion/react';
import Flex from '../Common/Flex';

export default function CardItemSkeleton() {
  return (
    <Flex
      gap={12}
      alignItems="center"
      customStyle={css`
        border: 1px solid var(--color-gray-200);
        border-radius: 3px;
        padding: 14px;
      `}
    >
      <Flex
        customStyle={css`
          width: 64px;
          height: 40px;
          border-radius: 3px;
          background-color: var(--color-gray-200);
        `}
      ></Flex>
      <Flex direction="column" gap={6}>
        <Flex
          customStyle={css`
            width: 80px;
            height: 14px;
            border-radius: 3px;
            background-color: var(--color-gray-200);
          `}
        ></Flex>
        <Flex
          customStyle={css`
            width: 140px;
            height: 10px;
            border-radius: 3px;
            background-color: var(--color-gray-200);
          `}
        ></Flex>
        <Flex
          customStyle={css`
            width: 60px;
            height: 10px;
            border-radius: 3px;
            background-color: var(--color-gray-200);
          `}
        ></Flex>
      </Flex>
    </Flex>
  );
}
