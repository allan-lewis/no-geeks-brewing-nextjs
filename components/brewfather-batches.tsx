import { query } from '../lib/apollo-client';
import { gql } from "@apollo/client";
import BatchCard from "./batch-card"

const USER_LIST_QUERY = gql`
  query UserList {
    batches(batchDate: 0) {
      batchId
      batchName
      batchStyle
    }
  }
`;

export interface Batch {
  batchId: string,
  batchName: string,
  batchStyle: string
}

export interface GetBatchesResponse {
  batches: Batch []
}

export default async function BrewfatherBatches() {
  const { data, loading, error } = await query<GetBatchesResponse>({ query: USER_LIST_QUERY });

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error.message}</h1>

  return (
    <div className="rounded-t-md bg-neutral-200 p-4">
        <h3 className="text-xl mb-4">Brewfather Batches</h3>
        <div>
      {data.batches.map(batch => (
        <BatchCard key={batch.batchId} batch={batch}></BatchCard> 
      ))}
        </div>
    </div>
  )
}
