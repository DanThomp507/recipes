import React from 'react';
import { Recipe } from '../../../../types';

interface RecipeItemProps {
  recipe: Recipe;
  onDelete: () => void;
  onEdit: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({
  recipe,
  onDelete,
  onEdit,
}) => {
  return (
    <div className='bg-white shadow-md p-4 rounded-lg mb-4 w-[80%]'>
      <h3 className='text-xl font-bold mb-2'>
        {recipe.info.name || 'Untitled'}
      </h3>
      <p className='mb-2'>
        Ingredients:{' '}
        {recipe.ingredients.length ? (
          recipe.ingredients.join(', ')
        ) : (
          <div>No ingredients - add some!</div>
        )}
      </p>
      <p className='mb-2'>Instructions:</p>
      <ul className='list-disc list-inside'>
        {recipe?.preparation.length ? (
          recipe.preparation.map((step, index) => <li key={index}>{step}</li>)
        ) : (
          <div>No instructions - add some!</div>
        )}
      </ul>
      <div className='flex items-center space-x-3'>
        <button
          onClick={onDelete}
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3'
        >
          Delete
        </button>
        <button
          onClick={onEdit}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3'
        >
          Edit
        </button>
      </div>
      <hr className='my-4' />
    </div>
  );
};

export default RecipeItem;
