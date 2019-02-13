import { ajax } from 'rxjs/ajax';
import { map, concatMap } from 'rxjs/operators';
import config from 'config';

const DEFAULT_THUMB_SIZE = 100;

export default class WikipediaService {
  constructor({ thumbSize = DEFAULT_THUMB_SIZE } = {}) {
    const { base, searchQuery, imageQuery } = config.wikipediaApi;
    const baseUrl = `${base}?origin=*&`;
    this.searchUrl = `${baseUrl}${searchQuery}`;
    this.imageUrl = `${baseUrl}${imageQuery}`.replace('{thumbsize}', thumbSize);
  }

  search = query => ajax.getJSON(this.searchUrl.replace('{query}', query)).pipe(
    concatMap(({ query: { search } }) => {
      const pageIds = search.map(({ pageid }) => pageid);
      return pageIds.length
        ? this.getImages(pageIds).pipe(
          map(({ query: { pages } }) => search.map(page => ({ ...page, ...pages[page.pageid] }))),
        )
        : Promise.resolve([]);
    }),
  );

  getImages(pageIds) {
    return ajax.getJSON(this.imageUrl.replace('{pageids}', pageIds.join('|')));
  }
}
