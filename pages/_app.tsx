import '../styles/globals.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'


const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `http://localhost:3000/graphql`,
  cache,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;