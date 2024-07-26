export const pubSub = {
  events: {},
  subscribe: function (evName, func) {
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(func);
  },
  unsubscribe: function (evName, func) {
    console.log(func);
    if (this.events[evName]) {
      this.events[evName] = this.events[evName].filter((fn) => func !== fn);
    }
  },
  publish: function (evName, data) {
    if (this.events[evName]) {
      this.events[evName].forEach((func) => func(data));
    }
  },
};
