import Component from 'component';
import style from './search-input.css';

export default class SearchInput extends Component {
  constructor() {
    super({ elementType: 'input', className: style.searchInput });
    this.$element.placeholder = 'Enter a Search Query';
  }
}
