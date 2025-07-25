import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-4">Recipe Sharing App</h1>
      <SearchBar />
      {/* Other components like FilterDropdown and RecipeList */}
    </div>
  );
}
