import { sanitize } from 'dompurify';

export default class Component {
  constructor({ elementType = 'div', className = 'component' } = {}) {
    this.$element = document.createElement(elementType);
    this.$element.className = className;
    this.children = [];
    this.displayType = this.$element.style.display;
  }

  add(component) {
    this.$element.appendChild(component.$element);
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index < 0) {
      throw new Error('Cannot remove component.');
    }
    this.children.splice(index, 1);
    this.$element.removeChild(component.$element);
  }

  clear() {
    while (this.children.length) {
      const child = this.children.pop();
      this.$element.removeChild(child.$element);
    }
  }

  show(displayType) {
    const display = displayType || this.displayType || 'block';
    this.$element.style.display = display === 'none' ? 'block' : display;
  }

  hide() {
    this.displayType = this.$element.style.display;
    this.$element.style.display = 'none';
  }

  updateText(text) {
    this.$element.innerText = text;
  }

  updateHtml(html) {
    this.$element.innerHTML = sanitize(html);
  }
}
