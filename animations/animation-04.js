const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage'
}

const app = setup(options);

const draw = new PIXI.Graphics();

draw.lineStyle(2, 0xdb2c00);
draw.drawRect(0, 0, 100, 100);
draw.x = 180;
draw.y = 120;

app.stage.addChild(draw); 

gsap.to(draw, {
    x: 720, y:120,
    duration: 3,
    delay: 1
});

