import { auth } from "@/auth"
import BatchData from "@/components/batch-data"

export default async function Page() {
  const session = await auth()
 
  return (
    <div className="space-y-2">
      <BatchData session={session} />
    </div>
  )

}
