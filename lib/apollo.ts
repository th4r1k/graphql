import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Authorization: process.env.NEXT_PUBLIC_API_ACESS_TOKEN || ""
    },
    cache: new InMemoryCache(),
})