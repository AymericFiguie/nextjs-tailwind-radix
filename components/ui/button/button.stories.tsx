import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Interactions/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    asChild: { control: { disable: true } },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
    },
    variant: {
      options: [
        "default",
        "secondary",
        "link",
        "outline",
        "destructive",
        "ghost",
      ],
      control: { type: "select" },
    },
  },
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
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    size: "default",
    variant: "default",
  },
  render: ({ size, variant }) => (
    <Button variant={variant} size={size}>
      {size === "icon" ? "👍" : "Cliquez-ici"}
    </Button>
  ),
};

export const Secondary: Story = {
  args: {
    size: "default",
    variant: "secondary",
  },
  render: ({ size, variant }) => (
    <Button size={size} variant={variant}>
      {size === "icon" ? "🔧" : "Action secondaire"}
    </Button>
  ),
};

export const Outline: Story = {
  args: {
    size: "default",
    variant: "outline",
  },
  render: ({ size, variant }) => (
    <Button size={size} variant={variant}>
      {size === "icon" ? "ℹ️" : "Information"}
    </Button>
  ),
};

export const Destructive: Story = {
  args: {
    size: "default",
    variant: "destructive",
  },
  render: ({ size, variant }) => (
    <Button size={size} variant={variant}>
      {size === "icon" ? "❌" : "Supprimer"}
    </Button>
  ),
};

export const Link: Story = {
  args: {
    size: "default",
    variant: "link",
  },
  render: ({ size, variant }) => (
    <Button size={size} variant={variant}>
      {size === "icon" ? "🔗" : "Lien"}
    </Button>
  ),
};

export const Ghost: Story = {
  args: {
    size: "default",
    variant: "ghost",
  },
  render: ({ size, variant }) => (
    <Button size={size} variant={variant}>
      {size === "icon" ? "📞" : "Contact"}
    </Button>
  ),
};
