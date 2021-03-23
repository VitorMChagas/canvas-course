const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage'
}

const app = setup(options);

const draw = new PIXI.Graphics();



draw.lineStyle(20, 0xdb2c00);

draw.drawPolygon(
    120, 120, 240, 120, 240, 240, 120, 240, 120, 120
);

draw.lineStyle(20, 0x3214db, 0.5, 1);

draw.beginFill(0x01cbdb, 0.5);

draw.drawPolygon(
    180, 180, 300, 180, 300, 300, 180, 300, 180, 180
);


// draw.drawPolygon(
//     120, 120, 240, 120, 240, 240
// );

// draw.drawCircle(360, 120, 50);

// draw.drawEllipse(480, 120, 50, 70);

// draw.drawRect(120, 360, 200, 100);

// draw.drawRoundedRect(420, 240, 100, 100, 30);

// draw.drawStar(600, 360, 5, 50);


app.stage.addChild(draw); 