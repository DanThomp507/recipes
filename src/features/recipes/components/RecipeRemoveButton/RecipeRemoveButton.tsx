import React from 'react';

interface RecipeRemoveButtonProps {
  onDelete: () => void;
}

const RecipeRemoveButton: React.FC<RecipeRemoveButtonProps> = ({
  onDelete,
}) => {
  const handleRemove = async () => {
    onDelete();
  };

  return (
    <button type='button' onClick={handleRemove}>
      Remove
    </button>
  );
};

export default RecipeRemoveButton;
