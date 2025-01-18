import { Batch } from '../lib/apollo-client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import moment from 'moment'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Badge } from '@/components/ui/badge'

export default function BatchCard({batch} : {batch: Batch}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-l">
                    <div className="flex  justify-between">
                        <div>     
                            <div>Batch #{ batch.batchNumber }</div>                       
                            { badge(batch.batchStatus) }
                        </div>
                        <div className="parent flex flex-col"> 
                            <div className="child flex-1">
                                { share(batch.batchUrl) }
                            </div>              
                        </div>
                    </div>                    
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <div>
                        <div className="text-base text-black">{ batch.batchName }</div>
                        <div className="text-sm text-muted-foreground">{ batch.batchStyle }</div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="text-sm">{ moment(batch.batchDate).format('LL') }</div>
            </CardFooter>
        </Card>
    )
  }

  function badge(status: string) {
    return (
        <div className="mt-2">
            <Badge variant="outline">{ status }</Badge>
        </div>
    );
  }

  function share(url: string) {
    if (url == null) return <div></div>

    return (
        <a target="_blank" rel="noopener noreferrer" href={ url }>
            <ExternalLinkIcon width="22" height="22"></ExternalLinkIcon>
        </a> 
    );
  }
