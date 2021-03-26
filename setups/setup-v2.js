const setup = (options, onReady) => {
    const settings = {
        width: options.width,
        height: options.height,
        backgroundColor: options.backgroundColor,
        antialias: true
        };
        
    let app;

    if(PIXI.utils.isWebGLSupported()) {
        app = new PIXI.Application(settings);
    } else {
        settings.forceCanvas = true;
        app = new PIXILegacy.Application(settings);
    }
    
    document.querySelector(
        options.targetSelector
    ).appendChild(app.view);
    
    PixiPlugin.registerPIXI(PIXI);
    gsap.registerPlugin(PixiPlugin);

    const fontsToLoad = [];

    options.fontFamilies.forEach(fontFamily => {
        const font = new FontFaceObserver(fontFamily);
        fontsToLoad.push(font);
    });

    Promise.all(
        fontsToLoad.map(font => font.load())
    ).then(() => {
        onReady(app);
    });
}