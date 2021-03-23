const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage'
}

const app = setup(options);

const draw = new PIXI.Graphics();
draw.lineStyle(3, 0x3700eb);

// PRIMEIRO CIRCULO
// draw.moveTo(360, 120);
// draw.quadraticCurveTo(540, 120, 540, 300);
// draw.quadraticCurveTo(540, 480, 360, 480);
// draw.quadraticCurveTo(180, 480, 180, 300);
// draw.quadraticCurveTo(180, 120, 360, 120);
draw.beginFill(0x01cbdb, 0.5);

draw.moveTo(360, 120);
draw.bezierCurveTo(480, 120, 540, 180, 540, 300);
draw.bezierCurveTo(540, 420, 480, 480, 360, 480);

draw.bezierCurveTo(240, 480, 180, 420, 180, 300);
draw.bezierCurveTo(180, 180, 240, 120, 360, 120);

app.stage.addChild(draw);