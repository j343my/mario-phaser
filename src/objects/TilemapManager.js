export default class {
  constructor(game) {
    this.layer = null;
    this.draw(game);
  }
  draw(game) {
    let map = game.add.tilemap('tilemap');
    map.addTilesetImage('NESSuper3');
    this.layer = map.createLayer('Layer1');
    map.setCollisionByExclusion([9], true, this.layer);
  }
  resizeWorld() {
    this.layer.resizeWorld();
    return this.layer;
  }
}
