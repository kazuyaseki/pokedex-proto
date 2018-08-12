import React from 'react';
import styled from 'styled-components';
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

const PokemonList = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(194, 8, 25);
`;

const App = () => (
  <PokemonList>
    <Query query={query}>
      {({ loading, data }) => {
        if (loading) return <p>Loading...</p>;

        return data.pokemons.map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ));
      }}
    </Query>
  </PokemonList>
);

export default App;
