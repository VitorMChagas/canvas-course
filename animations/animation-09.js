const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage',
    fontFamilies: ['Open Sans']
}

setup(options, (app) => {
    const style = new PIXI.TextStyle({
        fontFamily: 'Open Sans', fontSize: 80, fill: 0xFFFFFF,
    });

    const block = new PIXI.Graphics();
    block.beginFill(0x000000);
    block.drawRect(0, 0, 800, 600);
    app.stage.addChild(block);
    
    const welcome = new PIXI.Text('WELCOME', style);
    welcome.pivot.set(welcome.width / 2, welcome.height / 2);
    welcome.x = 420; welcome.y = 120;
    app.stage.addChild(welcome);
    
    const to = new PIXI.Text('TO', style);
    to.pivot.set(to.width / 2, to.height / 2);
    to.x = 420; to.y = 290;
    app.stage.addChild(to);
    
    const stripe = new PIXI.Graphics();
    stripe.beginFill(0xFFFFFF);
    stripe.drawRect(0, 0, 800, 600);
    stripe.y = 400;
    app.stage.addChild(stripe);
    
    const html5 = new PIXI.Text('HTML5', style);
    html5.pivot.set(html5.width / 2, html5.height / 2);
    html5.tint = 0x000000;
    html5.x = 420; html5.y = 500;
    app.stage.addChild(html5);

    const timeline = gsap.timeline();

    timeline.to({}, {duration: 0.5});

    timeline.from(block, { pixi: { y: 600 }});
    timeline.from(welcome, { pixi: { x: 1200 }});
    timeline.from(to, { pixi: { x: -1200 }}, '<');
    timeline.from(stripe, { pixi: { y: 600 }}, '<');
    timeline.from(html5, { pixi: { alpha: 0, y: 600 }});
});