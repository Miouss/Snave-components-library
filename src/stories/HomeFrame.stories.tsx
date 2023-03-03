import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HomeFrame } from "../components";

export default {
  title: "HomeFrame",
  component: HomeFrame,
} as ComponentMeta<typeof HomeFrame>;

export const Default: ComponentStory<typeof HomeFrame> = () => <HomeFrame />;
