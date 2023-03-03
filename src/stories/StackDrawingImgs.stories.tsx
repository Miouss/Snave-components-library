import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StackDrawingImgs } from "../components";

export default {
  title: "Stack Drawing Images",
  component: StackDrawingImgs,
} as ComponentMeta<typeof StackDrawingImgs>;

export const Default: ComponentStory<typeof StackDrawingImgs> = () => <StackDrawingImgs />;
