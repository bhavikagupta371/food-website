// import React from "react"
// export default function recipeCard(){


// <div>
//     <img src="https://myfoodstory.com/rajma-recipe/"></img>
// <h2>
//     Rajma Kari
// </h2>
// <div>
//     <h3>Vegetarian</h3>
//     <h3>indian</h3>
// </div>
// <p>
// Heat the oil in a large frying pan over a low-medium heat. Add the onion
//         and a pinch of salt and cook slowly, stirring occasionally, until
//         softened and just starting to colour. Add the garlic, ginger and
//         coriander stalks and cook for a further 2 mins, until
//         fragrant.\r\n\r\nAdd the spices to the pan and cook for another 1 min,
//         by which point everything should smell aromatic. Tip in the chopped
//         tomatoes and kidney beans in their water, then bring to the
//         boil.\r\n\r\nTurn down the heat and simmer for 15 mins until the curry
//         is nice and thick. Season to taste, then serve with the basmati rice and
//         the coriander leaves.
//         </p>
// <h4 className="font-bold">Ingredients</h4>
// <ul className="divide-y divide-gray-200 mb-8">
//     <li>
//         vegetable oil
//     </li>
//     <li>
//         Onion
//     </li>
// </ul>
// <a
//         href=""
//         className="text-white px-8 py-4  mt-10 rounded shadow bg-blue-500"
//       >
//         Go To Source
//       </a>
// </div>
// }
import React from "react";
export default function RecipeCard({recipe}) {
  return (
    <div className="max-w-xl mt-12 bg-white rounded-md shadow-md p-4 mx-auto">
      <img
        className="h-64 mx-auto"
        src={recipe.strMealThumb}
      />
      <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
      <div className="flex justify-between font-bold">
        <h3>{recipe.strCategory}</h3>
        <h3>{recipe.strArea}</h3>
      </div>
      <p>
       {recipe.strInstructions}
      </p>
      <h4 className="font-bold">Ingredients</h4>
      <ul className="divide-y divide-gray-200 mb-8">
      <li className="capitalize">{recipe.strIngredient1}</li>
      <li className="capitalize">{recipe.strIngredient2}</li>
      <li className="capitalize">{recipe.strIngredient3}</li>
      <li className="capitalize">{recipe.strIngredient4}</li>
      <li className="capitalize">{recipe.strIngredient5}</li>
      <li className="capitalize">{recipe.strIngredient6}</li>
      </ul>
      <a
        href={recipe.strYoutube}
        target="_blank"
        className="text-white px-8 py-4  mt-10 rounded shadow bg-blue-500"
      >
        Go To Source
      </a>
    </div>
  );
}