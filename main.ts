sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Sith_Destroyer.destroy()
    Sith_Destroyer.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 4 1 1 1 3 3 2 3 1 1 1 . . 
5 5 4 4 2 1 2 3 3 2 3 2 1 2 2 . 
5 5 4 4 2 1 2 3 2 3 3 2 1 2 2 2 
5 5 4 4 2 1 2 3 2 3 3 2 1 2 2 . 
. . . 4 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Jedi_Falcon, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Jedi_Falcon.destroy()
    info.changeLifeBy(-1)
})
let Dart: Sprite = null
let Sith_Destroyer: Sprite = null
let Jedi_Falcon: Sprite = null
Jedi_Falcon = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . 8 8 8 . . . . . . . . . . . . . . . . . . 
. . . 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . 8 6 6 8 8 . . . . . . . . . . . . . . . . 
. . . 8 6 6 6 8 8 . . . . . . . . . . . . . . . 
. . . 8 6 6 6 6 8 8 . . . . . . . . . . . . . . 
. . . 8 6 6 6 6 6 8 8 8 8 8 8 8 8 . . . . . . . 
. . . 8 6 6 6 6 6 6 6 6 6 9 9 9 8 8 . . . . . . 
. . . 8 6 6 6 7 7 7 2 2 2 9 9 9 9 8 . . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Jedi_Falcon.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(Jedi_Falcon, 200, 200)
game.onUpdateInterval(500, function () {
    Sith_Destroyer = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f . . . . . . . 
. . f 2 d d d d 2 f . . . . . . 
. . f d 2 d d 2 d f . . . . . . 
. . f d 2 d d 2 d f . . . . . . 
. f d d d 2 2 d d d f . . . . . 
. f 2 2 2 2 2 2 2 2 f . . . . . 
. f d d d 2 2 d d d f . . . . . 
. . f d 2 d d 2 d f . . . . . . 
. . f 2 d d d d 2 f . . . . . . 
. . . f f f f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Sith_Destroyer.setVelocity(-100, 0)
    Sith_Destroyer.setPosition(180, Math.randomRange(0, 120))
})
