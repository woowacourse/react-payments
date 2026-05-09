---
name: storybook
description: 컴포넌트 이름을 받아 해당 컴포넌트를 찾고 Storybook story 파일을 생성한다. "/storybook <컴포넌트이름>" 형태로 사용한다.
version: 0.1.0
---

# Storybook Story 생성

args: {{args}}

## 목표

`{{args}}`에 주어진 컴포넌트 이름으로 파일을 찾고, 해당 디렉토리에 `.stories.ts` 또는 `.stories.tsx` 파일을 생성한다.

## 절차

1. `{{args}}`를 컴포넌트 이름으로 간주하고 `find . -name "<args>.tsx" -o -name "<args>.ts"` 명령으로 `src/` 내에서 파일을 찾는다. `node_modules`는 제외한다.
2. 여러 개가 발견되면 목록을 보여주고 사용자에게 선택을 요청한다.
3. 찾은 컴포넌트 파일을 읽고 props 인터페이스/타입을 분석한다.
4. 아래 컨벤션에 맞게 story 파일을 작성한다.
5. 컴포넌트 파일과 **같은 디렉토리**에 `<ComponentName>.stories.ts` (또는 JSX를 직접 쓰는 경우 `.stories.tsx`) 로 저장한다.

## 컨벤션

### import

```ts
import type { Meta, StoryObj } from '@storybook/react-vite';
// play 함수가 필요한 경우에만 추가:
import { userEvent, within } from 'storybook/test';
import { fn } from 'storybook/test';
```

### meta 구조

```ts
const meta = {
  title: '<ComponentName>',           // 컴포넌트 이름 (경로 없이)
  component: <ComponentName>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '<컴포넌트의 역할을 한국어로 한 문장 설명>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // 각 prop에 대해:
    // - boolean → control: 'boolean'
    // - string  → control: 'text'
    // - number  → control: 'number'
    // - enum    → control: 'select', options: [...]
    // - object/array → control: 'object'
    // - function(이벤트 핸들러) → table: { disable: true }
    // 각 argType에 description(한국어)과 table.type.summary를 포함한다
  },
  // 이벤트 핸들러 prop이 있으면 args에 fn()으로 추가
  // args: { onClick: fn() },
} satisfies Meta<typeof <ComponentName>>;

export default meta;
type Story = StoryObj<typeof meta>;
```

### stories

- **Default**: 가장 기본적인 상태
- **의미 있는 변형**: prop 조합이나 상태에 따른 시각적 변형 (예: Error, Disabled, Focus 등)
- 인터랙션 테스트가 자연스러운 경우에만 `play` 함수 추가

```ts
export const Default: Story = {
  args: { ... },
};

export const SomeVariant: Story = {
  args: { ... },
  // 필요 시:
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('...'));
  },
};
```

## 주의사항

- JSX를 스토리에서 직접 사용하지 않으면 `.stories.ts`, JSX 렌더링이 필요하면 `.stories.tsx`
- 이미 story 파일이 존재하면 덮어쓰기 전에 사용자에게 확인한다
- `argTypes`에서 이벤트 핸들러 prop(`onClick`, `onChange` 등)은 `table: { disable: true }` 또는 `args`에서 `fn()`으로 처리한다
- 컴포넌트에 defaultProps나 기본값이 있으면 `table.defaultValue.summary`에 반영한다
