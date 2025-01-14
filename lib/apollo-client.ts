import { gql, HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const BATCHES_QUERY = gql`
  query UserList {
    batches(batchDate: 1735689600000) { 
      batchId
      batchName
      batchStyle
      batchNumber
    }
  }
`;

export interface Batch {
  batchId: string,
  batchName: string,
  batchStyle: string,
  batchNumber: number
}

export interface GetBatchesResponse {
  batches: Batch []
}

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL,
    }),
  });
});