import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<StoryArgs> = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "secondary", "outline", "destructive"],
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
type Story = StoryObj<StoryArgs>;
type StoryArgs = typeof Badge;

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: ({ variant }) => <Badge variant={variant}>Default</Badge>,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: ({ variant }) => <Badge variant={variant}>Secondary</Badge>,
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: ({ variant }) => <Badge variant={variant}>Outline</Badge>,
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: ({ variant }) => <Badge variant={variant}>Destructive</Badge>,
};
