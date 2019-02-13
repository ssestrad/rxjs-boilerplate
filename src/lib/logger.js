/* eslint-disable no-console */
export default class Logger {
  constructor(name) {
    this.name = name;
    ['log', 'info', 'warn', 'error'].forEach((logType) => {
      this[logType] = (...args) => this.record(logType, args);
    });
  }

  record(type, args) {
    console[type](`[${this.name}]`, ...args);
  }
}
