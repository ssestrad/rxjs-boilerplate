import Component from 'component';
import { tif } from 'template-operators';
import style from './article-card.css';

export default class ArticleCard extends Component {
  constructor(content) {
    super({ className: style.articleCard });
    const {
      image,
      title,
      description,
      link,
    } = content;
    this.image = image;
    this.description = description;
    this.updateHtml(`
      ${tif(image)(`
        <div class='${style.thumbnail}'>
          <img src='${image}' alt='${title}' class='${style.image}' />
        </div>
      `)}
      <p class='${style.description}'>${description}</p>
      <a href='${link}' class='${style.link}' name='${title}'></a>
    `);
    this.$element.querySelector('a').setAttribute('target', '_blank');
  }
}
