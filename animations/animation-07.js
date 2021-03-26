const options = {
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    targetSelector: '#stage',
    fontFamilies: ['Stick', 'Ballet']
}

setup(options, (app) => {
    const style = new PIXI.TextStyle({
        fontFamily: 'Ballet',
        fontSize: 80,
        wordWrap: true,
        wordWrapWidth: 50,
        fill: 0xffffff,
        align: 'center'
    });

    const text = new PIXI.Text(
        'Hello World!', style
    );

    text.tint = 0x347deb;

    text.pivot.set(text.width / 2, text.height / 2);

    text.x = 420;
    text.y = 300;

    app.stage.addChild(text);
    
    const textB = new PIXI.Text(
        'Lorem Ipsum', {
            fontFamily: 'Stick',
            fontSize: 40
        }
    );

    app.stage.addChild(textB);
    
    gsap.from(text, {
        pixi: { scale: 0 },
        delay: 0.2
    });

    gsap.to(text, {
        pixi: { tint: 0xeb4f34 },
        delay: 1
    });
});