import { View } from './View';
import icons from 'url:../../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
class bookMarkView extends View {
  _parentEl = document.querySelector('.bookmarks');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

  constructor() {
    super();
  }
  addHandelerBookMarks(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data.map(this._generateMarkuEl).join('');
  }
  _generateMarkuEl(el) {
    const id = window.location.hash.slice(1);
    return `<li class="preview">
        <a class="preview__link  ${
          id === el.id ? 'preview__link--active' : ''
        }" href="#${el.id}">
          <figure class="preview__fig">
            <img src="${el.image}" alt="${el.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${el.title}</h4>
            <p class="preview__publisher">${el.publisher}</p>
            <div class="recipe__user-generated ${el.key ? '' : 'hidden'}">
            <svg>
            <use href="${icons}#icon-user"></use>
            </svg>
            </div>
          </div>
        </a>
      </li>`;
  }
}

export default new bookMarkView();
