import PokemonCard from '../src/components/PokemonCard';
import TypeLabel from '../src/components/TypeLabel';
import { pokemon } from '../data/sampleData/data';

export default [
  {
    component: PokemonCard,
    name: 'ポケモンカード',
    props: {
      pokemon
    }
  },
  {
    component: TypeLabel,
    name: 'タイプ: 草',
    props: {
      type: '草'
    }
  }
];