import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from ".";
import { Button } from "../button";
import { Label } from "@radix-ui/react-label";

const meta: Meta<typeof Input> = {
  title: "Interactions/Input",
  component: Input,
  tags: ["autodocs"],
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

type DefaultProps = InputProps & {
  placeholderText: string;
  type: string;
};
type DefaultStory = StoryObj<DefaultProps>;
export const Default: DefaultStory = {
  args: {
    placeholderText: "Alexandre",
    type: "text",
  },
  argTypes: {
    placeholderText: {
      description: "Placeholder text",
      control: { type: "text" },
    },
    type: {
      description: "Input type",
      control: { type: "select" },
      options: ["text", "email", "password"],
    },
  },
  render: ({ placeholder, type }) => (
    <Input type={type} placeholder={placeholder} />
  ),
};

type WithLabelProps = DefaultProps & {
  labelText: string;
};
type StoryWithLabel = StoryObj<WithLabelProps>;
export const WithLabel: StoryWithLabel = {
  args: {
    labelText: "Prénom",
    placeholderText: "Alexandre",
    type: "text",
  },
  argTypes: {
    labelText: {
      description: "Label text",
      control: { type: "text" },
    },
    placeholderText: {
      description: "Placeholder text",
      control: { type: "text" },
    },
    type: {
      description: "Input type",
      control: { type: "select" },
      options: ["text", "email", "password"],
    },
  },
  render: ({ labelText, placeholder }) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="input">{labelText}</Label>
      <Input id="input" placeholder={placeholder} />
    </div>
  ),
};

type WithButtonProps = DefaultProps & {
  buttonText: string;
};
type StoryWithButton = StoryObj<WithButtonProps>;
export const WithButton: StoryWithButton = {
  args: {
    buttonText: "S'abonner",
    placeholderText: "Alexandre",
    type: "text",
  },
  argTypes: {
    buttonText: {
      description: "Button text",
      control: { type: "text" },
    },
    placeholderText: {
      description: "Placeholder text",
      control: { type: "text" },
    },
    type: {
      description: "Input type",
      control: { type: "select" },
      options: ["text", "email", "password"],
    },
  },
  render: ({ buttonText, placeholder, type }) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type={type} placeholder={placeholder} />
      <Button type="submit">{buttonText}</Button>
    </div>
  ),
};
