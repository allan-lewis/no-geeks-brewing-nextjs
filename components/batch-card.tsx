import { Batch } from "../lib/apollo-client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function BatchCard({batch} : {batch: Batch}) {
    return (
        <Card>
        <CardHeader>
            <CardTitle>{ batch.batchName }</CardTitle>
            <CardDescription>{ batch.batchStyle }</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
        </Card>
    )
  }