'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="text-center text-xl font-bold mb-16">
        NextJS/Tailwind/Radix/Shadcn
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex w-full justify-evenly items-center">
          <Button onClick={() => alert('ya')}>Button</Button>
          <Badge variant="outline">Badge</Badge>
        </div>
        <div className="flex w-full justify-evenly">
          <AlertDialog>
            <AlertDialogTrigger>Open alert</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Alert title ?</AlertDialogTitle>
                <AlertDialogDescription>
                  Try clicking outside of the alert !
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Dialog>
            <DialogTrigger>Open dialog</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog title ?</DialogTitle>
                <DialogDescription>
                  Try clicking outside of the dialog !
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
    </main>
  )
}
