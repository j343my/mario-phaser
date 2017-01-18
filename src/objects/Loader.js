export default class {
  constructor(loader) {
      loader.tilemap('tilemap', 'json/level1.json', null, Phaser.Tilemap.TILED_JSON);
      loader.image('NESSuper3', 'images/NESSuper3.png');
      loader.atlasJSONHash('mario', 'images/mario.png', 'json/mario.json');
  }
}
