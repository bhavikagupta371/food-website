
import { useEffect, useState } from "react";
import "./App.css";
import RecipeCard from "./RecipeCard";
function App() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInput,setUserInput] = useState("");
  useEffect(() => {
    getRecipeData();
  }, []);
  const getRecipeData = async () => {
    const apiResponse = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await apiResponse.json();
    console.log("Data from API: ", data);
    setRecipe(data.meals[0]);
    setLoading(false);
  };

  const getNewRecipe =async ()=>{
    setLoading(true)
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
    const resData = await res.json();
    setRecipe(resData.meals[0])
    setLoading(false)

  }
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* //RecipeCard */}
      <div className="max-w-xl mx-auto">
        <label
          for="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Search Recipe
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Example Burger"
          required
          value={userInput}
          onChange={(e)=>{
            setUserInput(e.target.value)
          }}
        />
        <button
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={()=>{
            getNewRecipe()
          }}
        >
          Search
        </button>
      </div>
      {loading ? "Fetching Data" : <RecipeCard recipe={recipe} />}
    </div>
  );
}
export default App;