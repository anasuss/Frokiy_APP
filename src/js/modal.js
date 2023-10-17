import { API_URL, PAGE, KEY } from './config.js';
import { AJAX } from './helper.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    numberOfRecipensPerPage: PAGE,
  },
  bookMarks: [],
};

const createRecipeObject = function (data) {
  let { recipe } = data.data;
  return {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    title: recipe.title,
    sourceUrl: recipe.source_url,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}/${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);
    if (state.bookMarks.some(bookMark => bookMark.id == id)) {
      state.recipe.bookMarked = true;
    } else {
      state.recipe.bookMarked = false;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image_url,
        publisher: rec.publisher,
        ...(rec.key && { key: rec.key }),
      };
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSearchResultsPage = function (page = 1) {
  state.search.page = page;
  const start = (page - 1) * state.search.numberOfRecipensPerPage;
  const end = page * state.search.numberOfRecipensPerPage;
  return state.search.results.slice(start, end);
};

const saveBookMarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookMarks));
};

const getBookMarks = function () {
  const get = localStorage.getItem('bookmarks');
  if (!get) return;
  state.bookMarks = JSON.parse(get);
};
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

export const addBookMark = function (recipe) {
  // add to bookMark
  state.bookMarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookMarked = true;
  saveBookMarks();
};

export const removeBookMark = function (id) {
  // add to bookMark
  const index = state.bookMarks.findIndex(bookMark => bookMark.id === id);

  if (id === state.recipe.id) state.recipe.bookMarked = false;
  state.bookMarks.splice(index, 1);
  saveBookMarks();
};

export const uploadRecipe = async function (recipe) {
  try {
    console.log(recipe);
    const ingredients = Object.entries(recipe)
      .filter(entry => entry[0].startsWith('ingredien') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3)
          throw Error('Wrong ingredient fromat! Please use the correct format');
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipeForApi = {
      cooking_time: +recipe.cookingTime,
      image_url: recipe.image,
      title: recipe.title,
      source_url: recipe.sourceUrl,
      publisher: recipe.publisher,
      servings: +recipe.servings,
      ingredients,
    };
    const data = await AJAX(`${API_URL}/?key=${KEY}`, recipeForApi);
    state.recipe = createRecipeObject(data);
    addBookMark(state.recipe);
  } catch (error) {
    throw error;
  }
};

function init() {
  getBookMarks();
}

init();
