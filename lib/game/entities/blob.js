ig.module('game.entities.blob')
.requires('impact.entity')

.defines(function() {

  EntityBlob = ig.Entity.extend({

    size: {x:16, y:16},
    maxVel: {x: 220, y:220},
    walkspeed: 150,
    runspeed: 70,
    lastmovement: null,

    // Collide
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.ACTIVE,

    // TODO Collide with Enemies

    animSheet: new ig.AnimationSheet('media/character/prototype_blob.png', 32, 32),

    init: function(x,y,settings) {

      this.parent(x, y, settings);

      // Idle Animation this.addAnim( name, frameTime, sequence, [stop] )
      //this.addAnim('idle_up',     1,      [7]);
      //this.addAnim('idle_right',  1,      [14]);
      //this.addAnim('idle_down',   1,      [0]);
      //this.addAnim('idle_left',   1,      [21]);

      // Walk Animation
      //this.addAnim('walk_up',     0.11,    [8,9,10,11,12,13],    false);
      //this.addAnim('walk_right',  0.11,    [15,16,17,18,19,20],  false);
      //this.addAnim('walk_down',   0.11,    [1,2,3,4,5,6],        false);
      //this.addAnim('walk_left',   0.11,    [22,23,24,25,26,23],  false);

      // Attack Animation
      //this.addAnim('attack_up',   0.1,    [53,54,55,56,57],     true);
      //this.addAnim('attack_right',0.1,    [58,59,60,61,62],     true);
      //this.addAnim('attack_down', 0.1,    [48,49,50,51,52],     true);
      //this.addAnim('attack_left', 0.1,    [63,64,65,66,67],     true);
    },

    update: function() {


    });

  })
