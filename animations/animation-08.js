const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage',
    fontFamilies: ['Stick', 'Ballet']
}

setup(options, (app) => {
    const style = new PIXI.TextStyle({
        fontFamily: 'Stick', fontSize: 80, fill: 0x000000,
    });

    const text = new PIXI.Text('Welcome!', style);
    text.pivot.set(text.width / 2, text.height / 2);
    text.x = 420; text.y = 300;
    app.stage.addChild(text);

    const ballA = new PIXI.Graphics();
    ballA.beginFill(0x000000);
    ballA.drawCircle(0, 0, 30);
    ballA.x = 120; ballA.y = 120;
    app.stage.addChild(ballA);

    const ballB = new PIXI.Graphics();
    ballB.beginFill(0x000000);
    ballB.drawCircle(0, 0, 30);
    ballB.x = 720; ballB.y = 480;
    app.stage.addChild(ballB);

    const timeline = gsap.timeline(
        { repeat: -1, yoyo: true }
    );
    
    // delay
    timeline.to({}, {duration: 0.5});

    timeline.from(
        [text, ballA, ballB],
        { pixi: { scale: 0 }, stagger: 0.1}
    );
    timeline.to(ballA, { pixi: { y: 480 }});
    timeline.to(ballB, { pixi: { y: 120 }}, '<');
    timeline.to(ballA, { pixi: { x: 720 }});
    timeline.to(ballB, { pixi: { x: 120 }}, '<');
    timeline.to(ballA, { pixi: { y: 120 }});
    timeline.to(ballB, { pixi: { y: 480 }}, '<');
    timeline.to(ballA, { pixi: { x: 120 }});
    timeline.to(ballB, { pixi: { x: 720 }}, '<');
});