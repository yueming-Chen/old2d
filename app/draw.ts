class drawKernal {

  private _drawHZ = setInterval(() => { });
  private _registList = [];
  private refreshms = 10;

  constructor() { }

  run() {
    this._drawHZ = setInterval(this.register, this.refreshms);
  }

  stop() {
    clearInterval(this._drawHZ);
  }

  addRegister(cb: Function | Promise<any>) {
    // samecode
    if (this._registList.indexOf(cb) === -1) this._registList.push(cb);
  }

  register() {

  }

  removeRegister() {
    this._registList.map(v => { return v });
  }

}