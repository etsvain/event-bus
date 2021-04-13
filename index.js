class EventBus {
  constructor() {
    this.events = this.events || {};
  }
  emit = function (type, ...args) {
    let e;
    e = this.events[type];
    if (!e) return; // 不存在时忽略
    // 查看这个type的event有多少个回调函数，如果有多个需要依次调用。
    if (Array.isArray(e)) {
      for (let i = 0; i < e.length; i++) {
        e[i].apply(this, args);
      }
    } else {
      e[0].apply(this, args);
    }
  };
  on = function (type, fun) {
    const e = this.events[type];

    if (!e) {
      // 如果从未注册过监听函数，则将函数放入数组存入对应的键名下
      this.events[type] = [fun];
    } else {
      // 如果注册过，则直接放入
      e.push(fun);
    }
  };
  off = function (type, fun) {
    const e = this.events[type];
    if (e) {
      // 如果从注册过监听函数，则清空
      this.events[type] = null;
    }
  };
}

const eventBus = new EventBus();
export default eventBus;
