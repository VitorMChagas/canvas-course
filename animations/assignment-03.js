const options = {
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    targetSelector: '#stage',
    fontFamilies: ['Shojumaru']
}

setup(options, (app) => {
    const style = new PIXI.TextStyle({
        fontFamily: 'Shojumaru', fill: 0xeb344f, fontSize: 160,
    });

    const stripeA = new PIXI.Graphics();
    stripeA.beginFill(0xFFFFFF);
    stripeA.drawRect(0, 0, 1400, 600);
    stripeA.x = 400;
    stripeA.y = 290;
    stripeA.pivot.set(700, 600);
    stripeA.angle = -37;
    app.stage.addChild(stripeA);

    const stripeB = new PIXI.Graphics();
    stripeB.beginFill(0xFFFFFF);
    stripeB.drawRect(0, 0, 1400, 600);
    stripeB.x = 390;
    stripeB.y = 310;
    stripeB.pivot.set(700, 600);
    stripeB.angle = 143;
    app.stage.addChild(stripeB);

    const stripeC = new PIXI.Graphics();
    stripeC.beginFill(0x000000);
    stripeC.drawEllipse(0, 0, 20, 2);
    stripeC.x = -40;
    stripeC.y = 300;
    app.stage.addChild(stripeC);

    const lets = new PIXI.Text("LET'S", style);
    lets.pivot.set(lets.width / 2, lets.height / 2);
    lets.x = 400; lets.y = 200;
    app.stage.addChild(lets);

    const rock = new PIXI.Text("ROCK", style);
    rock.pivot.set(rock.width / 2, rock.height / 2);
    rock.x = 400; rock.y = 360;
    app.stage.addChild(rock);
    
    const timeline = gsap.timeline();

    timeline.to({}, { duration: 0.5 });

    timeline.to(stripeC, { x: 1000 });
    timeline.from(stripeA, { y: 300 });
    timeline.from(stripeB, { y: 300 }, '<');
    timeline.from(stripeA, { angle: 0 });
    timeline.from(stripeB, { angle: 180 }, '<');
    timeline.to(stripeA, { pixi: { x: -400 }});
    timeline.to(stripeB, { pixi: { x: 1200 }}, '<');

    timeline.from([lets, rock], { pixi: { scale: 0, alpha: 0 }, duration: 1, ease: 'back'});
    timeline.to([lets], { pixi: { scale: 2, alpha: 0 }, delay: 1 });
    timeline.to([rock], { pixi: { scale: 4, alpha: 0 }});
    
});