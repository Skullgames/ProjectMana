ig.module('game.main')
.requires('impact.game','impact.font',
	// Level
	'game.levels.debug',
	// Debug
	'impact.debug.debug'
)

.defines(function(){

	MyGame = ig.Game.extend({

		// Load a font
		// font: new ig.Font( 'media/04b03.font.png' ),

		init: function() {
			// Load first Level
			this.loadLevel(LevelDebug);

			// Bind Keys

			ig.input.bind( ig.KEY.W, 						'up' );
			ig.input.bind( ig.KEY.D, 						'right' );
			ig.input.bind( ig.KEY.S, 						'down' );
			ig.input.bind( ig.KEY.A, 						'left' );
			ig.input.bind( ig.KEY.UP_ARROW, 		'up' );
			ig.input.bind( ig.KEY.RIGHT_ARROW, 	'right' );
			ig.input.bind( ig.KEY.DOWN_ARROW, 	'down' );
			ig.input.bind( ig.KEY.LEFT_ARROW, 	'left' );

			ig.input.bind( ig.KEY.SHIFT, 				'run' );

			ig.input.bind( ig.KEY.E, 						'attack' );

		},

		update: function() {
			// Update all entities and backgroundMaps
			this.parent();

			// The Camera
			var gameviewport= ig.game.screen;
			var gamecanvas= ig.system;
			var player = this.getEntitiesByType( EntityPlayer_1 )[0];
			gameviewport.x = player.pos.x - gamecanvas.width /2;
			gameviewport.y = player.pos.y - gamecanvas.height /2;
		},

		draw: function() {
			// Draw all entities and backgroundMaps
			this.parent();

			// Add your own drawing code here
			//var x = ig.system.width/2,
			//	y = ig.system.height/2;
			// this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
		}
	});

	// Start the Game with 60fps, a resolution of 320x240, scaled
	// up by a factor of 2
	ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
