import { fromEvent } from 'rxjs';
import {
  map,
  filter,
  distinctUntilChanged,
  debounceTime,
  switchMap,
} from 'rxjs/operators';
import Component from 'component';
import Logger from 'logger';
import SearchInput from 'components/search-input';
import ErrorAlert from 'components/error-alert';
import InfoAlert from 'components/info-alert';
import ArticleCard from 'components/article-card';
import WikipediaService from 'services/wikipedia';
import style from './main.css';

const logger = new Logger('Main');

export default class Main extends Component {
  constructor() {
    super({ className: style.mainView });
    this.setupViews();
    this.setupStreams();
  }

  setupViews() {
    this.searchInput = new SearchInput();
    this.add(this.searchInput);
    this.errorAlert = new ErrorAlert('Error loading data.');
    this.errorAlert.hide();
    this.add(this.errorAlert);
    this.noResultsAlert = new InfoAlert('No Results');
    this.noResultsAlert.hide();
    this.add(this.noResultsAlert);
    this.content = new Component();
    this.add(this.content);
  }

  setupStreams() {
    const searchStream$ = fromEvent(this.searchInput.$element, 'keyup');
    const wikipediaService = new WikipediaService();

    searchStream$.pipe(
      map(event => event.target.value),
      filter(text => !!text),
      distinctUntilChanged(),
      debounceTime(250),
      switchMap(wikipediaService.search),
    ).subscribe(
      this.processSearchResults.bind(this),
      this.processSearchError.bind(this),
    );
  }

  processSearchResults(results) {
    logger.info(results);
    this.errorAlert.hide();
    this.content.clear();
    if (results.length) {
      this.noResultsAlert.hide();
      this.addItems(results);
    } else {
      this.noResultsAlert.show();
    }
  }

  processSearchError(err) {
    this.errorAlert.show();
    logger.error(err);
  }

  addItems(items) {
    items.forEach(item => this.content.add(new ArticleCard({
      image: (item.thumbnail || {}).source,
      title: item.title,
      description: item.snippet,
      link: item.fullurl,
    })));
  }
}
