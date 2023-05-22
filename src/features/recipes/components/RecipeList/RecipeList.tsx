import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import {
  selectRecipes,
  deleteRecipe,
  createRecipe,
} from '../../store/recipeSlice';
import { Recipe } from '../../../../types';
import RecipeItem from '../RecipeItem';
import RecipeEditModal from '../RecipeEditModal';
import { createRecipe as recipeObject } from '../../utils/recipes';

export default function RecipeList() {
  const recipes = useAppSelector(selectRecipes);
  const dispatch = useAppDispatch();
  const [startIndex, setStartIndex] = useState(0);
  const [editRecipe, setEditRecipe] = useState<Recipe | null>(null);
  const [hasCreated, setHasCreated] = useState(false);

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 2);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 2);
  };

  const handleEditModalClose = () => {
    setEditRecipe(null);
  };
  const handleDelete = (recipeId: number) => {
    dispatch(deleteRecipe(recipeId));
  };

  const handleCreate = () => {
    dispatch(createRecipe(recipeObject));
    setHasCreated(!hasCreated);
  };

  const handleEdit = (recipe: Recipe) => {
    setEditRecipe(recipe);
  };

  const displayedRecipes = recipes?.slice(startIndex, startIndex + 2);
  const isNextDisabled = startIndex + 2 >= (recipes?.length || 0);

  return (
    <div className='container mx-auto py-6'>
      <h2 className='text-2xl font-bold mb-4'>Recipes</h2>
      <button
        onClick={handleCreate}
        disabled={hasCreated}
        className={
          'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg my-3'
        }
      >
        Create Recipe
      </button>
      {displayedRecipes?.length === 0 ? (
        <div>No recipes available.</div>
      ) : (
        <>
          {displayedRecipes?.map((recipe: Recipe, index) => (
            <RecipeItem
              recipe={recipe}
              key={index}
              onEdit={() => handleEdit(recipe)}
              onDelete={() => handleDelete(recipe.id)}
            />
          ))}

          <div className='flex justify-between mt-4 w-[80%]'>
            <button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className={`${
                startIndex === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-300 hover:bg-gray-400'
              } text-gray-800 font-bold py-2 px-4 rounded-lg ${
                startIndex === 0 ? 'opacity-50' : ''
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`${
                isNextDisabled
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-300 hover:bg-gray-400'
              } text-gray-800 font-bold py-2 px-4 rounded-lg ${
                isNextDisabled ? 'opacity-50' : ''
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
      {editRecipe && (
        <RecipeEditModal recipe={editRecipe} onClose={handleEditModalClose} />
      )}
    </div>
  );
}
