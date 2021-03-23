const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage'
}

const app = setup(options);

const draw = new PIXI.Graphics();

//QUADRADO
draw.lineStyle(4, 0xdb2c00)
draw.beginFill(0x5fdebc);

draw.moveTo(120, 120);
draw.lineTo(240, 120);
draw.lineTo(240, 240);
draw.lineTo(120, 240);
draw.lineTo(120, 120);

//TRIANGULO
draw.lineStyle(2, 0x3700eb);
draw.beginFill(0xf5de31)

draw.moveTo(360, 180);
draw.lineTo(360, 180);
draw.lineTo(420, 120);
draw.lineTo(480, 180);
draw.lineTo(360, 180);

//RETANGULO
draw.lineStyle(0);
draw.beginFill(0x31f5e8)

draw.moveTo(600, 120);
draw.lineTo(660, 120);
draw.lineTo(660, 240);
draw.lineTo(600, 240);
draw.lineTo(600, 120);

//QUADRADO 2
draw.endFill();
draw.lineStyle(2, 0x3700eb);
draw.moveTo(120, 360);
draw.lineTo(240, 360);
draw.lineTo(240, 480);
draw.lineTo(120, 480);
draw.lineTo(120, 360);


app.stage.addChild(draw);