import { query } from '../lib/apollo-client';
import BatchCard from "./batch-card"
import { GetBatchesResponse, BATCHES_QUERY } from "../lib/apollo-client"

export default async function BrewfatherBatches() {
  const { data, loading, error } = await query<GetBatchesResponse>({ query: BATCHES_QUERY });

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error.message}</h1>

  return (
    <div className="rounded-t-md bg-neutral-200 p-4">
        <h3 className="text-xl mb-4">Brewfather Batches ({data.batches.length})</h3>
        <div>
      {data.batches.map(batch => (
        <BatchCard key={batch.batchId} batch={batch}></BatchCard> 
      ))}
        </div>
    </div>
  )
}
