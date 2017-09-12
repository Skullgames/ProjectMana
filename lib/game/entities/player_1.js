ig.module('game.entities.player_1')
.requires('impact.entity')

.defines(function() {

  EntityPlayer_1 = ig.Entity.extend({

    size: {x:16, y:16},
    name: "player_1",
    maxVel: {x: 220, y:220},
    walkspeed: 150,
    runspeed: 70,
    lastmovement: null,

    // Collide
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.ACTIVE,

    // TODO Collide with Enemies

    animSheet: new ig.AnimationSheet('media/character/prototype_hero.png', 32, 32),

    init: function(x,y,settings) {

      this.parent(x, y, settings);

      // Idle Animation this.addAnim( name, frameTime, sequence, [stop] )
      this.addAnim('idle_up',     1,      [7]);
      this.addAnim('idle_right',  1,      [14]);
      this.addAnim('idle_down',   1,      [0]);
      this.addAnim('idle_left',   1,      [21]);

      // Walk Animation
      this.addAnim('walk_up',     0.11,    [8,9,10,11,12,13],    false);
      this.addAnim('walk_right',  0.11,    [15,16,17,18,19,20],  false);
      this.addAnim('walk_down',   0.11,    [1,2,3,4,5,6],        false);
      this.addAnim('walk_left',   0.11,    [22,23,24,25,26,23],  false);

      // Run Animation
      this.addAnim('run_up',      0.1,    [35,36,37,38,39,40],  false);
      this.addAnim('run_right',   0.1,    [42,43,44,45,46,47],  false);
      this.addAnim('run_down',    0.1,    [28,29,30,31,32,33],  false);
      this.addAnim('run_left',    0.1,    [49,50,51,52,53,54],  false);

      // Attack Animation
      //this.addAnim('attack_up',   0.1,    [53,54,55,56,57],     true);
      //this.addAnim('attack_right',0.1,    [58,59,60,61,62],     true);
      //this.addAnim('attack_down', 0.1,    [48,49,50,51,52],     true);
      //this.addAnim('attack_left', 0.1,    [63,64,65,66,67],     true);
    },

    update: function() {
      this.parent();

      // Walk & Run

      if(ig.input.pressed("run")) {
        this.walkspeed += this.runspeed ;
      }

      if(ig.input.released("run")) {
        this.walkspeed -= this.runspeed;
      }

      if(ig.input.state("up")) {
        this.vel.y = -this.walkspeed;
        this.lastmovement = "up";
        if(ig.input.state("run")) {
          this.currentAnim = this.anims.run_up;
        } else {
          this.currentAnim = this.anims.walk_up;
        }
      }

      if(ig.input.state("right")) {
        this.vel.x = this.walkspeed;
        this.lastmovement = "right";
        if(ig.input.state("run")) {
          this.currentAnim = this.anims.run_right;
        } else {
          this.currentAnim = this.anims.walk_right;
        }
      }

      if(ig.input.state("down")) {
        this.vel.y = this.walkspeed;
        this.lastmovement = "down";
        // Fix that running in right/down direction shows right animation
        if(ig.input.state("right")) {
          if(ig.input.state("run")) {
            this.currentAnim = this.anims.run_right;
          } else {
            this.currentAnim = this.anims.walk_right;
          }
        } else if(ig.input.state("run")) {
          this.currentAnim = this.anims.run_down;
        } else {
          this.currentAnim = this.anims.walk_down;
        }

      }

      if(ig.input.state("left")) {
        this.vel.x = -this.walkspeed;
        this.lastmovement = "left";
        if(ig.input.state("run")) {
          this.currentAnim = this.anims.run_left;
        } else {
          this.currentAnim = this.anims.walk_left;
        }
      }

      // After releasing all movement keys

      if(ig.input.released("up") || ig.input.released("right") || ig.input.released("down") || ig.input.released("left")) {
        this.standing = true;
        this.vel.x = 0;
        this.vel.y = 0;

        if(this.lastmovement === "up") {
          this.currentAnim = this.anims.idle_up;
        } else if(this.lastmovement === "right") {
          this.currentAnim = this.anims.idle_right;
        } else if(this.lastmovement === "down") {
          this.currentAnim = this.anims.idle_down;
        } else if(this.lastmovement === "left") {
          this.currentAnim = this.anims.idle_left;
        }

      }

    },

  });

})
