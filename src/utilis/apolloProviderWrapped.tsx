import React, { ReactNode } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Crée une nouvelle instance Apollo Client
const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // Mode SSR activé si côté serveur
        link: new HttpLink({
            uri: 'http://localhost:1337/graphql', // Remplacez par l'URL de votre API GraphQL
            credentials: 'same-origin', // Envoie des cookies avec les requêtes
        }),
        cache: new InMemoryCache(),
    });
};

// Initialise Apollo Client, avec hydratation pour le client
export const initializeApollo = (initialState: NormalizedCacheObject | null = null) => {
    const client = apolloClient ?? createApolloClient();

    // Hydrate le cache Apollo côté client si initialState est fourni
    if (initialState) {
        const existingCache = client.extract();
        client.cache.restore({
            ...existingCache,
            ...initialState,
        });
    }

    // Toujours créer un nouveau client en SSR
    if (typeof window === 'undefined') return client;

    // Réutilise une seule instance Apollo côté client
    if (!apolloClient) apolloClient = client;

    return client;
};

// Composant pour envelopper ApolloProvider
interface ApolloProviderWrapperProps {
    children: ReactNode;
    initialApolloState?: NormalizedCacheObject | null; // Permet d'hydrater l'état initial
}

const ApolloProviderWrapper = ({ children, initialApolloState }: ApolloProviderWrapperProps) => {
    const client = initializeApollo(initialApolloState);
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
