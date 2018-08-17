import PokemonCard from '../src/components/PokemonCard';
import PokemonDetail from '../src/components/PokemonDetail';
import TypeLabel from '../src/components/TypeLabel';
import LoadingScreen from '../src/components/LoadingScreen';
import FavButton from '../src/components/FavButton';

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
    component: PokemonDetail,
    name: 'ポケモン詳細',
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
  },
  {
    component: LoadingScreen,
    name: 'モンボ'
  },
  {
    component: FavButton,
    name: 'お気に入り',
    props: {
      isFaved: false,
      handleFavorite: () => {}
    }
  }
];
