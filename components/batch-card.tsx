import { Batch } from "./brewfather-batches"

export default function BatchCard({batch} : {batch: Batch}) {
    return (
        <div>{ batch.batchName } ({ batch.batchStyle})</div>
    )
  }