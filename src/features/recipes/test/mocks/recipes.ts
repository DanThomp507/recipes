import { Recipe } from '../../../../types';

export const recipe1: Recipe = {
  info: {
    type: 'Dessert',
    name: 'Chocolate Cake',
    status: 'Published',
  },
  ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Eggs', 'Butter', 'Milk'],
  preparation: [
    'Preheat the oven to 180°C.',
    'Mix the dry ingredients together in a bowl.',
    'Add the wet ingredients and mix until smooth.',
    'Pour the batter into a greased cake pan.',
    'Bake for 30 minutes or until a toothpick inserted into the center comes out clean.',
    'Let the cake cool before serving.',
  ],
  version: 1,
  id: 1,
};

export const recipe2: Recipe = {
  info: {
    type: 'Main Course',
    name: 'Spaghetti Bolognese',
    status: 'Published',
  },
  ingredients: [
    'Spaghetti',
    'Ground Beef',
    'Tomatoes',
    'Onion',
    'Garlic',
    'Herbs',
  ],
  preparation: [
    'Cook the spaghetti according to package instructions.',
    'In a separate pan, cook the ground beef until browned.',
    'Add the chopped onion and garlic to the pan and cook until softened.',
    'Pour in the tomatoes and herbs, and simmer for 20 minutes.',
    'Serve the Bolognese sauce over the cooked spaghetti.',
  ],
  version: 1,
  id: 2,
};
