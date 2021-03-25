const options = {
    width: 800,
    height: 600,
    backgroundColor: 0x78b0e9,
    targetSelector: '#stage'
}

const app = setup(options);


const randomBetween = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const clouds = [];

for(i = 0; i < 4; i++) {
    const cloud = new PIXI.Graphics();
    cloud.lineStyle(2, 0x143311);
    cloud.beginFill(0xFFFFFF);
    
    cloud.drawRoundedRect(0, 120, 80, 40, 15);
    cloud.x = randomBetween(0, 800);
    cloud.y = randomBetween(0, -120);

    cloud.moveTo(45, 130);
    cloud.lineTo(45, 145);
    
    cloud.moveTo(60, 130);
    cloud.lineTo(60, 145);
    
    app.stage.addChild(cloud);

    clouds.push(cloud);
}


const ground = new PIXI.Graphics();
ground.lineStyle(0.5, 0x143311);

ground.beginFill(0xc89858);

ground.drawRect(0, 520, 800, 300);

app.stage.addChild(ground);


const grass = new PIXI.Graphics();
grass.lineStyle(1, 0x143311);
grass.beginFill(0x96df2f);

grass.drawRect(0, 520, 800, 15);

app.stage.addChild(grass);

const pipe = new PIXI.Graphics();
pipe.lineStyle(2, 0x143311);
pipe.beginFill(0x00c800);

pipe.drawRect(540, 420, 60, 100);

app.stage.addChild(pipe);

const pipetop = new PIXI.Graphics();
pipetop.lineStyle(2, 0x143311);
pipetop.beginFill(0x00c800);

pipetop.drawRect(535, 400, 70, 30);

app.stage.addChild(pipetop);

const brick1 = new PIXI.Graphics();
brick1.lineStyle(2, 0x143311);
brick1.beginFill(0xe65f11);

brick1.drawRect(150, 360, 40, 40);

app.stage.addChild(brick1);

const brick2 = new PIXI.Graphics();
brick2.lineStyle(2, 0x143311);
brick2.beginFill(0xe65f11);

brick2.drawRect(230, 360, 40, 40);

app.stage.addChild(brick2);

const brick3 = new PIXI.Graphics();
brick3.lineStyle(2, 0x143311);
brick3.beginFill(0xe65f11);

brick3.drawRect(310, 360, 40, 40);

app.stage.addChild(brick3);

const question1 = new PIXI.Graphics();
question1.lineStyle(2, 0x143311);
question1.beginFill(0xfed627);

question1.drawRect(190, 360, 40, 40);

app.stage.addChild(question1);

const question2 = new PIXI.Graphics();
question2.lineStyle(2, 0x143311);
question2.beginFill(0xfed627);

question2.drawRect(270, 360, 40, 40);

app.stage.addChild(question2);

const question3 = new PIXI.Graphics();
question3.lineStyle(2, 0x143311);
question3.beginFill(0xfed627);

question3.drawRect(230, 240, 40, 40);

app.stage.addChild(question3);


gsap.from([ ground, grass ], {
    pixi: { y : 220 },
    duration: 2, 
    ease: 'expo',
    delay: 1
})

gsap.from([ pipe, pipetop ], {
    pixi: { alpha: 0, y : 220 },
    duration: 0.5, 
    ease: Power1.easeout,
    delay: 1.5
})

gsap.from([ brick1, question1, brick2, question2, brick3, question3 ], {
    pixi: { alpha: 0, y : 220 },
    duration: 0.5, 
    ease: Power1.easeout,
    delay: 2,
    stagger: 0.05
})

gsap.from( clouds, {
    pixi: { alpha: 0, x: '-=10' },
    ease: 'SlowMo',
    duration: 7,
    stagger: 0.5
});
