import { Batch } from "../lib/apollo-client"

export default function BatchCard({batch} : {batch: Batch}) {
    return (
        <div>#{batch.batchNumber}: { batch.batchName } ({ batch.batchStyle})</div>
    )
  }