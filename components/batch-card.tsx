import { Batch } from "../lib/apollo-client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import moment from 'moment';
  import { ExternalLinkIcon } from "@radix-ui/react-icons"
  import { Badge } from "@/components/ui/badge"

export default function BatchCard({batch} : {batch: Batch}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-l">
                    <div className="flex items-center justify-between bg-red-400">
                        <div>     
                            <div>Batch #{ batch.batchNumber }</div>                       
                            <div className="mt-2">
                                <Badge>{ batch.batchStatus }</Badge>
                            </div>
                        </div>
                        <div className="bg-green-400 parent flex flex-col"> 
                            <div className="child flex-1 mx-auto">
                            <a target="_blank" rel="noopener noreferrer" href={ batch.batchUrl }>
                                <ExternalLinkIcon width="22" height="22"></ExternalLinkIcon>
                            </a> 
                            </div>              
                        </div>
                    </div>                    
                </CardTitle>
                <CardDescription> 
                    </CardDescription>
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
