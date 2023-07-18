import type { ArgTypes, Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from ".";
import { RadioGroupProps } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";

const meta: Meta<typeof RadioGroup> = {
  title: "Interactions/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    asChild: { control: { disable: true } },
    orientation: {
      description: "Ajust the position of the radio group items",
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
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
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ orientation }) => (
    <RadioGroup orientation={orientation} defaultValue="mosaique">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="mosaique" id="mosaique" />
        <Label htmlFor="mosaique">Vue en mosaïque</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="liste" id="liste" />
        <Label htmlFor="liste">Vue en liste</Label>
      </div>
    </RadioGroup>
  ),
};
