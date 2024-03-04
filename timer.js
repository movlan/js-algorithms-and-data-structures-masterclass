class Timer {
  constructor() {
    this._st = null;
  }

  start() {
    if (!this._st) {
      this._st = Date.now();
      console.log("Timer started");
    } else {
      console.error("Timer is already running");
    }
  }

  end() {
    if (this._st) { 
      const et = Date.now();
      const tp = et - this._st;
      this._st = null;
      console.log(`Time elapsed: ${tp}ms`);
    } else {
      console.error("Timer is not running");
    }
  }
}

export default Timer;