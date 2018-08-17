import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import PokemonDetail from './PokemonDetail';
import LoadingScreen from './LoadingScreen';

const query = gql`
  query pokemon($id: ID) {
    pokemon(id: $id) {
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
    types {
      jname
      cname
    }
  }
`;

const PokemonDetailPage = ({ match }) => (
  <Query query={query} variables={{ id: match.params.id }}>
    {({ loading, data }) => {
      if (loading) return <LoadingScreen />;
      return <PokemonDetail pokemon={data.pokemon} />;
    }}
  </Query>
);

export default PokemonDetailPage;
