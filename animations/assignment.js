const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage'
}

const app = setup(options);

const draw = new PIXI.Graphics();

//EYEBROW
draw.lineStyle(10, 0x00000);
draw.moveTo(120, 230);
draw.bezierCurveTo(180, 120, 540, 120, 600, 150);

//OUTER CIRCLE
draw.lineStyle(3, 0x00000);
draw.beginFill(0xa86232, 0.8);
draw.moveTo(360, 210);
draw.bezierCurveTo(240, 240, 240, 360, 360, 390);
draw.bezierCurveTo(480, 360, 480, 240, 360, 210);

//INNER CIRCLE
draw.lineStyle(3, 0x424242);
draw.beginFill(0x00000, 0.2);
draw.drawCircle(360, 300, 30);

//EYE SHAPE
draw.beginFill(0x424242, 0.2);
draw.moveTo(180, 300);
draw.bezierCurveTo(300, 180, 420, 180, 540, 300);
draw.bezierCurveTo(420, 420, 300, 420, 180, 300);


app.stage.addChild(draw); 