import * as modal from './modal.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultsView.js';
import bookMarkView from './views/bookMarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
if (module.hot) {
  module.hot.accept(function () {});
}

const controlServing = function (updateTo) {
  modal.updateServings(updateTo);
  recipeView.update(modal.state.recipe);
};

const controlRecipes = async function () {
  try {
    //render spinner
    recipeView.renderSpinner();
    // loading recipe
    const id = window.location.hash.slice(1);
    if (!id) return;
    await modal.loadRecipe(id);
    resultView.update(modal.getSearchResultsPage());
    const { recipe } = modal.state;
    // rendering recipe
    recipeView.render(recipe);
    bookMarkView.render(modal.state.bookMarks);
  } catch (error) {
    recipeView.renderError();
    console.error(error);
  }
};

const controlResultSearch = async function () {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await modal.loadSearchResults(query);
    // redner results
    resultView.render(modal.getSearchResultsPage());
    paginationView.render(modal.state.search);
  } catch (error) {
    recipeView.renderError();
    console.error(error);
  }
};
const PagesToRender = function (goTo) {
  resultView.render(modal.getSearchResultsPage(goTo));
  paginationView.render(modal.state.search);
};

const controllerBookMarks = function () {
  if (modal.state.recipe.bookMarked)
    modal.removeBookMark(modal.state.recipe.id);
  else modal.addBookMark(modal.state.recipe);
  recipeView.update(modal.state.recipe);
  bookMarkView.render(modal.state.bookMarks);
};

const controllBookMarks = function () {
  bookMarkView.render(modal.state.bookMarks);
};

const controllAddRecipe = async function (recipe) {
  try {
    addRecipeView.renderSpinner();
    await modal.uploadRecipe(recipe);
    addRecipeView.renderMessage();
    bookMarkView.render(modal.state.bookMarks);
    window.history.pushState(null, '', `#${modal.state.recipe.id}`);
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, 2000);
  } catch (error) {
    addRecipeView.renderError(error);
  }
};
const init = function () {
  bookMarkView.addHandelerBookMarks(controllBookMarks);
  recipeView.handlerRender(controlRecipes);
  recipeView.handlerUpdateServing(controlServing);
  recipeView.addHandlerBookMark(controllerBookMarks);
  searchView.addHandlerSearch(controlResultSearch);
  paginationView.addHandlerClick(PagesToRender);
  addRecipeView.addHandlerUpload(controllAddRecipe);
};

init();
