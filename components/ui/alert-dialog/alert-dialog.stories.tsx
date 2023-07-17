import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from ".";
import { Button, ButtonProps } from "@/components/ui/button";

const meta: Meta<StoryArgs> = {
  title: "Overlay/Alert Dialog",
  component: AlertDialog,
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
type Story = StoryObj<StoryArgs>;
type StoryArgs = {
  title: string;
  description: string;
  triggerText: string;
  cancelText: string;
  actionText: string;
  actionButtonVariant: ButtonProps["variant"];
} & Parameters<typeof AlertDialog>[0];

export const Default: Story = {
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Publier la story</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Mise en ligne de la story 🚀</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4">
            <span>
              Cette story s&apos;apprête a être mise en ligne. Elle sera
              disponible publiquement à l&apos;adresse suivante :
            </span>
            <a
              href="https://story.tl/test"
              target="_blank"
              className="font-semibold hover:underline"
            >
              https://story.tl/test
            </a>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction variant={"default"}>Publier</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Supprimer la story</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Êtes-vous certain ?</AlertDialogTitle>
          <AlertDialogDescription>
            Il est impossible d&apos;annuler la suppression d&apos;une story.
            Souhaitez-vous continuer ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction variant={"destructive"}>
            Supprimer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const Informative: Story = {
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Passer en brouillon</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Passage en mode brouillon 📝</AlertDialogTitle>
          <AlertDialogDescription>
            La story est passé en mode brouillon. Elle n&apos;est plus
            disponible publiquement.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction variant={"secondary"}>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
