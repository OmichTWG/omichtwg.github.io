startGame({
	fps: 60,
	canvas: {
		selector: '#canvas',
		background: '#000'
	},
	deps: {
		sprites: {
			root: 'sprites',
			content: {
				chain: {
					chain: '0.png',
				},
				player: {
					player: 'player.png',
					playerJump: 'jump.png',
					playerCrawlStay: 'crawl/1.png',
					playerWalk: animationArray(3, 'walk', 'png'),
					playerRun: animationArray(3, 'run', 'png'),
					playerCrawl: animationArray(3, 'crawl', 'png'),
					playerClimb: animationArray(6, 'climb', 'png'),
				},
				strongman: {
					strongman: 'strongman.png',
					strongmanAlive: 'strongman-alive.png',
					strongmanEaten: 'strongmanEaten.png',
				},
				enemies: {
					rat: 'rat.png',
					shroomie: animationArray(6, 'shroomie', 'png'),
					lenny: 'lenny.png',
				},
				light: {
					light64: 'light64.png',
				},
				parallax: {
					pTop: 'pTop.png',
					pBottom: 'pBottom.png',
					front: 'front.png',
					back: 'back.png',
					back1: 'back1.png',
					fog: 'fog.png',
				},
				environment: {
					panel: 'panel.png',
					panelLight: 'panelLight.png',
					platform: 'platform.png',
					platformVertical: 'platformVertical.png',
					lever: 'lever.png',
					leverOn: 'leverOn.png',
					fragile: 'fragile.png',
					shroomJump: 'shroomJump.png',
					fragileRock: 'fragileRock.png',
				},
				buttons: {
					keyE: animationArray(1, 'E', 'png'),
				},
				plot: {
					body: 'body.png',
				},
				food: 'food.png',
				foodLight: 'foodLight.png',
				foodParticle: 'foodParticle.png',
				candle: animationArray(5, 'candle', 'png'),
				prompt: animationArray(7, 'prompt', 'png'),
				stairs: 'stairs.png',
				chainBig: 'chainBig.png',
				fire: animationArray(2, 'fire', 'png'),
				extinguished: 'extinguished.png',
				smoke: 'smoke.png',
				smokeShroom: 'smokeShroom.png',
				blood: 'blood.png',
				bloodMain: animationArray(2, 'blood', 'png'),
				next: 'next.png',
				outLight: 'outLight.png',
				shroomLight: 'shroomLight.png',
				stars: 'stars.png',
				sun: 'sun.png',
				moon: 'moon.png',
				backRock: 'backRock.png',
				logo: 'logo.png',
			}
		},
		tiles: {
			root: 'tiles',
			content: {
				default: 'default.png',
			}
		},
		scripts: {
			root: 'scripts',
			content: [
				'globals.min.js',
				'geometry.min.js',
				'sounds.min.js',
				'ui.min.js',
				'methods.min.js',
				'dialog.min.js',
			]
		},
		objects:{
			root: 'objects',
			content: {
				control: [
					'control.min.js',
					'camera.min.js',
					'physics.min.js',
					'solid.min.js',
					'lighting.min.js',
					'light.min.js',
					'parallax.min.js',
					'parallaxBack.min.js',
					'lightningEffect.min.js',
					'key.min.js',
					'withKey.min.js',
					'goToRoom.min.js',
					'next.min.js',
					'fragile.min.js',
					'checkPoint.min.js',
					'endCollider.min.js',
					'musicTrigger.min.js',
					'logo.min.js',
				],
				chain: [
					'chain.min.js',
					'link.min.js',
				],
				player: [
					'player.min.js',
				],
				strongman: [
					'strongman.min.js',
					'blood.min.js',
					'bloodMain.min.js',
				],
				food: [
					'food.min.js',
					'foodParticle.min.js',
					'foodLight.min.js',
				],
				enemies: [
					'rat.min.js',
					'shroomie.min.js',
					'lenny.min.js',
					'shroomStopper.min.js',
				],
				environment: [
					'candle.min.js',
					'panel.min.js',
					'panelController.min.js',
					'prompt.min.js',
					'stairs.min.js',
					'platform.min.js',
					'campfire.min.js',
					'smoke.min.js',
					'lever.min.js',
					'outLight.min.js',
					'fragilePlatform.min.js',
					'shroomJump.min.js',
					'black.min.js',
					'elevator.min.js',
					'sun.min.js',
				],
				plot: [
					'body.min.js',
					'plotTrigger.min.js',
				]
			}
		},
		rooms: {
			root: 'rooms',
			content: {
				logo: [
					'logo.js',
					[]
				],
				'start-room': [
					'start-room.js',
					[
						['default', 2],
						['default', 1],
						['default', 0],
						['default', -1],
					]
				],
				room1: [
					'room1.js',
					[
						['default', 2],
						['default', 1],
						['default', 0],
						['default', -1],
						['default', -2],
						['default', -3],
					]
				],
				room2: [
					'room2.js',
					[
						['default', 2],
						['default', 1],
						['default', 0],
						['default', -1],
						['default', -3],
					]
				],
				'final-room': [
					'final-room.js',
					[
						['default', 1],
						['default', 0],
						['default', -1],
						['default', -2],
					]
				]
			}
		},
		sounds: {
			root: 'sounds',
			content: {
				step: {
					step1: 'step1.mp3',
					step2: 'step2.mp3',
					step3: 'step3.mp3',
				},
				soundtrack: 'soundtrack.mp3',
				soundtrack2: 'soundtrack2.mp3',
				soundtrack3: 'soundtrack3.mp3',
				chain: 'chain.mp3',
				// drag: 'drag.mp3',
				eat: 'eat.mp3',
				fall: 'fall.mp3',
				panel: 'panel.mp3',
				lightning: 'lightning.mp3',
				squish: 'squish.mp3',
				panelDestroy: 'panelDestroy.mp3',
				moosh: 'moosh.mp3',
				wrong: 'wrong.mp3',
				platformMove: 'platformMove.mp3',
			}
		}
	},
	entryPoint: 'logo',
	debug: {
		fps: false,
		colliders: false,
	}
});
