import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'


export default function Modal({children}:{children: React.ReactNode}): JSX.Element {
    return (
        <AlertDialog>
          <AlertDialogTrigger asChild><Button>Add Quote</Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              {children}
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    )
}