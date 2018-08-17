import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();

const GET_FAVED_POKEMON_IDS = gql`
  query {
    favedPokemonIds @client
  }
`;

const favPokemon = (_, { id }, { cache }) => {
  let { favedPokemonIds } = cache.readQuery({
    query: GET_FAVED_POKEMON_IDS
  });

  favedPokemonIds = favedPokemonIds.includes(id)
    ? favedPokemonIds.filter(itemId => itemId !== id)
    : favedPokemonIds.concat(id);

  cache.writeQuery({
    query: GET_FAVED_POKEMON_IDS,
    data: { favedPokemonIds }
  });

  return { id };
};

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000',
  clientState: {
    defaults: {
      favedPokemonIds: []
    },
    resolvers: {
      Mutation: {
        favPokemon
      }
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
