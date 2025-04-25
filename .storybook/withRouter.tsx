// .storybook/decorators/withRouter.tsx
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

export const withRouter = (Story: () => ReactNode) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);
