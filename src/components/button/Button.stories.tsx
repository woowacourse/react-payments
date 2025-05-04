import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { useState } from "react";

const meta = {
	title: "components/button",
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		onClick: () => console.log("클릭"),
	},
	render: () => {
		const [clicked, setClicked] = useState(false);

		return (
			<>
				<Button type="button" onClick={() => setClicked(true)}>
					기본
				</Button>
				{clicked && <p>클릭됨!</p>}
			</>
		);
	},
};
