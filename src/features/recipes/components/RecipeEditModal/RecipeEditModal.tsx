import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateRecipe } from '../../store/recipeSlice';
import { Recipe } from '../../../../types';

interface RecipeEditModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeEditModal: React.FC<RecipeEditModalProps> = ({
  recipe,
  onClose,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(recipe.info.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(', '));
  const [preparation, setPreparation] = useState(recipe.preparation.join('\n'));

  const handleSave = () => {
    const updatedRecipe: Recipe = {
      ...recipe,
      id: recipe.id,
      info: {
        ...recipe.info,
        name,
      },
      ingredients: ingredients
        .split(',')
        .map((ingredient) => ingredient.trim()),
      preparation: preparation.split('\n').map((step) => step.trim()),
    };
    dispatch(updateRecipe(updatedRecipe));
    onClose();
  };

  return (
    <div
      data-testid={`${recipe?.id}-edit`}
      className='fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-500'
    >
      <div className='bg-white rounded-lg p-6 w-[500px]'>
        <h2 className='text-2xl font-bold mb-4 text-black'>Edit Recipe</h2>
        <form>
          <div className='mb-4'>
            <label className='block font-semibold text-black'>Name:</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border text-black border-gray-300 rounded p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block font-semibold text-black'>
              Ingredients:
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className='border border-gray-300 rounded p-2 w-full text-black'
            />
          </div>
          <div className='mb-4'>
            <label className='block font-semibold text-black'>
              Preparation:
            </label>
            <textarea
              value={preparation}
              onChange={(e) => setPreparation(e.target.value)}
              className='border border-gray-300 rounded p-2 w-full text-black'
            />
          </div>
          <div className='flex justify-between w-full'>
            <button
              data-testid={`${recipe?.id}-Save`}
              type='button'
              onClick={handleSave}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
            >
              Save
            </button>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeEditModal;
