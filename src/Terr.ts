import Unit from './Unit';

interface ITrunk {
  width: number;
  height: number;
  left: number;
  top: number;
}

export interface ITerrConfig {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  trunk?: ITrunk;
  src?: string;
}

export interface ITerr {
  width: number;
  height: number;
  left: number;
  top: number;
  trunk: ITrunk;
  src: string;
  paint(ctx: CanvasRenderingContext2D): void;
}

export default class extends Unit implements ITerr {
  public width: number = 0;
  public height: number = 0;
  public left: number = 0;
  public top: number = 0;
  public trunk: ITrunk = {
    width: 0,
    height: 0,
    left: 0,
    top: 0
  };
  public src: string = null;

  constructor(config?: ITerrConfig) {
    super();
    config && Object.assign(this, config);
  }

  public paint(ctx: CanvasRenderingContext2D) {
    const { width, height, left, top, trunk, src } = this;
    const img = new Image();
    img.src = src;
    ctx.beginPath();
    ctx.drawImage(img, left, top, width, height);
    // ctx.fillStyle = 'red';
    // ctx.rect(trunk.left, trunk.top, trunk.width, trunk.height);
    // ctx.fill();
  }
}
