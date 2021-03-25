const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage'
}

const app = setup(options);

const boxA = new PIXI.Graphics();
boxA.beginFill(0x0088e3);
boxA.drawRect(0, 0, 100, 100);
boxA.x = 180;
boxA.y = 180;
boxA.pivot.set(boxA.width / 2, boxA.height / 2);
app.stage.addChild(boxA); 

const boxB = new PIXI.Graphics();
boxB.beginFill(0x0088e3);
boxB.drawRect(0, 0, 100, 100);
boxB.x = 420;
boxB.y = 180;
boxB.pivot.set(boxB.width / 2, boxB.height / 2);
app.stage.addChild(boxB); 

const boxC = new PIXI.Graphics();
boxC.beginFill(0x0088e3);
boxC.drawRect(0, 0, 100, 100);
boxC.x = 660;
boxC.y = 180;
boxC.pivot.set(boxC.width / 2, boxC.height / 2);
app.stage.addChild(boxC); 

gsap.to([boxA, boxB, boxC], {
    pixi: { y: 420 },
    ease: 'bounce',
    stagger: 0.5,
    delay: 0.5
})

