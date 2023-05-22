import './App.css';
import RecipeList from './features/recipes/components/RecipeList';

function App() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-2'>
      <RecipeList />
    </div>
  );
}

export default App;
