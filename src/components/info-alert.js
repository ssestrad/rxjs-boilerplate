import Component from 'component';
import style from './info-alert.css';

export default class ErrorAlert extends Component {
  constructor(message = '') {
    super({ className: style.infoAlert });
    this.updateText(message);
  }
}
