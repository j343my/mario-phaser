export default class {
  load(loader) {
    loader.tilemap('tilemap', 'json/level1.json', null, Phaser.Tilemap.TILED_JSON);
    loader.image('NESSuper3', 'images/NESSuper3.png');
  }
  draw(game) {
    let map = game.add.tilemap('tilemap');
    map.addTilesetImage('NESSuper3');
    let layer = map.createLayer('Layer1');
    //layer.resizeWorld();
  }
}
