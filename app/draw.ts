export class drawKernal {
  // 重新繪圖頻率
  // 重新繪圖主程式
  private _drawHZ: number = 50;

  private _drawMain = setInterval(() => { }, this._drawHZ);

  private _registList: any[] = [];
  private refreshms = 10;

  constructor() { }

  run() {

    this._drawMain = setInterval(this.register, this.refreshms);
  }

  stop() {
    clearInterval(this._drawMain);
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