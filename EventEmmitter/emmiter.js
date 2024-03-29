class Emmiter {
  constructor() {
    this.events = [];
  }
  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }
  emit(type) {
    if (this.events[type]) {
      this.events[type].forEach(function (listener) {
        listener();
      });
    }
  }
}

// function Emmiter() {
//   this.events = [];
// }

// Emmiter.prototype.on = function (type, listener) {
//   this.events[type] = this.events[type] || [];
//   this.events[type].push(listener);
// };

// Emmiter.prototype.emit = function (type) {
//   if (this.events[type]) {
//     this.events[type].forEach(function (listener) {
//       listener();
//     });
//   }
// };

module.exports = Emmiter;
