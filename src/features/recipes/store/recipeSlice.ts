import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Recipe } from '../../../types';
import { recipes } from '../utils/recipes';

interface RecipeState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  recipes: recipes || [],
  loading: false,
  error: null,
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    updateRecipe: (state, action: PayloadAction<Recipe>) => {
      console.log(action.payload);
      return {
        ...state,
        recipes: state.recipes.map((recipe) => {
          return recipe.id === action.payload?.id ? action.payload : recipe;
        }),
      };
    },
    deleteRecipe: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
    },
  },
});

export const { updateRecipe, deleteRecipe } = recipeSlice.actions;

export const selectRecipes = (state: RootState) => state.recipe.recipes;

export default recipeSlice.reducer;
