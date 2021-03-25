const options = {
    width: 800,
    height: 600,
    backgroundColor: 0x001424,
    targetSelector: '#stage'
}

const app = setup(options);

const randomBetween = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const stars = [];

for(i = 0; i < 100; i++) {
    const star = new PIXI.Graphics();
    star.beginFill(0xffffeb);
    star.drawStar(0, 0, 5, 3, 0.5);
    star.x = randomBetween(0, 800);
    star.y = randomBetween(0, 600);
    app.stage.addChild(star);

    stars.push(star);
}

const mountain = new PIXI.Graphics();
mountain.beginFill(0x381900);
mountain.moveTo(0, 420);

mountain.bezierCurveTo(240, 300, 540, 540, 800, 420);

mountain.lineTo(800, 600);
mountain.lineTo(0, 600);

app.stage.addChild(mountain);

gsap.from(mountain, {
    pixi: { y : 220 },
    duration: 2, 
    ease: 'expo',
    delay: 1
})

gsap.from(stars, {
    pixi: { alpha: 0, scale: 0, y: '+=20' },
    duration: 0.5,
    stagger: 0.05
});
