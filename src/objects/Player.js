export default class extends Phaser.GameObjectFactory{
  constructor(game) {
    super(game);
    this.sprite = this.sprite(50, 250, 'mario', 'walk/0001');
    this.setProperties();
    this.setPhysics(Phaser.Physics.ARCADE);
    return this.sprite;
  }
  setProperties() {
    this.sprite.scale.setTo(1,1);
    this.sprite.animations.add('walk', Phaser.Animation.generateFrameNames('walk/', 1, 2, '', 4), 20, true, false);
    this.sprite.animations.add('jump', Phaser.Animation.generateFrameNames('jump/', 1, 1, '', 4), 10, true, false);
  }
  setPhysics(PhysicsType){
    this.game.physics.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.y = 0;

    //this.sprite.body.linearDamping = 1;
  }
}
