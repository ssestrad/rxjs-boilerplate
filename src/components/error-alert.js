import Component from 'component';
import style from './error-alert.css';

export default class ErrorAlert extends Component {
  constructor(message = 'Error') {
    super({ className: style.errorAlert });
    this.updateText(message);
  }
}
