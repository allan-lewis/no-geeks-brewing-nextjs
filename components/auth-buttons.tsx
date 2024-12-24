import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { auth, signIn, signOut } from "@/auth"

export default async function AuthButtons() {
  const session = await auth()

  return (
    <div>
      { !session &&<form action={async () => {
          "use server"
          await signIn("authentik")
        }}>
        <Button type="submit">Sign In</Button>
      </form> }
      { session &&<form action={async () => {
          "use server"
          await signOut()
        }}>
        <Button variant="ghost" type="submit">Sign Out</Button>
      </form> }
    </div>
  )
}