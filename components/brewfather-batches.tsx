import { getClient, query } from '../lib/apollo-client';
import { gql } from "@apollo/client";
import BatchCard from "./batch-card"

const USER_LIST_QUERY = gql`
  query UserList {
    batches(batchDate: 0) {
      batchId
      batchName
    }
  }
`;

export interface Batch {
  batchId: string,
  batchName: string
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
        <h3 className="text-xl">Brewfather Batches</h3>
        <div>
      {data.batches.map(batch => (
        <BatchCard key={batch.batchId} batch={batch}></BatchCard> 
      ))}
            {/* <p className="text-center py-16">
                <em>No Brewfather batch data found.</em>
            </p> */}
        </div>
    </div>
  )
}
