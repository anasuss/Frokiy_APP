import 'core-js/stable';
import 'regenerator-runtime/runtime';
class SearchView {
  constructor() {}
  _parentEl = document.querySelector('.search');
  _message;
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearSearchInput();
    return query;
  }
  _clearSearchInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
