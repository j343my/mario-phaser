import RainbowText from 'objects/RainbowText';
import TilemapManager from 'objects/TilemapManager';
class GameState extends Phaser.State {
	constructor() {
		super();
		this.tilemapManager = new TilemapManager();
		this.capguy = null;
	}
	create() {
		this.tilemapManager.draw(this.game);
		// sprite
	  this.capguy = this.game.add.sprite(30, 250, 'mario', 'walk/0001');
	 	this.capguy.scale.setTo(1.2,1.2);

	 // animation
	 this.capguy.animations.add('walk', Phaser.Animation.generateFrameNames('walk/', 1, 2, '', 4), 10, true, false);
	 this.capguy.animations.play('walk');
	}
	preload() {
		 this.tilemapManager.load(this.game.load);
		 this.game.load.atlasJSONHash('mario', '../images/mario.png', '../json/mario.json');
	}
	update() {
		this.capguy.x += 2;
	}
}

export default GameState;
