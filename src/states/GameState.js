import RainbowText from 'objects/RainbowText';
import TilemapManager from 'objects/TilemapManager';
import CursorsManager from 'objects/CursorsManager';
import Player from 'objects/Player';
import Loader from 'objects/Loader';

class GameState extends Phaser.State {
	constructor() {
		super();
	}
	create() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 700;
		this.tilemapManager = new TilemapManager(this.game);
		this.player = new Player(this.game);
		this.cursors = new CursorsManager(this.game);
	 	this.layer = this.tilemapManager.resizeWorld();
	 	this.game.camera.follow(this.player);
	}
	preload() {
		 this.loader = new Loader(this.game.load);
	}
	update() {
		let action = true;
		this.game.physics.arcade.collide(this.player, this.layer);
		if (this.cursors.left.isDown) {
			this.player.body.velocity.x <= -120 ? this.player.body.velocity.x = -120 : this.player.body.velocity.x += -5;
			action = false;
		}
	  if (this.cursors.right.isDown) {
			this.player.body.velocity.x >= 120 ? this.player.body.velocity.x = 120 : this.player.body.velocity.x += 5;
			this.player.body.velocity.x += 5;
			action = false;
		}
		 if (this.cursors.up.justDown) {
			 if(this.player.body.onFloor()){
				 this.player.animations.play('jump');
				 this.player.body.velocity.y = -260;
				 action = false;
			 }
		}
		if(action) {
			if(this.player.body.onFloor())
			{
				this.player.animations.stop();
				this.player.frame = 2;
			}
			else {
				this.player.animations.play('jump');
			}
			this.player.body.velocity.x = 0;
		}
		else {
			if(this.player.body.onFloor()) {
				this.player.animations.play('walk');
			}
		}
	}
}

export default GameState;
