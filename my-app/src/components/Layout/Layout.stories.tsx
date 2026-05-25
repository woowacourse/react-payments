import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const meta = {
  title: "Components/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Routes>
          <Route element={<Story />}>
            <Route
              index
              element={
                <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                  <h1 style={{ fontSize: 20, fontWeight: 700 }}>페이지 콘텐츠</h1>
                  <p style={{ fontSize: 14, color: "#8c8c8c" }}>Layout 내부에 렌더링되는 영역입니다.</p>
                </div>
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
