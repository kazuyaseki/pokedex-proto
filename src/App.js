import React from 'react';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PokemonCard from './components/PokemonCard';

const query = gql`
  {
    pokemons(cursor: 0) {
      id
      jname
      ename
      base {
        attack
        defense
        hp
        spAtk
        spDef
        speed
      }
      type
    }
  }
`;

const App = () => (
  <Query query={query}>
    {({ loading, data }) => {
      if (loading) return <p>Loading...</p>;

      return data.pokemons.map(pokemon => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ));
    }}
  </Query>
);

export default App;
