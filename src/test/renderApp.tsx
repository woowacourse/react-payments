import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "@/App";

export const renderApp = (initialEntries: string[] = ["/"]) => {
  const user = userEvent.setup();
  const utils = render(
    <MemoryRouter initialEntries={initialEntries}>
      <AppRoutes />
    </MemoryRouter>,
  );
  return { user, ...utils };
};
