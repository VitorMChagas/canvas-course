const options = {
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    targetSelector: '#stage',
    fontFamilies: ['Creepster'],
    resources: { 
        house: 'https://i.imgur.com/wKZ8PXn.jpg',
        lightning: 'https://i.imgur.com/ORpey0Q.jpg',
        pumpkin: 'https://i.imgur.com/kLOdPAe.png',
        cat: 'https://i.imgur.com/0U16N38.png',
        catrun: 'https://i.imgur.com/g7igkbG.png'
    }
}

setup(options, (app, resources) => {
    const style = new PIXI.TextStyle({
        fontFamily: 'Creepster',
        fontSize: 100, fill: 0xffffff,
        dropShadow: true, 
        stroke: "#540303", strokeThickness: 7
    });

    const title = new PIXI.Text('Halloween', style)
    title.pivot.set(title.width / 2, title.height / 2);
    title.x = 800/2;
    title.y = 130;
    title.alpha = 0.6;
    app.stage.addChild(title);

    const title2 = new PIXI.Text('Party', style)
    title2.pivot.set(title2.width / 2, title2.height / 2);
    title2.x = 800/2;
    title2.y = 210;
    title2.alpha = 0.6;
    app.stage.addChild(title2);

    const lightning = new PIXI.Sprite(
        resources.lightning.texture
    );
    lightning.pivot.set(lightning.width / 2, lightning.height / 2);
    lightning.width = lightning. width / 5;    
    lightning.height = lightning. height / 5;
    lightning.x = 800/2;
    lightning.y = 600/2;
    lightning.alpha = 0.3;
    app.stage.addChild(lightning);
    
    const house = new PIXI.Sprite(
        resources.house.texture
    );
    house.pivot.set(house.width / 2, house.height / 2);
    house.width = house. width / 3;    
    house.height = house. height / 3;
    house.x = 800/2;
    house.y = 600/2;
    house.alpha = 0;
    app.stage.addChild(house);

    const catrun = new PIXI.Sprite(
        resources.catrun.texture
    );
    catrun.pivot.set(catrun.width / 2, catrun.height / 2);
    catrun.width = catrun. width / 4;    
    catrun.height = catrun. height / 4;
    catrun.x = 20;
    catrun.y = 500;
    catrun.alpha = 0;
    app.stage.addChild(catrun);
    
    const cat = new PIXI.Sprite(
        resources.cat.texture
    );
    cat.pivot.set(cat.width / 2, cat.height / 2);
    cat.width = cat. width / 2;    
    cat.height = cat. height / 2;
    cat.x = 643;
    cat.y = 320;
    cat.alpha = 0;
    app.stage.addChild(cat);

    const pumpkin = new PIXI.Sprite(
        resources.pumpkin.texture
    );
    pumpkin.pivot.set(pumpkin.width / 2, pumpkin.height / 2);
    pumpkin.width = pumpkin. width / 10;    
    pumpkin.height = pumpkin. height / 10;
    pumpkin.x = 250;
    pumpkin.y = 365;
    pumpkin.alpha = 0;
    app.stage.addChild(pumpkin);
    
    const timeline = gsap.timeline();

    timeline.to([lightning], { pixi: { alpha:0, duration: 0.3 }, repeat: 1 });
    timeline.to(house, { alpha:0.3, duration: 3 });
    timeline.from([title, title2], { pixi: { alpha:0, duration: 3 }, stagger: 0.5 });
    timeline.to(catrun, { alpha: 1, x: 900 });
    timeline.from([lightning], { pixi: { alpha:1, duration: 0.1 }});
    timeline.to([lightning], { pixi: { alpha:0, duration: 0.1 }});
    timeline.to([cat], { pixi: { alpha: 0.2 }});
    timeline.to(pumpkin, { alpha: 0.4 }, '<');
    timeline.to(house, { alpha:0.2, duration: 3 });



}); 