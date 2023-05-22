import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import RecipeList from '../components/RecipeList';
import { deleteRecipe, updateRecipe } from '../store/recipeSlice';
import { RootState } from '../../../app/store';
import { recipe1, recipe2 } from './mocks/recipes';
import RecipeEditModal from '../components/RecipeEditModal';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { Recipe } from '../../../types';

const mockStore = configureStore<RootState, any>();

describe('RecipeList', () => {
  let store: MockStoreEnhanced<RootState, any>;
  let recipes: Recipe[];

  beforeEach(() => {
    recipes = [recipe1, recipe2];

    const initialState: RootState & PersistPartial = {
      recipe: {
        recipes: recipes,
        loading: false,
        error: null,
        _persist: { version: -1, rehydrated: false },
      },
      _persist: {
        version: -1,
        rehydrated: false,
      },
    };

    store = mockStore(initialState);
  });

  it('should render the recipe list with edit and delete buttons', () => {
    render(
      <Provider store={store}>
        <RecipeList />
      </Provider>
    );

    const editButtons = screen.getAllByText('Edit');
    const deleteButtons = screen.getAllByText('Delete');

    expect(editButtons).toHaveLength(2);
    expect(deleteButtons).toHaveLength(2);
  });

  it('should open the edit modal when the edit button is clicked', () => {
    render(
      <Provider store={store}>
        <RecipeList />
      </Provider>
    );

    const editButtons = screen.getByTestId('1-button');
    fireEvent.click(editButtons);

    const handleClose = jest.fn();
    render(
      <Provider store={store}>
        <RecipeEditModal recipe={recipe1} onClose={handleClose} />
      </Provider>
    );

    expect(screen.getByText(`${recipe1.info.name}`)).toBeInTheDocument();
  });

  it('should remove the recipe when the delete button is clicked', () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <RecipeList />
      </Provider>
    );

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(store.dispatch).toHaveBeenCalledWith(deleteRecipe(1));
  });

  it('should update the recipe when the save button is clicked in edit modal', () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <RecipeList />
      </Provider>
    );

    const editButtons = screen.getAllByText('Edit');
    fireEvent.click(editButtons[0]);

    const handleClose = jest.fn();
    render(
      <Provider store={store}>
        <RecipeEditModal recipe={recipe1} onClose={handleClose} />
      </Provider>
    );

    const nameInput = screen.getAllByLabelText('Name:')[0];
    fireEvent.change(nameInput, { target: { value: 'Updated Recipe' } });

    fireEvent.click(screen.getAllByText('Save')[0]);

    expect(store.dispatch).toHaveBeenCalledWith(
      updateRecipe({
        ...recipe1,
        info: { ...recipe1.info, name: 'Updated Recipe' },
      })
    );
  });
});
