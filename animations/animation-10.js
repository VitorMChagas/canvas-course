const options = {
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    targetSelector: '#stage',
    fontFamilies: ['Frijole'],
    resources: { 
        house: 'https://gbaptista.s3-sa-east-1.amazonaws.com/canvas-course/house.jpeg',
        ghost: 'https://gbaptista.s3-sa-east-1.amazonaws.com/canvas-course/ghost.png',
        pumpkin: 'https://gbaptista.s3-sa-east-1.amazonaws.com/canvas-course/pumpkin-lamp.png',
        spider: 'https://gbaptista.s3-sa-east-1.amazonaws.com/canvas-course/spider.png'
    }
}

setup(options, (app, resources) => {
    const style = new PIXI.TextStyle({
        fontFamily: 'Frijole',
        fontSize: 60, fill: 0xffffff,
    });

    const house = new PIXI.Sprite(
        resources.house.texture
    );
    house.pivot.set(house.width / 2, house.height / 2);
    house.width = house. width / 4;    
    house.height = house. height / 4;
    house.x = 800/2;
    house.y = 600/2;
    house.alpha = 0.3;
    app.stage.addChild(house);

    const title = new PIXI.Text('Halloween Party', style)
    title.pivot.set(title.width / 2, title.height / 2);
    title.x = 800/2;
    title.y = 140;
    app.stage.addChild(title);

    const timeline = gsap.timeline();

    timeline.from(title, { 
        pixi: { y: -100 },
        ease: 'bounce'
    })
    gsap.from(house,
        { pixi: { alpha: 0 },
          ease: 'expo.in',
          duration: 0.5,
          delay: 0.5
        },
    );
    const ghost = new PIXI.Sprite(
        resources.ghost.texture
    );
    ghost.x = 120; ghost.y = 480;
    ghost.pivot.set(ghost.width / 2, ghost.height / 2);
    ghost.tint = 0xcc4a26;
    ghost.scale = 0;
    ghost.alpha = 0.4;
    app.stage.addChild(ghost);
    gsap.timeline({repeat: -1}).to(ghost, {
        pixi: { y: -50, scale: 1 },
        delay: 1, duration: 2
    });

    const pumpkin = new PIXI.Sprite(
        resources.pumpkin.texture
    );
    pumpkin.x = 420; pumpkin.y = 480;
    pumpkin.pivot.set(pumpkin.width / 2, pumpkin.height / 2);
    pumpkin.tint = 0xcc4a26;
    pumpkin.scale = 0;
    pumpkin.alpha = 0.4;
    app.stage.addChild(pumpkin);
    gsap.timeline({repeat: -1}).to(pumpkin, {
        pixi: { y: -50, scale: 1 },
        delay: 2, duration: 2
    });

    const spider = new PIXI.Sprite(
        resources.spider.texture
    );
    spider.x = 720; spider.y = 480;
    spider.pivot.set(spider.width / 2, spider.height / 2);
    spider.tint = 0xcc4a26;
    spider.scale = 0;
    spider.alpha = 0.4;
    app.stage.addChild(spider);
    gsap.timeline({repeat: -1}).to(spider, {
        pixi: { y: -50, scale: 1 },
        delay: 3, duration: 2
    });
});