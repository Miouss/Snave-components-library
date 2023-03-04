import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectsPrez } from "../components";

export default {
  title: "Projects Presentation",
  component: ProjectsPrez,
} as ComponentMeta<typeof ProjectsPrez>;

export const Default: ComponentStory<typeof ProjectsPrez> = () => <ProjectsPrez />;
