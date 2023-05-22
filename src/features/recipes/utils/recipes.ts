import { Recipe } from '../../../types';

export const recipes: Recipe[] = [
  {
    info: {
      type: 'public',
      name: 'oat latte',
      status: 'published',
    },
    ingredients: ['One espresso shot', '150ml oat milk'],
    preparation: [
      'Pour espresso shot into a mug',
      'Boil the oat milk',
      'Pour the oat milk into the mug',
    ],
    version: 2,
    id: 0,
  },
  {
    info: {
      type: 'private',
      name: 'birthday treat',
      status: 'draft',
    },
    ingredients: [
      'One teaspoon of instant coffee',
      '150ml milk',
      'One teaspoon of honey',
      'tiny marshmello',
    ],
    preparation: [
      'Pour espresso shot into a mug',
      'Boil the milk',
      'Add marshmello',
      'Pour the milk into the mug',
      'Add honey and stir',
    ],
    version: 2,
    id: 1,
  },
  {
    info: {
      type: 'private',
      name: 'Lisa secret coffee',
      status: 'draft',
    },
    ingredients: [],
    preparation: [],
    version: 2,
    id: 2,
  },
  {
    info: {
      type: 'public',
      name: 'almond flat white',
      status: 'published',
    },
    ingredients: ['Two espresso shot', '100ml almond milk'],
    preparation: [
      'Pour espresso into a mug',
      'Boil the almond milk',
      'Pour the almond milk into the mug',
    ],
    version: 2,
    id: 3,
  },
  {
    info: {
      type: 'public',
      name: 'a...',
      status: 'draft',
    },
    ingredients: ['Two '],
    preparation: [],
    version: 2,
    id: 4,
  },
];

export const createRecipe: Recipe = {
  info: {
    type: 'public',
    name: 'mocha',
    status: 'published',
  },
  ingredients: [
    'One espresso shot',
    '150ml oat milk',
    'hot chocolate',
    'whipped cream',
  ],
  preparation: [
    'Pour espresso shot into a mug',
    'Boil the oat milk',
    'Pour the oat milk into the mug',
    'Pour hot chocolate into the mug',
    'Added whipped cream on top',
  ],
  version: 2,
  id: 5,
};
