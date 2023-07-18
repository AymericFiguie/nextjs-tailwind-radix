import type { ArgTypes, Meta, StoryObj } from "@storybook/react";
import type { SelectContentProps } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from ".";

const argTypes: ArgTypes<SelectContentProps> = {
  position: {
    options: ["popper", "fixed"],
    control: { type: "radio" },
  },
};

const meta: Meta<typeof Select> = {
  title: "Interactions/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select & typeof SelectContent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    position: "popper",
  },
  render: ({ position }) => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selectionner un jeu" />
      </SelectTrigger>
      <SelectContent position={position}>
        <SelectItem value="trivia">Trivia</SelectItem>
        <SelectItem value="periodique">Periodique</SelectItem>
        <SelectItem value="memory">Memory</SelectItem>
        <SelectItem value="piano">Piano</SelectItem>
        <SelectItem value="selfie">Selfie</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Groups: Story = {
  args: {
    position: "popper",
  },
  render: ({ position }) => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selectionner un jeu" />
      </SelectTrigger>
      <SelectContent position={position}>
        <SelectGroup>
          <SelectLabel>Jeu de Quiz</SelectLabel>
          <SelectItem value="trivia">Trivia</SelectItem>
          <SelectItem value="periodique">Periodique</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Autres jeux</SelectLabel>
          <SelectItem value="memory">Memory</SelectItem>
          <SelectItem value="piano">Piano</SelectItem>
          <SelectItem value="selfie">Selfie</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
