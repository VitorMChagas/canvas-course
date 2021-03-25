const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage'
}

const app = setup(options);

const box = new PIXI.Graphics();
box.beginFill(0x0088e3);
box.drawRect(0, 0, 200, 200);
box.x = 180;
box.y = 180;
app.stage.addChild(box); 

box.pivot.set(box.width / 2, box.height / 2);

const point = new PIXI.Graphics();
point.beginFill(0xf54242);
point.drawCircle(0, 0, 10);
point.x = 180;
point.y = 180;
app.stage.addChild(point); 

gsap.to(point, {
    pixi: { x: 660, y: 420 },
    duration: 1, delay: 0.5
});

gsap.to(box, {
    pixi:{ 
        x: 660, y: 420, angle: 180,
    },
    duration: 1, delay: 0.5
});

