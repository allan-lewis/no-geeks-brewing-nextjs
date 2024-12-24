import type { Session } from "next-auth"
import BrewfatherBatches from "./brewfather-batches"

export default function BatchData({ session }: { session: Session | null }) {
  if (session?.user) {
    return (
      <div className="flex w-full flex-col gap-4 rounded-md bg-gray-100 p-4">
        <h2 className="text-2xl">Signed in as {session.user.name}</h2>
        <div className="flex flex-col rounded-md bg-neutral-100">
          <BrewfatherBatches />
        </div>
      </div>
    )
  }

  return (
    <p className="w-full rounded-md bg-gray-100 text-center py-16">
      Please <em>Sign In</em> to view Brewfather batch data.
    </p>
  )
}