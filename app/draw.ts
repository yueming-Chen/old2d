
export interface Image {
  path: string;
  posX: number | string;
  posY: number | string;
}
export class drawKernal {
  // 重新繪圖頻率
  // 重新繪圖主程式
  private _drawHZ: number = 50;

  private _drawMain = setInterval(() => { }, this._drawHZ);

  private _registList: any[] = [];

  private refreshms = 10;

  private imageBaseUrl = '/images/';

  private _Images: Image[] = [];

  constructor() { }

  run() {
    this._drawMain = setInterval(this.draw, this.refreshms);
  }

  stop() {
    clearInterval(this._drawMain);
  }

  addRegister(cb: Function | Promise<any>) {
    // samecode
    if (this._registList.indexOf(cb) === -1) this._registList.push(cb);
  }

  draw() {
    this._Images.map(v => {
      let { path, posX, posY } = v;
      path = this.imageBaseUrl + path;
      // canvas paint on (path,posX,posY)
    });
  }

  removeRegister() {
    this._registList.map(v => { return v });
  }

  addImages(image: Image) {
    this._Images.push(image);
  }

}